import {tween} from 'popmotion'
import {filter} from '../util'

const
    {cos, sin, sqrt, atan2} = Math

let core

export default function(_core) {
    core = _core
    return Tram
}


class Tram extends PIXI.Container {
    constructor(options={}) {
        super()
        this.velocity = 0
        this.torque = 500
        this.doorOffset = 0
        this.opened = 0

        this.options = options


        this.update()
    }

    // 相对于 this.body
    syncPosition(target, x, y) {
        const
            s = sqrt(x ** 2 + y ** 2),
            theta = atan2(y, x)

        target.rotation = this.body.rotation

        target.x = this.body.x + cos(theta + target.rotation) * s
        target.y = this.body.y + sin(theta + target.rotation) * s
    }

    update() {
        core.ticker.add(() => {
            this.syncPosition(this.doors[2], this.doorOffset - 145, -38)
            this.syncPosition(this.doors[3], this.doorOffset + 105, -38)
            this.syncPosition(this.doors[0], -140, -35)
            this.syncPosition(this.doors[1], 105, -35)
        })
    }

    openDoor() {
        if (this.opened === 0) {
            this.opened = 2
            tween({from: this.doorOffset, to: 40, duration: 3e2}).start({
                update: v => this.doorOffset = v,
                complete: () => this.opened = 1
            })
        }
    }

    closeDoor() {
        if (this.opened === 1) {
            this.opened = 2
            tween({from: this.doorOffset, to: 0, duration: 3e2}).start({
                update: v => this.doorOffset = v,
                complete: () => this.opened = 0
            })
        }
    }

    setup(resource) {
        const textures = resource.misc.tram.textures

        this.resource = resource
        this.body = new PIXI.Sprite(textures['tram.1.png'])

        this.doors = [
            new PIXI.Sprite(textures['tram.7.png']),
            new PIXI.Sprite(textures['tram.7.png']),
            new PIXI.Sprite(textures['tram.6.png']),
            new PIXI.Sprite(textures['tram.6.png'])
        ]

        this.axles = [
            new PIXI.Sprite(textures['tram.3.png']),
            new PIXI.Sprite(textures['tram.3.png'])
        ]

        this.wheels = [
            new PIXI.Sprite(textures['tram.2.png']),
            new PIXI.Sprite(textures['tram.2.png']),
            new PIXI.Sprite(textures['tram.2.png']),
            new PIXI.Sprite(textures['tram.2.png'])
        ]

        this.options.position && this.body.position.copy(this.options.position)
        this.addChild(...this.doors, this.body, ...this.axles, ...this.wheels)
        this.setPhysics()
    }

    setPhysics() {
        const
            shape = this.resource.misc.miscShape.data.bodies,
            wheelDef = {
                motorSpeed: this.velocity,
                maxMotorTorque: this.torque,
                enableMotor: true,
                frequencyHz: 3,
                dampingRatio: .8
            },
            wheelAxis = {x: 0, y: 1},
            filterDef = {
                filterCategoryBits: filter.category.tram,
                filterMaskBits: filter.mask.tram
            }

        this.axles[0].position.set(this.body.x - 130, this.body.y + 80)
        this.axles[1].position.set(this.body.x + 130, this.body.y + 80)

        this.wheels[0].position.set(this.axles[0].x - 30, this.axles[0].y + 5)
        this.wheels[1].position.set(this.axles[0].x + 30, this.axles[0].y + 5)
        this.wheels[2].position.set(this.axles[1].x - 30, this.axles[1].y + 5)
        this.wheels[3].position.set(this.axles[1].x + 30, this.axles[1].y + 5)


        this.body.enable().loadPolygon(
            shape['tram-body'].fixtures[0].polygons,
            {
                density: .3,
                ...filterDef
            }
        )

        this.axles.forEach((axle, i) => {
            axle.enable().loadPolygon(shape['tram-axle'].fixtures[0].polygons, filterDef)
            this.body.rigidBody.createRevoluteJoint(
                axle.rigidBody,
                axle.position,
                {
                    lowerAngle: -.02 * Math.PI,
                    upperAngle: .02 * Math.PI,
                    enableLimit: true
                }
            )
        })

        this.wheels.forEach((wheel, i) => {
            const axle = this.axles[i < 2 ? 0 : 1]
            wheel.enable().loadCircle(15, {friction: .8, ...filterDef})
            axle.rigidBody.createWheelJoint(
                wheel.rigidBody,
                wheel.position,
                wheelAxis,
                wheelDef
            )
        })

        this.wheelJoints = this.wheels.map(wheel => wheel.getJoints()[0])
    }
}
import * as core from '../core'
import {game} from './scope'
import {tween, transform} from 'popmotion'
import * as util from '../util'

const {cos, sin, sqrt, atan2, abs, min} = Math



export default class Tram extends PIXI.Container {
    constructor(options={}) {
        super()
        this.velocity = 0
        this.torque = 0
        this.doorOffset = 0
        this.opened = 0
        this.station = 0 //0: 起点 1: 终点
        this.direction = 1
        this.speed = 12
        this.driver = null

        this.options = options

        this.setup()
        this.setPhysics()
        this.update()
    }

    // 相对于 this.body
    syncPosition(...args) {

        const target = args[0]

        let x, y

        if (args.length === 1) {
            x = target.offset.x
            y = target.offset.y
        } else {
            x = args[1]
            y = args[2]
        }

        const
            s = sqrt(x ** 2 + y ** 2),
            theta = atan2(y, x)

        target.rotation = this.body.rotation

        target.x = this.body.x + cos(theta + target.rotation) * s
        target.y = this.body.y + sin(theta + target.rotation) * s
    }

    run(direction) {
        this.direction = direction
        this.torque = 500
        this.wheelJoints.forEach(joint => {
            joint.setMaxMotorTorque(this.torque)
        })
    }

    stop() {
        this.torque = 0
        this.wheelJoints.forEach(joint => {
            joint.setMaxMotorTorque(this.torque)
        })
    }

    setDriver(driver) {
        if (this.driver === driver) return
        driver.isDriver = true
        this.driver = driver
        this.driver.offset.x = this.driver.x - this.body.x
        this.driver.offset.y = this.driver.y - this.body.y
    }

    restrict() {
        let v = this.body.rigidBody.getLinearVelocity()

        if (this.body.x < util.point.start + 400 && v.x < 0) {
            v = min(abs(util.point.start - this.body.x) / 20, 5) * this.direction
            v < 0 && this.body.x <= util.point.start ? v = 0 : null

            this.wheelJoints.forEach(joint => {
                joint.setMotorSpeed(v)
                joint.setMaxMotorTorque(500)
            })

            return true
        } else if (this.body.x > util.point.end - 400 && v.x > 0) {
            v = min(abs(util.point.end - this.body.x) / 20, 5) * this.direction
            v > 0 && this.body.x >= util.point.end ? v = 0 : null

            this.wheelJoints.forEach(joint => {
                joint.setMotorSpeed(v)
                joint.setMaxMotorTorque(500)
            })

            return true
        }

        return false

    }

    update() {
        core.ticker.add(() => {
            let speed = abs(this.wheelJoints[0].getJointSpeed())

            this.syncPosition(this.doors[2], this.doorOffset - 145, -38)
            this.syncPosition(this.doors[3], this.doorOffset + 105, -38)
            this.syncPosition(this.doors[0], -140, -35)
            this.syncPosition(this.doors[1], 105, -35)
            this.driver && this.syncPosition(this.driver)

            if (this.body.rigidBody.getLinearVelocity().x === 0) {
                if (util.equal(this.body.x, util.point.start, 5)) {
                    this.station = 0
                } else if (util.equal(this.body.x, util.point.end, 5)) {
                    this.station = 1
                } else this.station = -1
            }

            if (this.torque) {
                speed < this.speed ? speed += .05 : speed = this.speed
            }

            if (!this.restrict()) {
                this.wheelJoints.forEach(joint => {
                    joint.setMotorSpeed(speed * this.direction)
                })
            }
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

    setup() {
        const textures = game.resource.misc.tram.textures

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
    }

    setPhysics() {
        const
            shape = game.resource.misc.miscShape.data.bodies,
            wheelDef = {
                motorSpeed: this.velocity,
                maxMotorTorque: this.torque,
                enableMotor: true,
                frequencyHz: 3,
                dampingRatio: .8
            },
            wheelAxis = {x: 0, y: 1},
            filterDef = {
                filterCategoryBits: util.filter.category.tram,
                filterMaskBits: util.filter.mask.tram
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
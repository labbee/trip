import {tween, chain} from 'popmotion'

let core

export default function(_core) {
    core = _core
    return Human
}

class Human extends PIXI.Sprite {
    constructor(texture, options={}) {
        super(texture)
        this.speed = 2
        this.velocity = {x: 0, y: 0}
        this.acceleration = {x: 0, y: 0}
        this.direction = 1
        this.turning = false

        options.position && this.position.copy(options.position)
        options.shape && this.enable(options.bodyDef).loadPolygon(options.shape, options.fixtureDef)

        this.listen()
        this.update()
    }

    run(direction) {
        if (direction !== this.direction) {
            this.direction = direction
            this.turn()
        }
        this.velocity.x = this.direction * this.speed
    }

    stop() {
        this.velocity.x = 0
    }

    turn(direction) {
        if (direction && this.direction === direction) return
        if (this.turning) return

        this.turning = true
        this.direction = direction

        chain(
            tween({from: 1, to: 0, duration: 100}),
            tween({to: 1, duration: 100})
        ).start({
            update: v => {
                this.scale.x = v
                if (!v) this.texture.rotate = this.direction === 1 ? 0 : 12
            },
            complete: () => this.turning = false
        })
    }

    listen() {
        this.rigidBody.collidable = true
        this.on('pre-solve', () => {
            if (this.velocity.x) {
                this.velocity.y = -this.speed
                this.acceleration.y = .3
            }
        })
    }

    update() {
        core.ticker.add(() => {
            if (this.rigidBody.isDynamic() && !this.turning) {
                this.velocity.y += this.acceleration.y
                this.rigidBody.setLinearVelocity(this.velocity)
            }
        })
    }
}
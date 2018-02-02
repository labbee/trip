import {tween, chain, easing} from 'popmotion'
import * as util from '../util'
import * as core from '../core'

const {sin, cos} = Math

export default class Human extends PIXI.Sprite {
    constructor(texture, options={}) {
        super(texture)
        this.speed = 2
        this.velocity = {x: 0, y: 0}
        this.acceleration = {x: 0, y: 0}
        this.direction = 1
        this.turning = false
        this.isDriver = false

        // 车上的偏移
        this.offset = {x: 0, y: 0}

        /*
        * 0: 未上车
        * 1: 已上车
        * -1: 正在上/下车
        */
        this.status = 0

        options.position && this.position.copy(options.position)
        options.shape && this.enable(options.bodyDef).loadPolygon(options.shape, options.fixtureDef)

        this.listen()
        this.update()
    }

    run(direction) {
        // 车上禁止随意跑动
        if (this.status) return

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

    // 上车
    enter(tram, door) {
        if (this.status !== 0) return
        const
            _this = this

        this.status = -1
        this.velocity.x = 0
        this.rigidBody.destroy()

        core.ticker.add(function() {
            if (_this.parent !== tram) {
                const
                    position = _this.getGlobalPosition(),
                    dy = door.toLocal(position).y

                if (util.equal(dy, 39, 1)) {
                    _this.velocity.y = 0
                } else if (dy < 39) _this.velocity.y = 1
                else if (dy > 39) _this.velocity.y = -1

                if (!_this.velocity.y) {
                    const point = tram.toLocal(position)
                    tram.addChildAt(_this, 2)
                    _this.position.copy(point)

                    _this.walk(65, 1300).then(() => {
                        _this.status = 1
                        tram.setDriver(_this)
                        tram.closeDoor()
                    })
                }
            } else core.ticker.remove(this.fn, this.context)
        })

    }

    // 下车
    leave() {

    }

    walk(x, t, amp=.2) {
        this.velocity.x = 0
        return new Promise(resolve => {
            x *= this.direction
            const anime = tween({
                from: this.x,
                to: this.x + x,
                duration: t,
                ease: easing.linear
            }).start({
                update: v => {
                    this.x = v
                    this.velocity.y = sin(anime.getElapsed() / 100) * amp
                },
                complete: () => {
                    this.velocity.y = 0
                    this.velocity.x = 0
                    resolve()
                }
            })
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
            if (this.turning) {

            } else if (this.status) {
                this.x += this.velocity.x
                this.y += this.velocity.y
            } else if (this.rigidBody) {
                this.velocity.y += this.acceleration.y
                this.rigidBody.setLinearVelocity(this.velocity)
            }
        })
    }
}
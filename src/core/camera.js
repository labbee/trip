const
    {max, abs, exp} = Math

let core

export default function(_core) {
    core = _core
    return Camera
}

class Camera extends PIXI.Container {
    constructor() {
        super()

        this.distance = {x: 0, y: 0}
        this.update()
    }

    follow(target) {
        if (this.target === target) return
        this.target = target
    }

    unfollow() {
        this.target = null
    }

    setDistance(x, y) {
        x = Number.isFinite(x) ? x : this.distance.x
        y = Number.isFinite(y) ? y : this.distance.y
        this.distance.x = x
        this.distance.y = y
    }

    track(t) {
        const
            point = this.target.getGlobalPosition(),
            hw = core.view.width * .5 + this.distance.x,
            hh = core.view.height * .5 + this.distance.y,
            ratio = 1 - exp(-t / 50)

        point.x = hw - point.x
        point.y = (hh - point.y) * ratio

        point.x += this.position.x
        point.y += this.position.y

        this.position.copy(point)
    }

    update() {
        core.ticker.add(t => {
            this.target && this.track(t)
        })
    }
}
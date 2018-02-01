/*
* 类似 cocos creator 的 canvas 组件
* 容器中心始终与屏幕中心对齐
*/

let core

export default function(_core) {
    core = _core
    return View
}


class View extends PIXI.Container {
    constructor() {
        super()
        this.listen()
    }

    appendChild(...args) {
        this.addChild(...args)
        this.pivot.set(this.width / 2, this.height / 2)
        this.align()
    }

    appendChildAt(...args) {
        this.addChildAt(...args)
        this.pivot.set(this.width / 2, this.height / 2)
        this.align()
    }

    // 重新对齐
    align() {
        this.position.copy(core.stage.toLocal({
            x: core.view.width >> 1,
            y: core.view.height >> 1
        }))
    }

    listen() {
        const _this = this

        window.addEventListener('resize', resize)

        function resize() {
            if (_this._destroyed) {
                window.removeEventListener('resize', resize)
                return
            }
            if (resize.wait) return
            resize.wait = true
            setTimeout(() => {
                resize.wait = false
                _this.align()
            }, 1e2)
        }
    }
}
import * as core from '../core'
import setLoader from './loader'
import setLayer from './layer'

export const load = setLoader(core)
export const Layer = setLayer(core)
export {core}


resize(0)
window.addEventListener('resize', resize)

function resize(t=100) {
    if (resize.wait) return
    resize.wait = true
    setTimeout(() => {
        const
            {innerWidth, innerHeight} = window,
            {view, setting, renderer, stage} = core
        let width, height

        resize.wait = false

        if (innerWidth <= innerHeight) {
            width = innerHeight
            height = innerWidth
            setting.rotation = 90
        } else {
            width = innerWidth
            height = innerHeight
            setting.rotation = 0
        }

        setting.ratio = window.devicePixelRatio || 1

        view.style.width = `${width}px`
        view.style.height = `${height}px`
        view.style.top = `${(innerHeight - height) * .5}px`
        view.style.left = `${(innerWidth - width) * .5}px`

        // 重新渲染
        renderer.resize(width * setting.ratio, height * setting.ratio)
        setting.scale = Math.min(view.width / setting.width, view.height / setting.height)
        stage.scale.set(setting.scale)
    }, t)
}
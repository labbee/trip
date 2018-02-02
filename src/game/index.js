import * as core from '../core'
import load from './loader'
import {game} from './scope'
import Layer from './layer'
import Tram from './tram'
import Human from './human'
import {filter} from '../util'
import {key} from './monitor'


load(() => {
    const
        camera = new core.Camera(),
        layer = new Layer(),
        tram = new Tram({position: {x: 1660, y: 544}}),
        jack = new Human(game.resource.misc.character.textures['character.7.png'], {
            shape: game.resource.misc.miscShape.data.bodies['jack'].fixtures[0].polygons,
            position: {x: 524, y: 554},
            bodyDef: {fixedRotation: true},
            fixtureDef: {
                filterCategoryBits: filter.category.jack,
                filterMaskBits: filter.mask.jack
            }
        })

    layer.children[1].addChild(tram, jack)

    window.tram = tram
    window.jack = jack
    window.key = key

    camera.addChild(layer)
    camera.follow(jack)
    core.stage.addChild(camera)

    core.ticker.add(() => {
        if (key.left) {
            jack.isDriver ? tram.run(-1) : jack.run(-1)
        } else if (key.right) {
            jack.isDriver ? tram.run(1) : jack.run(1)
        } else {
            jack.isDriver ? tram.stop() : jack.stop()
        }

        // 起点
        if (tram.station === 0) {
            // 开门
            jack.status === 0 &&
            !tram.opened &&
            tram.body.toLocal(jack.getGlobalPosition()).x > 10 &&
            tram.openDoor()

            // 上车
            jack.status === 0 &&
            tram.doors[1].toLocal(jack.getGlobalPosition()).x > 16 &&
            jack.enter(tram, tram.doors[1])
        }
    })
})

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



import * as core from '../core'
import Camera from '../core/camera'
import load from './loader'
import Layer from './layer'
import Tram from './tram'
import Human from './human'
import {game} from './scope'
import {filter} from '../util'
import {key} from './monitor'
import {tween, easing} from 'popmotion';

import '../core/physics'
import 'howler'



load(() => {
    const
        camera = new Camera(),
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

    game.resource.sounds.atmos.play()

    camera.addChild(layer)
    camera.follow(jack)
    core.stage.addChild(camera)

    core.ticker.add(function() {
        if (game.ended) {
            tween({
                from: 1,
                to: 0,
                duration: 1e3,
                ease: easing.easeOut
            }).start({
                update: v => {
                    camera.alpha = v
                },

                complete: goodbye
            })
            core.ticker.remove(this.fn, this.context)
        }


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

        // 终点
        if (tram.station === 1) {
            // 开门
            jack.status === 1 &&
            !tram.opened &&
            tram.openDoor()

            // 下车
            jack.status === 1 &&
            tram.opened &&
            jack.leave(tram, tram.doors[1])

        }
    })
})


function goodbye() {
    const
        str = '原创作者：Alexander Perrin\n\n特别鸣谢：Vangie',
        text = new PIXI.Text(str, {
            align: 'center',
            fontSize: 36,
            fill: 0x555555
        })

    text.pivot.set(text.width >> 1, text.height >> 1)
    text.position.copy(core.stage.toLocal({
        x: core.view.width >> 1,
        y: core.view.height >> 1
    }))
    text.alpha = 0

    core.stage.addChild(text)

    tween({
        from: 0,
        to: 1,
        duration: 2e3,
        ease: easing.easeOut
    }).start(v => text.alpha = v)

    game.resource.sounds.journey.play()

}


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



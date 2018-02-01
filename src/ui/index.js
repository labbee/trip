import 'pixi.js'
import 'howler'
import './index.less'
import * as game from '../game'
import {road} from '../scenes'
import {filter} from '../util'

game.load(resource => {
    console.log(resource)
    const
        layer = new game.Layer(),
        camera = new game.core.Camera(),
        tram = new game.Tram({position: {x: 1660, y: 543}}),
        jack = new game.Human(resource.misc.character.textures['character.7.png'], {
            shape: resource.misc.miscShape.data.bodies['jack'].fixtures[0].polygons,
            position: {x: 524, y: 554},
            bodyDef: {fixedRotation: true},
            fixtureDef: {
                filterCategoryBits: filter.category.jack,
                filterMaskBits: filter.mask.jack
            }
        })

    layer.setup(resource) // 自然场景

    // 添加电车
    tram.setup(resource)
    layer.children[1].addChild(tram)

    // 添加主角
    layer.children[1].addChild(jack)

    camera.addChild(layer)
    camera.follow(jack)
    game.core.stage.addChild(camera)


    game.core.ticker.add(() => {
        if (game.key.left) {
            jack.run(-1)
        } else if (game.key.right) {
            jack.run(1)
        } else {
            jack.stop()
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
            {view, setting, renderer, stage} = game.core

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

document.addEventListener('contextmenu', event => {
    event.preventDefault()
})
import 'pixi.js'
import 'howler'
import './index.less'
import * as game from '../game'

game.load(resource => {
    const
        layer = new game.Layer(),
        camera = new game.core.Camera()

    layer.setup(resource)

    camera.addChild(layer)
    game.core.stage.addChild(camera)
})

document.addEventListener('contextmenu', event => {
    event.preventDefault()
})
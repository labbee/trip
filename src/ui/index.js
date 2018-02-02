import 'pixi.js'
import 'howler'
import './index.less'
import '../game'

// game.load(resource => {
//     console.log(resource)
//     const
//         layer = new game.Layer(),
//         camera = new game.core.Camera(),
//         tram = new game.Tram({position: {x: 1660, y: 543}}),
//         jack = new game.Human(resource.misc.character.textures['character.7.png'], {
//             shape: resource.misc.miscShape.data.bodies['jack'].fixtures[0].polygons,
//             position: {x: 524, y: 554},
//             bodyDef: {fixedRotation: true},
//             fixtureDef: {
//                 filterCategoryBits: filter.category.jack,
//                 filterMaskBits: filter.mask.jack
//             }
//         })

//     layer.setup(resource) // 自然场景

//     // 添加电车
//     tram.setup(resource)
//     layer.children[1].addChild(tram)

//     // 添加主角
//     layer.children[1].addChild(jack)

//     camera.addChild(layer)
//     camera.follow(jack)
//     game.core.stage.addChild(camera)


//     game.core.ticker.add(() => {
//         if (game.key.left) {
//             jack.run(-1)
//         } else if (game.key.right) {
//             jack.run(1)
//         } else {
//             jack.stop()
//         }
//     })

// })






document.addEventListener('contextmenu', event => {
    event.preventDefault()
})
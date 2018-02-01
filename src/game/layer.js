import {sort, filter} from '../util'
import * as scenes from '../scenes'
import Road from './road'

let core

export default function(_core) {
    core = _core
    return Layer
}


class Layer extends PIXI.Container {
    constructor() {
        super()

        this.layers = [
            new PIXI.Container(),
            new PIXI.Container(),
            new PIXI.Container()
        ]

        this.addChild(...this.layers)
        this.update()
    }

    addRoad(...paths) {
        paths.forEach(path => {
            this.layers[2].addChild(new Road(
                path.points,
                path.fixtureDef
            ))
        })
    }

    setup(resource) {
        const
            {background, foreground} = scenes.init(core, resource),
            cmp = (a, b) => a.z - b.z,
            _this = this

        sort(background, cmp).forEach(item => {
            const child = fit(item)
            child && this.layers[0].addChild(child)
        })

        sort(foreground, cmp).forEach(item => {
            const child = fit(item)
            child && this.layers[2].addChild(child)
        })

        // 添加路径
        this.addRoad(
            {
                points: scenes.road.railway,
                fixtureDef: {
                    filterCategoryBits: filter.category.railway,
                    filterMaskBits: filter.mask.railway
                }
            },
            {
                points: scenes.road.pathway[0],
                fixtureDef: {
                    filterCategoryBits: filter.category.pathway,
                    filterMaskBits: filter.mask.pathway
                }
            }
        )

        function fit(item) {
            let display
            if (item.display) {
                display = item.display
            } else if (item.texture) {
                display = new PIXI.Sprite(item.texture)
            } else return null

            display.config = item
            display.alpha = item.alpha
            display.rotation = item.rotation
            display.position.set(item.x, item.y)
            display.scale.set(item.scale.x, item.scale.y)
            item.drag && display.drag()
            // display.drag()

            return display
        }
    }

    update() {
        core.ticker.add(() => {
            const
                hw = core.view.width * .5,
                hh = core.view.height * .5

            this.layers[0].children.forEach(child => {
                if (child.config && !child.config.drag) {
                    const point = child.getGlobalPosition()
                    child.x = child.config.x + (hw - point.x) *
                        (child.config.z < 0 ? Math.exp(20 / child.config.z) : 0)
                }
            })
        })
    }
}
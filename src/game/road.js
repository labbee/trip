export default class Road extends PIXI.Container {
    constructor(points=[], fixtureDef={}, debug=false) {
        super()

        this.points = points
        this.fixtureDef = fixtureDef

        this.setPhysics()
        this.draw()
    }

    setPhysics() {
        this.enable({
            anchor: {x: 0, y: 0}
        }).setStatic().createChain(this.points.map(point => ({
            x: point.x - this.x,
            y: point.y - this.y
        })), null, {
            friction: 1,
            ...this.fixtureDef
        })
    }

    stringify() {
        return JSON.stringify(this.points.map(point => ({
            x: parseInt(point.x),
            y: parseInt(point.y)
        })))
    }

    clear() {
        while (this.children.length) this.children[0].destroy(true)
    }

    draw() {
        this.clear()
        console.log(this.stringify())
        this.points.forEach((point, i) => {
            const dot = new PIXI.Graphics()
                .beginFill(0xe91e63)
                .drawCircle(0, 0, 8)
                .endFill()

            // 连线
            if (this.points[i+1]) {
                const
                    next = this.points[i+1],
                    line = new PIXI.Graphics()
                        .lineStyle(1, 0xff9800)
                        .moveTo(0, 0)
                        .lineTo(next.x - point.x, next.y - point.y)

                line.position.set(point.x, point.y)
                this.addChild(line)
            }

            dot.position.set(point.x, point.y)


            /* 监听 */
            dot.interactive = true
            dot.delta = {}
            dot.on('pointerdown', event => {
                if (!global.util.key.shift) {
                    dot.down = true
                    dot.delta.x = dot.x - event.data.global.x / global.util.ratio
                    dot.delta.y = dot.y - event.data.global.y / global.util.ratio
                } else this.removePoint(dot.x, dot.y)
                event.stopPropagation()
            }).on('pointermove', event => {
                if (dot.down) {
                    dot.x = event.data.global.x / global.util.ratio + dot.delta.x
                    dot.y = event.data.global.y / global.util.ratio + dot.delta.y
                }
            }).on('pointerup', event => {
                dot.down = false
                this.points[i].x = dot.x
                this.points[i].y = dot.y
                this.draw()
            })

            this.addChild(dot)
        })
    }
}
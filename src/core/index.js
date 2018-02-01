import 'pixi.js'
import setPhysics from './physics'
import setCamera from './camera'
import setView from './view'

export const setting = {
    width: 1334,
    height: 750,
    rotation: 0,
    scale: 1,
    ratio: window.devicePixelRatio || 1
}

const app = new PIXI.Application({
    width: window.innerWidth * setting.ratio,
    height: window.innerHeight * setting.ratio,
    backgroundColor: 0xffffff,
    view: document.querySelector('canvas')
})

const core = {
    setting,
    renderer: app.renderer,
    stage: app.stage,
    ticker: app.ticker,
    loader: app.loader,
    view: app.view
}

setPhysics(core)
export const Camera = setCamera(core)
export const View = setView(core)

export const renderer = app.renderer
export const stage = app.stage
export const view = app.view
export const ticker = app.ticker
export const loader = app.loader


app.renderer.plugins.interaction.mapPositionToPoint = function(point, x, y) {
    let rect

    // IE 11 fix
    if (!this.interactionDOMElement.parentElement) {
        rect = {x: 0, y: 0, width: 0, height: 0}
    } else {
        rect = this.interactionDOMElement.getBoundingClientRect()
    }

    const resolutionMultiplier = navigator.isCocoonJS ? this.resolution : 1 / this.resolution

    if (setting.rotation === 90) {
        point.y = (1 - (x - rect.left) / rect.width) * this.interactionDOMElement.height * resolutionMultiplier
        point.x = (y - rect.top) * (this.interactionDOMElement.width / rect.height) * resolutionMultiplier
    } else {
        point.x = ((x - rect.left) * (this.interactionDOMElement.width / rect.width)) * resolutionMultiplier
        point.y = ((y - rect.top) * (this.interactionDOMElement.height / rect.height)) * resolutionMultiplier
    }

}

PIXI.DisplayObject.prototype.drag = function() {
    let down = false,
        delta

    this.interactive = true

    this
        .on('pointerdown', event => {
            down = true
            delta = event.data.getLocalPosition(this)
            event.stopPropagation()
        })
        .on('pointerup', () => {
            down = false
            console.log(`x: ${~~this.x}, y: ${~~this.y}`)
        })
        .on('pointermove', event => {
            if (down) {
                const
                    point = event.data.getLocalPosition(this),
                    x = point.x - delta.x,
                    y = point.y - delta.y,
                    s = Math.sqrt(x ** 2 + y ** 2),
                    theta = Math.atan2(y, x)

                this.x += Math.cos(theta + this.rotation) * s
                this.y += Math.sin(theta + this.rotation) * s
            }
        })

    return this
}


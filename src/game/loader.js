import * as core from '../core'
import View from '../core/view'
import {game} from './scope'


const
    prefix = ver === 'production' ? '//cdn.safish.org/trip' : './src',
    results = {}


export default async function(callback) {
    await loadFont()
    await progress(callback)
}



async function progress(callback) {
    const
        container = new View(),
        text = new PIXI.extras.BitmapText('载入资源', {font: '60px chun-ran'}),
        innerBar = new PIXI.Graphics().beginFill(0x888888).drawRect(0, 0, 600, 16),
        outerBar = new PIXI.Graphics().beginFill(0xdddddd).drawRect(0, 0, 600, 16)

    let moment = 0, total = 0

    text.align = 'center'
    outerBar.y += text.height * .9
    innerBar.scale.set(0, 1)
    text.position.set((outerBar.width - text.width) / 2, -text.height * .5)
    innerBar.position.copy(outerBar.position)

    container.appendChild(text, outerBar, innerBar)
    core.stage.addChild(container)

    core.ticker.add(function() {
        innerBar.scale.x < total / 100 ? innerBar.scale.x += .02 : null
        if (innerBar.scale.x >= 1) {

            const button = PIXI.Sprite.from('button')

            innerBar.scale.x = 1
            game.resource = results

            innerBar.destroy()
            outerBar.destroy()

            text.text = '为了更好的游戏体验\n建议关闭低电量模式和静音模式'
            text.position.set(0)

            button.scale.set(.3)
            button.position.set((text.width - button.width) >> 1, button.height * 2)
            container.appendChild(button)
            container.align()

            button.interactive = true
            button.on('pointerdown', () => {
                callback()
                container.destroy()
            })

            core.ticker.remove(this.fn, this.context)
        }
    })

    await loadTextures(percent => total = moment + percent * .5)
    moment = total
    await loadSounds(percent => total = moment + percent * .5)
}

async function loadFont() {
    await new Promise(resolve => {
        core.loader
            .add('chunRan', `${prefix}/assets/fonts/chun-ran.xml`)
            .load(resolve)
    })
}

function loadTextures(step) {
    return new Promise(resolve => {
        core.loader
            .add('paper', `${prefix}/assets/sprites/paper.png?${hash}`)
            .add('button', `${prefix}/assets/sprites/button.png?${hash}`)
            .add('water', `${prefix}/assets/sprites/water.png?${hash}`)
            .add('character', `${prefix}/assets/sprites/character.json?${hash}`)
            .add('tram', `${prefix}/assets/sprites/tram.json?${hash}`)
            .add('dock', `${prefix}/assets/sprites/dock.json?${hash}`)
            .add('terrain', `${prefix}/assets/sprites/terrain.json?${hash}`)
            .add('depot', `${prefix}/assets/sprites/depot.json?${hash}`)
            .add('tree', `${prefix}/assets/sprites/tree.json?${hash}`)
            .add('misc', `${prefix}/assets/sprites/misc.json?${hash}`)
            .add('house', `${prefix}/assets/sprites/house.json?${hash}`)
            .add('miscShape', `${prefix}/assets/physics/misc.json?${hash}`)

            .load((loader, res) => {
                results.misc = res
                resolve()
            })

            .onProgress.add(loader => {
                step(loader.progress)
            })
    })
}



function loadSounds(step) {
    const
        uri = `${prefix}/assets/sounds/`,
        sounds = {},
        queue = [
            load('atmos', {volume: .5, loop: true}),
            load('brake', {volume: .2}),
            load('door_open', {volume: .5}),
            load('journey', {volume: 1}),
            load('rail_clack', {volume: .5, sprite: {
                main: [0, 4500]
            }})
        ]



    let i = 0


    return Promise.all(queue).then(() => results.sounds = sounds)


    function load(name, options) {
        return new Promise(resolve => {
            const sound = new Howl({
                src: [`${uri}${name}.webm`, `${uri}${name}.mp3`],
                ...options
            })
            sound.once('load', function() {
                step(++i / queue.length * 100)
                sounds[name] = sound
                resolve()
            })
        })
    }
}
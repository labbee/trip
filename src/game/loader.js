const
    prefix = false ? '//cdn.safish.org/trip' : './src',
    result = {}

let core

export default function(_core) {
    core = _core
    return async function(callback) {
        await loadFont()
        await progress(callback)
    }
}

async function progress(callback) {
    const
        container = new core.View(),
        text = new PIXI.extras.BitmapText('载入资源', {font: '60px chun-ran'}),
        innerBar = new PIXI.Graphics().beginFill(0x888888).drawRect(0, 0, 600, 16),
        outerBar = new PIXI.Graphics().beginFill(0xdddddd).drawRect(0, 0, 600, 16)

    let moment = 0, total = 0


    outerBar.y += text.height * .9
    innerBar.scale.set(0, 1)
    text.position.set((outerBar.width - text.width) / 2, -text.height * .5)
    innerBar.position.copy(outerBar.position)

    container.appendChild(text, outerBar, innerBar)
    core.stage.addChild(container)

    core.ticker.add(function() {
        innerBar.scale.x < total / 100 ? innerBar.scale.x += .02 : null
        if (innerBar.scale.x >= 1) {
            innerBar.scale.x = 1
            container.destroy()
            callback(result)
            core.ticker.remove(this.fn, this.context)
        }
    })

    await loadTextures(percent => total = moment + percent * .5)
    moment = total
    await loadSongs(percent => total = moment + percent * .5)
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
                result.misc = res
                resolve()
            })

            .onProgress.add(loader => {
                step(loader.progress)
            })
    })
}



function loadSongs(step) {
    const queue = [
        load(`${prefix}/assets/songs/ambience`),
        load(`${prefix}/assets/songs/atmos`),
        load(`${prefix}/assets/songs/bell`),
        load(`${prefix}/assets/songs/brake`),
        load(`${prefix}/assets/songs/door_open`)
    ]

    let i = 0

    return Promise.all(queue).then(songs => result.songs = songs)


    function load(uri) {
        return new Promise(resolve => {
            const sound = new Howl({
                src: [`${uri}.webm`, `${uri}.mp3`]
            })
            sound.once('load', function() {
                step(++i / queue.length * 100)
                resolve(sound)
            })
        })
    }
}
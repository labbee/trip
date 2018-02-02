import * as core from '../core'

export const key = {}


window.addEventListener('touchstart', ev => {
    const point = ev.touches[0]

    let x, w

    if (core.setting.rotation === 90) {
        x = point.clientY
        w = window.innerHeight
    } else {
        x = point.clientX
        w = window.innerWidth
    }

    x <= w / 2 ? key.left = true : key.right = true
})

window.addEventListener('touchend', ev => {
    key.left = key.right = false
})

window.addEventListener('keydown', ev => {
    switch (ev.keyCode) {
        case 37:
            key.left = true
            break

        case 39:
            key.right = true
            break
    }
})

window.addEventListener('keyup', ev => {
    switch (ev.keyCode) {
        case 37:
            key.left = false
            break

        case 39:
            key.right = false
            break
    }
})


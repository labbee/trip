export const key = {}

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


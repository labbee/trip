export const PI2 = Math.PI * 2
export {default as sort} from './sort'
export const point = {
    start: 1660,
    end: 27980
}

export const filter = {
    category: {
        jack: 0x0001,
        tram: 0x0002,
        railway: 0x0004,
        pathway: 0x0008
    },

    mask: {
        pathway: 0x0001,
        jack: 0x0008,
        tram: 0x0004,
        railway: 0x0002
    }
}

export function equal(a, b, delta) {
    return Math.abs(a - b) <= delta
}
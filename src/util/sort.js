export default function(arr, cmp=null) {
    return arr.length < 2 ? arr.sort(cmp) : order(arr, cmp)
}

function order(arr, cmp) {
    return merge(slice(arr), cmp)
}

function slice(arr) {
    return Array.from({length: Math.ceil(arr.length / 2)},
        (_, i) => arr.slice(i * 2, (i + 1) * 2))
}

function merge(arr, cmp) {

    cmp = cmp || ((a, b) => a - b)

    arr.forEach(item => {
        if (item.length > 1 && cmp(item[0], item[1]) > 0) {
            const tmp = item[0]
            item[0] = item[1]
            item[1] = tmp
        }
    })

    while (arr.length > 1) {
        const
            a = arr.shift(),
            b = arr.shift(),
            c = []

        while (b.length && a.length) {
            cmp(a[0], b[0]) > 0 ? c.push(b.shift()) : c.push(a.shift())
        }

        arr.unshift(c.concat(a, b))
    }

    return arr.pop()
}

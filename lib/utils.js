

function random (arg1, arg2) {
    // random(list)
    if (Array.isArray(arg1)) {
        const list = arg1
        return list[random(list.length)]
    }

    // random(m, n)
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        const list = []
        const m = arg1
        const n = arg2
        for (let i = m; i < n; i++) {
            list.push(i)
        }
        return random(list)
    }

    // random(length)
    if (typeof arg1 === 'number') {
        const length = arg1
        return Math.floor(length * Math.random())
    }

    throw Error('arguments is error', arguments)
}

function range (m, n) {
    const arr = []
    for (let i = m; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

function repeat (callback, count = 3) {
    if (count > 0) {
        const result = []
        for (let i = 0; i < count; i++) {
            result.push(callback(i))
        }
        return result
    } else {
        throw Error('参数错误，count必须大于0')
    }
}

function capitalize (string) {
    return string.replace(/./, (letter) => letter.toUpperCase())
}

module.exports = {
    random, range, repeat, capitalize,
}

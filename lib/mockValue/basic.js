const { random, repeat, range } = require('../utils')
const alphabet = range(65, 90).concat(range(97, 122)).map(code => String.fromCharCode(code)) // [A-Za-z]
const numbers = range(0, 9)
const maxNum = Math.pow(2, 53)

module.exports = {
    letter, number, bool, boolean, integer, decimal, symbol, string, range,
}


function letter () {
    return random(alphabet)
}

function number () {
    return random(numbers)
}

function bool () {
    return boolean()
}

function boolean () {
    return random([ true, false ])
}

function integer (m, n) {
    const isNumberM = typeof m === 'number'
    const isNumberN = typeof n === 'number'

    if (isNumberM && isNumberN) {
        return m + integer(n)
    }

    if (isNumberM) {
        return random(m) + 1
    }

    return random(maxNum) + 1
}

function decimal () {
    return random(100) + random(100) / 100
}

function symbol () {
    return random('!'.split(''))
}

function string (length = 5, type = 'string') {
    const dice = ({
        string: () => letter(),
        number: () => number(),
        symbol: () => symbol(),
        hex: () => random('0123456789ABCDEF'.split('')),
        mix: () => random([ letter(), number(), symbol() ]),
    })[type]

    return repeat(() => dice(), length).join('')
}

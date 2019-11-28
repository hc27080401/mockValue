const { random } = require('../utils')
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

function integer () {
    return random(maxNum)
}

function decimal () {
    return random(100) + random(100) / 100
}

function symbol () {
    return random('!'.split(''))
}

function string () {
    return [ letter(), letter(), letter(), letter(), letter() ].join('')
}

function range (m, n) {
    const arr = []
    for (let i = m; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

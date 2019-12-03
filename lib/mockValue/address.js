const { random } = require('../utils')
const { text } = require('./text')
const { integer, string } = require('./basic')
const { regions, provinces } = require('../area')

const regionsText = regions.map(item => item.text)
// const

module.exports = {
    region, province, city, fullcity, county, fullcounty, street, fullstreet, zip,
}

function region () {
    return random(regionsText)
}

function province (type = 'text') {
    const province = random(provinces)
    if (type === 'text') {
        return province.text
    }

    if (type === 'code') {
        return province.code
    }

    if (type === 'data') {
        return { code: province.code, text: province.text }
    }
}

function city (type = 'text') {
    const province = random(provinces)
    const city = random(province.children)

    if (type === 'text') {
        return city.text
    }

    if (type === 'code') {
        return city.code
    }

    if (type === 'data') {
        return { code: city.code, text: city.text }
    }
}

function fullcity (type = 'text') {
    const province = random(provinces)
    const city = random(province.children)

    if (type === 'text') {
        return province.text + city.text
    }

    if (type === 'code') {
        return [ province.code, city.code ]
    }

    if (type === 'data') {
        return [
            { code: province.code, text: province.text },
            { code: city.code, text: city.text },
        ]
    }

    if (type === 'textArray') {
        return [ province.text, city.text ]
    }
}

function county (type = 'text') {
    const province = random(provinces)
    const city = random(province.children)
    const county = random(city.children)

    if (type === 'text') {
        return county.text
    }

    if (type === 'code') {
        return county.code
    }

    if (type === 'data') {
        return { code: county.code, text: county.text }
    }
}

function fullcounty (type = 'text') {
    const province = random(provinces)
    const city = random(province.children)
    const county = random(city.children)

    if (type === 'text') {
        return province.text + city.text + county.text
    }

    if (type === 'code') {
        return [ province.code, city.code, county.code ]
    }

    if (type === 'data') {
        return [
            { code: province.code, text: province.text },
            { code: city.code, text: city.text },
            { code: county.code, text: county.text },
        ]
    }

    if (type === 'textArray') {
        return [ province.text, city.text, county.text ]
    }
}


function street (type) {
    return `${text(2)}路${integer(1000)}号`
}

function fullstreet () {
    return fullcounty() + street()
}

function zip () {
    return string(6, 'number')
}

const { repeat } = require('../utils')
const { string, integer } = require('./basic')

module.exports = { domain, url, email, ipv4 }

function domain () {
    return `${string()}.com`
}

function url (isHttps = true) {
    return `http${isHttps ? 's' : ''}://${domain()}`
}

function email () {
    return `${string()}@${domain()}`
}

function ipv4 () {
    return repeat(() => `${integer(0, 255)}.`, 3).join('') + integer(0, 255)
}

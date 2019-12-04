const utils = require('./utils')
const basic = require('./mockValue/basic')
const name = require('./mockValue/name')
const text = require('./mockValue/text')
const web = require('./mockValue/web')
const id = require('./mockValue/id')
const date = require('./mockValue/date')
const image = require('./mockValue/image')
const color = require('./mockValue/color')
const address = require('./mockValue/address')


module.exports = {
    ...utils,
    ...basic,
    ...name,
    ...text,
    ...web,
    ...id,
    ...date,
    ...image,
    ...color,
    ...address,
}

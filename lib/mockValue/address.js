const { random } = require('../utils')
const { regions, provinces } = require('../area')

const regionsText = regions.map(item => item.text)
// const

module.exports = {
    region, province, city, fullcity, county, fullcounty, street, fullstreet, zip,
}

function region () {
    return random(regionsText)
}

function province (type) {

}

function city (type) {

}

function fullcity (type) {

}

function county (type) {

}

function fullcounty (type) {

}

function street (type) {

}

function fullstreet (type) {

}

function zip () {

}

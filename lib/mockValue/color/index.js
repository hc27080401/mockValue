/*
    ## Color 字典数据

    字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
*/
const nicerColorMap = {
    navy: {
        value: '#000080',
        nicer: '#001f3f',
    },
    blue: {
        value: '#0000ff',
        nicer: '#0074d9',
    },
    aqua: {
        value: '#00ffff',
        nicer: '#7fdbff',
    },
    teal: {
        value: '#008080',
        nicer: '#39cccc',
    },
    olive: {
        value: '#008000',
        nicer: '#3d9970',
    },
    green: {
        value: '#008000',
        nicer: '#2ecc40',
    },
    lime: {
        value: '#00ff00',
        nicer: '#01ff70',
    },
    yellow: {
        value: '#ffff00',
        nicer: '#ffdc00',
    },
    orange: {
        value: '#ffa500',
        nicer: '#ff851b',
    },
    red: {
        value: '#ff0000',
        nicer: '#ff4136',
    },
    maroon: {
        value: '#800000',
        nicer: '#85144b',
    },
    fuchsia: {
        value: '#ff00ff',
        nicer: '#f012be',
    },
    purple: {
        value: '#800080',
        nicer: '#b10dc9',
    },
    silver: {
        value: '#c0c0c0',
        nicer: '#dddddd',
    },
    gray: {
        value: '#808080',
        nicer: '#aaaaaa',
    },
    black: {
        value: '#000000',
        nicer: '#111111',
    },
    white: {
        value: '#ffffff',
        nicer: '#ffffff',
    },
}

var colorConvert = require('../../../packages/color-convert')

module.exports = {
    color, hex, rgb, rgba, hsl,
}


// 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
function color (name) {
    return name && nicerColorMap[name] ? nicerColorMap[name].nicer.toLowerCase() : hex()
}

// #FFAA00
function hex () {
    return colorConvert.hsv2hex(goldenRatioColor())
}

// rgb(128,255,255)
function rgb () {
    const rgb = colorConvert.hsv2rgb(goldenRatioColor())
    return `rgb(${rgb})`
}

// rgba(128,255,255,0.3)
function rgba () {
    const rgb = colorConvert.hsv2rgb(goldenRatioColor())
    return `rgba(${rgb},${Number(Math.random().toFixed(2))})`
}

// hsl(300,80%,90%)
function hsl () {
    const hsl = colorConvert.hsv2hsl(goldenRatioColor())
    return `hsl(${hsl})`
}


// http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
// https://github.com/devongovett/color-generator/blob/master/index.js
// 随机生成一个有吸引力的颜色。
function goldenRatioColor (saturation = 0.5, value = 0.95) {
    const goldenRatio = 0.618033988749895
    const hue = (Math.random() + goldenRatio) % 1
    return [
        hue * 360,
        saturation * 100,
        value * 100,
    ]
}

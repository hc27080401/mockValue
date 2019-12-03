
const days = '周一 周二 周三 周四 周五 周六 周日'.split(' ')
const formatDefine = {
    yyyy: d => `${d.getFullYear()}`,
    yy: d => `${d.getFullYear()}`.substr(0, 2),
    MM: d => `${d.getMonth() + 1}`.padStart(2, '0'),
    M: d => `${d.getMonth() + 1}`,
    dd: d => `${d.getDate()}`.padStart(2, '0'),
    d: d => `${d.getDate()}`,
    HH: d => `${d.getHours()}`.padStart(2, '0'),
    H: d => `${d.getHours()}`,
    hh: d => `${d.getHours() % 12 || 12}`.padStart(2, '0'),
    h: d => `${d.getHours() % 12 || 12}`,
    mm: d => `${d.getMinutes()}`.padStart(2, '0'),
    m: d => `${d.getMinutes()}`,
    ss: d => `${d.getSeconds()}`.padStart(2, '0'),
    s: d => `${d.getSeconds()}`,
    SS: d => `${d.getMilliseconds()}`.padStart(4, '0'),
    S: d => `${d.getMilliseconds()}`,
    A: d => d.getHours() < 12 ? 'AM' : 'PM',
    a: d => d.getHours() < 12 ? 'am' : 'pm',
    C: d => d.getHours() < 12 ? '上午' : '下午',
    D: d => days[d.getDay()],
    T: d => `${d.getTime()}`,
}

const formatRegexp = (() => {
    const matches = []
    for (const key in formatDefine) {
        matches.push(key)
    }
    return RegExp(`\\\\([yMmdHhmsSAaTCD])|(${matches.join('|')})`, 'g')
})()

module.exports = { date, datetime, time, day }

function date (date = new Date(), format = 'yyyy-MM-dd') {
    if (typeof date === 'string') {
        format = date
        date = new Date()
    } else if (typeof date === 'number') {
        date = new Date(date)
    }

    return format.replace(formatRegexp, (all, escapeChar, formatId) => escapeChar || (formatId ? formatDefine[formatId](date) : all))
}

function datetime (myDate, format = 'yyyy-MM-dd HH:mm:ss') {
    return date(myDate, format)
}

function time (myDate, format = 'HH:mm:ss') {
    return date(myDate, format)
}

function day (myDate, format = 'D') {
    return date(myDate, format)
}

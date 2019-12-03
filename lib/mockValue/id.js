const { random } = require('../utils')
const { string } = require('./basic')
const { date } = require('./date')
const { provinces } = require('../area')
module.exports = {
    cardNo,
}


// 居民身份证号码：https://baike.baidu.com/item/%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%A0%81/3400358
// 格式：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
// https://www.cnblogs.com/xtqg0304/p/9529721.html

function cardNo () {
    const rank = '7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2'.split(' ')
    const last = '1 0 X 9 8 7 6 5 7 3 2'.split(' ')
    let cardNo = random(provinces).code + date('yyyyMMdd') + string(3, 'number')
    let sum = 0
    for (let i = 0; i < 17; i++) {
        sum += cardNo[i] * rank[i]
    }
    cardNo += last[sum % 11]
    return cardNo
}


const { random, repeat, range } = require('../utils')

const letters = '一乙了人又儿十二力几入八九七刀乃厂丁卜个上大子也之下么小于已与三女己门工口才不中为以心天见方无手开分日文从什长公气他们出可去对生用只发头本主正外打处民白在有她地那会过自好而后多如行成年此当同我这来你时里没还作两把身进声但间走系何的到和国事知所法经其定现实学明话些者使是说要看面前点将种相信很便重给结神统怎家能起都样笑高真部被通特难原爱息展海候着得情理眼做接常据第教象望清脸基深领随道就然等最程提斯量强期集喜落黑答确曾联想意数新解感路像满跟微照错暗群楚楼简置算管模精愿需静境疑慢端察演赛歌舞稳墙鲜题德影增靠篇镇熟震懂趣颜横糊额飘醉撞踪器整嘴操激醒燕默避赞壁凝餐镜薄融磨衡邀藏瞧戴臂繁翼霞擦霜糟骤赢蹈鞠辫燥穗螺糠翻覆鹰鞭蹦镰警颤爆攀疆蹲瓣魔嚷籍耀灌躁嚼壤露霸蠢囊罐'.split('')
const symbols = { comma: '，', fullStop: '。' }

module.exports = {
    text, sentence, paragraph,
}


function text (length = 5) {
    return repeat(() => random(letters), length).join('')
}

function sentence () {
    const torrent = range(4, 8)
    return text(random(torrent)) + symbols.comma + text(random(torrent)) + symbols.fullStop
}

function paragraph (length = 3) {
    return repeat(() => sentence(), length).join('')
}

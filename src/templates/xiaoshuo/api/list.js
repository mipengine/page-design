/**
 * @file 小说列表无限下拉滚动异步接口模拟数据
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const data = {
    "status": 0,
    "data": {
        "items": [
            {
                "img": "img/titianxingdao.png",
                "author": "石章鱼",
                "desc": "风本无形，我欲猎风！九州笑傲，替天行盗！ 　　他风华正茂，她国色天香，他本该书生意气，挥斥方遒，她本该巧笑倩兮，葬花弄月。然生于乱世，国恨家仇，山河破碎，列强割据，先祖蒙羞。于是他丢掉了诗书，她拿起了刀枪，护龙脉，探九幽，夺天棺，战妖星。十步杀一人，千里不留行。事了拂衣去，深藏功与名！"
            },
            {
                "img": "img/wuhengtiandi.png",
                "author": "无巫",
                "desc": "人天生有九道脉门,九门齐开,能伸手翻云,反手复雨,他天生拥有最强修炼体质,但却天生‘死门’打开,作为必死之人,他能怎样与天争斗,怎么步入修炼之路?"
            },
            {
                "img": "img/xitongjunguncu.png",
                "author": "淡娘",
                "desc": "一转眼已经在硝烟弥漫的抗战前夕；租界上海滩歌舞升平；从老北京来的旦角轰动江南；谷白练就恰好穿成了那个旦角。。。的疯狂追爱着。最最疯狂的一位。说好的快穿从校园小清新走起呢？谷白练对系统无声抗议。系统弱弱回了句，我不喜欢你的名字。白练，白莲，合该你倒霉。这只是故事的开端而已。"
            },
            {
                "img": "img/xiuluotiandi.png",
                "author": "实验小白鼠",
                "desc": "八年前，雷霆古城一夜惊变，少城主秦命押入青云宗为仆，二十万民众赶进大青山为奴。八年后，淬灵入武，修罗觉醒，不屈少年逆天崛起。给我一柄刀，可破苍穹，给我一柄剑，可指霄汉。金麟岂是池中物，一遇风云便化龙。当修罗子、不死王、雷霆战尊、古海蛮皇等等一个个封号落在…"
            }
        ]
    }
};

module.exports = (req, res, next) => {
    setTimeout(() => res.jsonp(data), 3000);
};

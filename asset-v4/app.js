/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Axe Boat", this.version = "4", this.date = "2014", this.folder = "asset-v1/", this.looptime = 8e3, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 1, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 23, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#272f7a", this.col0 = "#476bc7", this.col1 = "#4849a8", this.col2 = "#2c2d69", this.col3 = "#3a3b8a", this.col4 = "#011342", this.animearray = [{
        name: "kick-mfp",
        color: "d7a267",
        uniqsnd: !1
    }, {
        name: "snare-mfp",
        color: "d7a267",
        uniqsnd: !1
    }, {
        name: "touti-mfp",
        color: "d7a267",
        uniqsnd: !0
    }, {
        name: "charley-mfp",
        color: "d7a267",
        uniqsnd: !0
    }, {
        name: "chatom-mfp",
        color: "d7a267",
        uniqsnd: !1
    }, {
        name: "bass-mfp",
        color: "09b7c8",
        uniqsnd: !1
    }, {
        name: "enigmatic-mfp",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "cry-mfp",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "odoyouno-mfp",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "oua-mfp",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "toun-mfp",
        color: "f04040",
        uniqsnd: !1
    }, {
        name: "flute-mfp",
        color: "f04040",
        uniqsnd: !1
    }, {
        name: "neou-mfp",
        color: "f04040",
        uniqsnd: !1
    }, {
        name: "hu-mfp",
        color: "f04040",
        uniqsnd: !0
    }, {
        name: "ah-mfp",
        color: "f04040",
        uniqsnd: !0
    }, {
        name: "feel-mfp",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "chillin-mfp",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "yeah-mfp",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "filback-mfp",
        color: "7a7ff6",
        uniqsnd: !1
    }, {
        name: "teylo-mfp",
        color: "7a7ff6",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "The Love",
        src: "b1-love.mp4",
        code: "1,2,6,11,17",
        sound: "bonus-love",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var e = this.animearray[o].name;
        this.animearray[o].soundA = e + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? e + "_a" : e + "_b", this.animearray[o].anime = e + "-sprite.png", this.animearray[o].animeData = e + ".json"
    }
};
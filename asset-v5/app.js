/* haha the og thing idfk anymore */
var app = new function() {
    this.name = "The Original", this.version = "1", this.date = "2009", this.folder = "asset-v5/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "percussions1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "percussions2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "percussions3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effects4",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "8_trill",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "instruments3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "chorus1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "chorus2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "voices1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "voices2", /* tell me the right knee */
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Choir (OG)",
        src: "b1-choir.mp4",
        code: "4,6,7,8,12",
        sound: "bonus-choir",
        aspire: "aspire"
    }, {
        name: "Sailor (OG)",
        src: "b2-sailor.mp4",
        code: "1,8,10,11,14",
        sound: "bonus-sailor",
        aspire: "aspire"
    }, {
        name: "Santa (OG)",
        src: "b3-santa.mp4",
        code: "1,9,12,13,14",
        sound: "bonus-santa",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};

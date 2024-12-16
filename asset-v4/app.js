/* MIX FOR PEACE IS BACK! - Rizsim Studios */
var app = new function() {
    this.name = "Axe Boat", this.version = "4", this.date = "2014", this.folder = "asset-v4/", this.looptime = 8e3, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 1, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 23, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#211101", this.col0 = "#D8A365", this.col1 = "#BA7B3D", this.col2 = "#A16224", this.col3 = "#6A3501", this.col4 = "#422101", this.animearray = [{
        name: "drum1_kick",
        color: "ffc075",
        uniqsnd: !1
    }, {
        name: "drum2_snare",
        color: "ffc075",
        uniqsnd: !1
    }, {
        name: "drum3_touti",
        color: "ffc075",
        uniqsnd: !0
    }, {
        name: "drum4_charley",
        color: "ffc075",
        uniqsnd: !0
    }, {
        name: "drum5_chatom",
        color: "ffc075",
        uniqsnd: !1
    }, {
        name: "effect1_bass",
        color: "09b7c8",
        uniqsnd: !1
    }, {
        name: "effect2_enigmatic",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "effect3_cry",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "effect4_odoyouno",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "effect5_oua",
        color: "09b7c8",
        uniqsnd: !0
    }, {
        name: "melo1_toun",
        color: "e9434d",
        uniqsnd: !1
    }, {
        name: "melo2_flute",
        color: "e9434d",
        uniqsnd: !1
    }, {
        name: "melo3_neou",
        color: "e9434d",
        uniqsnd: !1
    }, {
        name: "melo4_hu",
        color: "e9434d",
        uniqsnd: !0
    }, {
        name: "melo5_ah",
        color: "e9434d",
        uniqsnd: !0
    }, { /* MIX FOR PEACE */
        name: "chipsdel",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "chips2_chillin",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "chips3_yeah",
        color: "7a7ff6",
        uniqsnd: !0
    }, {
        name: "chips4_filback",
        color: "7a7ff6",
        uniqsnd: !1
    }, {
        name: "chips5_teylo",
        color: "7a7ff6",
        uniqsnd: !0
    }], this.bonusarray = [{ /* BONUS 1 DEMO! */
        name: "Mix For Peace",
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

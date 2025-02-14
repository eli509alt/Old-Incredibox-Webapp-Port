/* 0.5.5 2021-09-22 11:03:35 */
var app = new (function () {
    (this.name = "Bite-size beats"),
        (this.version = "9"),
        (this.date = "2017"),
        (this.folder = "asset-v9/"),
        (this.looptime = 6847),
        (this.bpm = 140),
        (this.totalframe = 328),
        (this.nbpolo = 6),
        (this.nbloopbonus = 2),
        (this.bonusloopA = !1),
        (this.bonusendloopA = !1),
        (this.recmaxloop = 24),
        (this.recminloop = 4),
        (this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop),
        (this.spritepolo = "polo-sprite.png"),
        (this.spritepicto = "game-picto.png"),
        (this.colBck = "#1c0d0d"),
        (this.col0 = "#EB4B4B"),
        (this.col1 = "#691E1E"),
        (this.col2 = "#C32D2D"),
        (this.col3 = "#691E1E"),
        (this.col4 = "#371919"),
        (this.col5 = "#EB4B4B"),
        (this.animearray = [
            { name: "1_chikaka", color: "8A6706", uniqsnd: !0 },
            { name: "2_pokoti", color: "8A6706", uniqsnd: !0 },
            { name: "3_tute", color: "8A6706", uniqsnd: !0 },
            { name: "4_party", color: "8A6706", uniqsnd: !0 },
            { name: "5_putsh", color: "e11923", uniqsnd: !0 },
            { name: "6_cuew", color: "e11923", uniqsnd: !0 },
            { name: "7_puru", color: "e11923", uniqsnd: !0 },
            { name: "8_rock", color: "e11923", uniqsnd: !0 },
            { name: "9_cucu", color: "E6C832", uniqsnd: !0 },
            { name: "10_gongon", color: "E6C832", uniqsnd: !0 },
            { name: "11_tutwe", color: "E6C832", uniqsnd: !0 },
            { name: "12_always", color: "E6C832", uniqsnd: !0 },
            { name: "13_cheu", color: "32b441", uniqsnd: !0 },
            { name: "14_fufu", color: "32b441", uniqsnd: !0 },
            { name: "15_toptop", color: "ff6419", uniqsnd: !0 },
            { name: "16_getup", color: "ff6419", uniqsnd: !0 },
            { name: "17_chiki", color: "1e96be", uniqsnd: !0 },
            { name: "18_tuntun", color: "1e96be", uniqsnd: !0 },
            { name: "19_tromp", color: "1e96be", uniqsnd: !0 },
            { name: "20_partyup", color: "1e96be", uniqsnd: !0 },
        ]),
        (this.bonusarray = [
            { name: "Fun Up", src: "bonus-fun-up.mp4", code: "3,5,6,12,18", sound: "bonus-fun-up", aspire: "aspire" },
            { name: "Real Deal", src: "bonus-jessie.mp4", code: "5,10,14,15,18", sound: "bonus-jessie", aspire: "aspire-jessie" },
        ]),
        (this.unlockerarray = []);
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var s = this.animearray[n].name;
        (this.animearray[n].soundA = s + "_a"), (this.animearray[n].soundB = this.animearray[n].uniqsnd ? s + "_a" : s + "_b"), (this.animearray[n].anime = s + "-sprite.png"), (this.animearray[n].animeData = s + ".json");
    }
})();

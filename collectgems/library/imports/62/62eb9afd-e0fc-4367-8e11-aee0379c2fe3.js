"use strict";
cc._RF.push(module, '62eb9r94PxDZ44RruA3nC/j', 'Game');
// Script/Game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        play: cc.Node,
        records: cc.Node,
        home: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:


    onLoad: function onLoad() {

        var scaleTo = cc.scaleTo(0.8, 0.9);
        var reverse = cc.scaleTo(0.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
        this.play.runAction(repeat);

        this.home.runAction(repeat.clone());
        this.records.runAction(repeat.clone());
    },


    clickplay: function clickplay() {
        cc.director.loadScene("CollectGems");
    },

    clickrecords: function clickrecords() {
        cc.director.loadScene("Records");
    },
    clickhome: function clickhome() {
        cc.director.loadScene("About Me");
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
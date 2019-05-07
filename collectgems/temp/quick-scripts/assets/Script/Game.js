(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '62eb9r94PxDZ44RruA3nC/j', 'Game', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game.js.map
        
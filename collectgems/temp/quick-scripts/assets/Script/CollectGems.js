(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/CollectGems.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6fecfqNp5BOJI0WIcOw4ioa', 'CollectGems', __filename);
// Script/CollectGems.js

"use strict";

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: (_properties = {
        monday: cc.Node,
        thursday: cc.Node,
        wednesday: cc.Node
    }, _defineProperty(_properties, "thursday", cc.Node), _defineProperty(_properties, "friday", cc.Node), _defineProperty(_properties, "saturday", cc.Node), _defineProperty(_properties, "sunday", cc.Node), _defineProperty(_properties, "home", cc.Node), _properties),

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var scaleTo = cc.scaleTo(0.8, 0.9);
        var reverse = cc.scaleTo(0.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
        this.home.runAction(repeat);
        cc.log("start");
        cc.log(this.getWeekDay('2019-04-20'));
        cc.log("end");
    },

    getWeekDay: function getWeekDay(dateString) {
        var dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/;

        if (dateString.match(dateStringReg)) {
            var presentDate = new Date(dateString),
                today = presentDate.getDay() !== 0 ? presentDate.getDay() : 7;

            return Array.from(new Array(7), function (val, index) {
                return formatDate(new Date(presentDate.getTime() - (today - index - 1) * 24 * 60 * 60 * 1000));
            });
        } else {
            throw new Error('dateString should be like "yyyy-mm-dd" or "yyyy/mm/dd"');
        }

        function formatDate(date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
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
        //# sourceMappingURL=CollectGems.js.map
        
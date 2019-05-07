(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Item.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e4146kAt8BLgqoB5jJNrH+O', 'Item', __filename);
// Script/Item.js

'use strict';

//const i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label,
        itemID: 0
    },

    onLoad: function onLoad() {
        this.node.on('touchend', function () {
            console.log("Item " + this.itemID + ' clicked');
        }, this);
    },

    updateItem: function updateItem(tmplId, itemId) {
        this.itemID = itemId;
        this.label.string = "this is Num " + itemId;
        //this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + tmplId + ' Item#' + this.itemID;
    }
});

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
        //# sourceMappingURL=Item.js.map
        
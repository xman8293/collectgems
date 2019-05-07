(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/taskcard.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '044a2BlAhRCZpFdcHnUqh5j', 'taskcard', __filename);
// Script/taskcard.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        btnpic: cc.Button,
        itemID: 0,
        labDesc: cc.Label,
        TaskTitle: "", //任务描述
        IsGet: false, //是否完成
        GemsCount: 2, //奖励数量
        TaskDay: "2019-04-06", //任务完成事件
        TaskType: "D" //任务类型D天W星期


    },

    onLoad: function onLoad() {
        this.node.on('touchend', function () {
            console.log("Item " + this.itemID + ' clicked');
        }, this);
    },

    updateItem: function updateItem(tmplIndex, TaskInfo) {
        this.itemID = tmplIndex;

        this.TaskTitle = TaskInfo.TaskTitle;
        this.IsGet = TaskInfo.TaskTitle;
        this.GemsCount = TaskInfo.GemsCount;
        this.TaskDay = TaskInfo.TaskDay;
        this.TaskType = TaskInfo.TaskType;

        this.labDesc.string = this.TaskTitle;
        cc.log(TaskInfo);

        //this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + tmplId + ' Item#' + this.itemID;
    },

    CompleteTask: function CompleteTask() {
        cc.log("complete No " + this.itemID + " Task");
        cc.log(cc.find("CongratsLayer"));
        var layout = cc.find("CongratsLayer");
        layout.active = true;
    }
    // update (dt) {},
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
        //# sourceMappingURL=taskcard.js.map
        
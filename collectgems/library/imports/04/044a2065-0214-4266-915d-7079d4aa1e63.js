"use strict";
cc._RF.push(module, '044a2BlAhRCZpFdcHnUqh5j', 'taskcard');
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

    initializeCard: function initializeCard(tmplIndex, TaskInfo) {
        this.itemID = tmplIndex;
        this.TaskTitle = TaskInfo.TaskTitle;
        this.IsGet = TaskInfo.TaskTitle;
        this.GemsCount = TaskInfo.GemsCount;
        this.TaskDay = TaskInfo.TaskDay;
        this.TaskType = TaskInfo.TaskType;

        this.labDesc.string = this.TaskTitle;
        cc.log(TaskInfo);
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
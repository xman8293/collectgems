"use strict";
cc._RF.push(module, 'c3b67skMqBHRaJbdYPsYfd/', 'ListViewCtrl');
// Script/ListViewCtrl.js

"use strict";

var global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Node
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
        spawnCount: 0, // how many items we actually spawn
        totalCount: 0, // how many items we need for the whole list
        spacing: 0, // space between each item
        bufferZone: 0 // when item is away from bufferZone, we relocate it

    },

    // use this for initialization
    onLoad: function onLoad() {

        this.content = this.scrollView.content;
        this.items = []; // array to store spawned items
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
    },

    initialize: function initialize() {
        //this.content.width = this.totalCount * (this.itemTemplate.width + this.spacing) + this.spacing; // get total content width

        var tasklist = global.TaskList;
        // let task={};
        // task.TaskTitle="按时完成作业";//任务描述
        // task.IsGet=false;//是否完成
        // task.GemsCount=2;//奖励数量
        // task.TaskDay="2019-04-06";//任务完成事件
        // task.TaskType="D";//任务类型D天W星期
        // tasklist.push(task);
        // let task1={};
        // task1.TaskTitle="按时起床";//任务描述
        // task1.IsGet=false;//是否完成
        // task1.GemsCount=1;//奖励数量
        // task1.TaskDay="2019-04-06";//任务完成事件
        // task1.TaskType="D";//任务类型D天W星期
        // tasklist.push(task1);
        // let task2={};
        // task2.TaskTitle="9:30上床睡觉";//任务描述
        // task2.IsGet=false;//是否完成
        // task2.GemsCount=2;//奖励数量
        // task2.TaskDay="2019-04-06";//任务完成事件
        // task2.TaskType="D";//任务类型D天W星期
        // tasklist.push(task2);
        // let task3={};
        // task3.TaskTitle="户外足球一小时";//任务描述
        // task3.IsGet=false;//是否完成
        // task3.GemsCount=2;//奖励数量
        // task3.TaskDay="2019-04-06";//任务完成事件
        // task3.TaskType="D";//任务类型D天W星期
        // tasklist.push(task3);

        this.spawnCount = tasklist.length;
        cc.log(JSON.stringify(tasklist));
        for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(item.width * (0.5 + i) + this.spacing * (i + 1), -160);
            item.getComponent('taskcard').initializeCard(i, tasklist[i]);
            cc.log("Index :" + i);
            cc.log(tasklist[i]);
            this.items.push(item);
        }
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {}

});

cc._RF.pop();
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ListViewCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c3b67skMqBHRaJbdYPsYfd/', 'ListViewCtrl', __filename);
// Script/ListViewCtrl.js

"use strict";

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
        // lblScrollEvent: cc.Label,
        // btnAddItem: cc.Button,
        // btnRemoveItem: cc.Button,
        // btnJumpToPosition: cc.Button,
        // lblJumpPosition: cc.Label,
        // lblTotalItems: cc.Label,
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
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        var tasklist = [];
        var task = {};
        task.TaskTitle = "按时完成作业"; //任务描述
        task.IsGet = false; //是否完成
        task.GemsCount = 2; //奖励数量
        task.TaskDay = "2019-04-06"; //任务完成事件
        task.TaskType = "D"; //任务类型D天W星期
        tasklist.push(task);
        var task1 = {};
        task1.TaskTitle = "按时起床"; //任务描述
        task1.IsGet = false; //是否完成
        task1.GemsCount = 1; //奖励数量
        task1.TaskDay = "2019-04-06"; //任务完成事件
        task1.TaskType = "D"; //任务类型D天W星期
        tasklist.push(task1);
        var task2 = {};
        task2.TaskTitle = "9:30上床睡觉"; //任务描述
        task2.IsGet = false; //是否完成
        task2.GemsCount = 2; //奖励数量
        task2.TaskDay = "2019-04-06"; //任务完成事件
        task2.TaskType = "D"; //任务类型D天W星期
        tasklist.push(task2);
        var task3 = {};
        task3.TaskTitle = "户外足球一小时"; //任务描述
        task3.IsGet = false; //是否完成
        task3.GemsCount = 2; //奖励数量
        task3.TaskDay = "2019-04-06"; //任务完成事件
        task3.TaskType = "D"; //任务类型D天W星期
        tasklist.push(task3);

        this.spawnCount = tasklist.length;
        for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
            item.getComponent('taskcard').updateItem(i, tasklist[i]);
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

    update: function update(dt) {
        //     this.updateTimer += dt;
        //     if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        //     this.updateTimer = 0;
        //     let items = this.items;
        //     let buffer = this.bufferZone;
        //     let isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        //     let offset = (this.itemTemplate.height + this.spacing) * items.length;
        //     for (let i = 0; i < items.length; ++i) {
        //         let viewPos = this.getPositionInView(items[i]);
        //         if (isDown) {
        //             // if away from buffer zone and not reaching top of content
        //             if (viewPos.y < -buffer && items[i].y + offset < 0) {
        //                 items[i].y=items[i].y + offset ;
        //                 let item = items[i].getComponent('Item');
        //                 let itemId = item.itemID - items.length; // update item id
        //                 item.updateItem(i, itemId);
        //             }
        //         } else {
        //             // if away from buffer zone and not reaching bottom of content
        //             if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
        //                 items[i].y=items[i].y - offset;
        //                 let item = items[i].getComponent('Item');
        //                 let itemId = item.itemID + items.length;
        //                 item.updateItem(i, itemId);
        //             }
        //         }
        //     }
        //     // update lastContentPosY
        //     this.lastContentPosY = this.scrollView.content.y;
        //   //  this.lblTotalItems.String = "Total Items: " + this.totalCount;
    }

    // addItem: function() {
    //     this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
    //     this.totalCount = this.totalCount + 1;
    // },

    // removeItem: function() {
    //     if (this.totalCount - 1 < 30) {
    //         cc.error("can't remove item less than 30!");
    //         return;
    //     }

    //     this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
    //     this.totalCount = this.totalCount - 1;
    // },

    // scrollToFixedPosition: function () {
    //     this.scrollView.scrollToOffset(cc.p(0, 500), 2);
    // }
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
        //# sourceMappingURL=ListViewCtrl.js.map
        
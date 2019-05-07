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

    properties: {
        monday: cc.Node,
        thursday: cc.Node,
        wednesday: cc.Node,
        thursday: cc.Node,
        friday: cc.Node,
        saturday: cc.Node,
        sunday: cc.Node,
        home: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var scaleTo = cc.scaleTo(0.8,0.9);
        var reverse = cc.scaleTo(0.8,1);
        var seq = cc.sequence(scaleTo,reverse);
        var repeat = cc.repeatForever(seq);
        this.home.runAction(repeat);
        cc.log("start");
        cc.log(this.getWeekDay('2019-04-20'));
        cc.log("end");
    },
    getWeekDay: function (dateString) {
        let dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/;

        if (dateString.match(dateStringReg)) {
            let presentDate = new Date(dateString),
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
    start() {

    },

    // update (dt) {},
});
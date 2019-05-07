cc.Class({
    extends: cc.Component,

    properties: {

        play: cc.Node,
        records: cc.Node,
        home: cc.Node,



    },

    // LIFE-CYCLE CALLBACKS:


    onLoad() {

        var scaleTo = cc.scaleTo(0.8,0.9);
        var reverse = cc.scaleTo(0.8,1);
        var seq = cc.sequence(scaleTo,reverse);
        var repeat = cc.repeatForever(seq);
        this.play.runAction(repeat);
      
        this.home.runAction(repeat.clone());
        this.records.runAction(repeat.clone());


    },

    clickplay: function () {
        cc.director.loadScene("CollectGems");
    },

    clickrecords: function () {
        cc.director.loadScene("Records")
    },
    clickhome: function () {
        cc.director.loadScene("About Me");
    },
    start() {

    },

    // update (dt) {},
});
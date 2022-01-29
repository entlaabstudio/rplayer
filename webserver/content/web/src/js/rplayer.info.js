/**
 * @file
 * Visual component for web application rplayer.js.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

 export default class RPlayerInfo {
    constructor(rplayerObj) {
        this.rplayerObj = rplayerObj;

        this.selector     = $("#rplayerInfo");
        this.activePanel1 = $("#rplayerInfoActive div:first-child");
        this.activePanel2 = $("#rplayerInfoActive div:first-child ~ div");
        this.tempPanel1   = $("#rplayerInfoTemp div:first-child");
        this.tempPanel2   = $("#rplayerInfoTemp div:first-child ~ div");

        this.snapToTrack  = false;

        this.init();

        console.log("[RPlayer]","Info module loaded.")
    }

    init() {
        // this.activePanel1.html("holala");
        // this.activePanel2.html("ťulpas");
        // this.tempPanel1.html("22holala");
        // this.tempPanel2.html("22ťulpas");

        var that = this;

        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                console.log(that.rplayerObj.tracklistLoaded);
                that.buttons();
                clearInterval(int);
            }
        },359);
        
        this.ticker();

        console.log("Objekt RPlayeru",this.rplayerObj);
    }

    buttons() {
        var that = this;
        $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerStartPause\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerRW']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerRW\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerFW']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerFW\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerStop']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerStop\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").on("click", function() {
            if (that.snapToTrack) {
                that.snapToTrack = false;
            } else {
                that.snapToTrack = true;
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoClose']").on("click", function() {
            if (that.selector.css("opacity") == "1") {
                that.selector.stop().animate({
                    opacity: "0"
                },750,function() {
                    that.selector.css({
                        display: "none"
                    });
                });
            } else {
                that.selector.css({
                    display: "block"
                });
                that.selector.stop().animate({
                    opacity: "1"
                },250,function() {
                    // $("body").css({
                    //     overflow: "hidden"
                    // });
                });
            }
        });

        // $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.controls.trackInfoButton).on("click", function() {
        $(".trackInfoButton").on("click", function() {
            $("#rplayerInfo .transport .icon[data-command='rplayerInfoClose']").click();
        });
    }
    
    ticker() {
        var that = this;
        this.ticker = setInterval(function() {
            that.transportInteractiveIcons();
        },97);
    }

    transportInteractiveIcons() {
        if (this.rplayerObj.audioObject.paused) {
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").removeClass("pause");
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").addClass("play");
        } else {
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").removeClass("play");
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").addClass("pause");
        }

        if (this.snapToTrack) {
            $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").removeClass("open");
        } else {
            $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").addClass("open");
        }
    }
 }
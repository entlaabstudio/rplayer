/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

 export default class RPlayer {
    
    constructor(
        rplayerObj
    ) {
        this.rplayerObj     = rplayerObj;
        this.rplayerCfg     = rplayerObj.rplayerCfg.conf;

        this.init();

        console.log("[RPlayer]","Downloads module loaded.");
    }

    init() {
        var that = this;

        // Loader
        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                that.buttons();
                clearInterval(int);
            }
        },362);
    }

    buttons() {
        var that = this;

        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .icon.download").on("click",function() {
            $("#rplayerDownloads").css({
                display: "block"
            });
            $("#rplayerDownloads").stop().animate({
                opacity: "1"
            },1000);
        });

        $("#rplayerDownloads .rplayerDownloadsClose").on("click",function() {
            $("#rplayerDownloads").stop().animate({
                opacity: "0"
            },1000,function() {
                $("#rplayerDownloads").css({
                    display: "none"
                });
            });
        });
    }
}

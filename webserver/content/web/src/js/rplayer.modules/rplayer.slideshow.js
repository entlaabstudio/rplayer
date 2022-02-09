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
        this.minimizeButton = $(this.rplayerCfg.app.htmlSelectors.mainWindow + " " + this.rplayerCfg.app.htmlSelectors.controls.minimize);
        this.wordsButton    = $(this.rplayerCfg.app.htmlSelectors.mainWindow + " " + this.rplayerCfg.app.htmlSelectors.controls.wordsButton);
        this.playerWindow   = $(this.rplayerCfg.app.htmlSelectors.mainWindow);

        this.lastWord       = false;

        this.init();

        console.log("[RPlayer]","Slideshow module loaded.");
    }

    init() {
        var that = this;

        // Loader
        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                that.ticker();
                that.buttons();
                clearInterval(int);
            }
        },372);
    }

    ticker() {
        var that = this;
        setInterval(function() {
            if ($("#rplayerSlideshow").css("display") != "none") {
                that.getLyrics();
            }
        },85);
    }

    getLyrics() {
        var currentWord;
        
        if (this.wordsButton.hasClass("primary")) {
            if (this.rplayerObj.getCurrentWord()) {
                currentWord = this.rplayerObj.removeHtml(this.rplayerObj.getCurrentWord()["text"]);
            }
            
            if (
                currentWord === undefined ||
                this.rplayerObj.getCurrentWord()["offset"] > this.rplayerCfg.app.preferences.words.titleMaxTime
            ) {
                currentWord = false;
            }
        } else {
            currentWord = false;
        }
        
        if (this.lastWord != currentWord) {
            $("#rplayerSlideshow div").html(currentWord);
        }
        
        this.lastWord = currentWord;
    }

    buttons() {
        var that = this;
        $(this.minimizeButton).on("click",function() {
            that.show();
        });
    }

    show() {
        var that = this;
        var int = setInterval(function() {
            if (that.playerWindow.css("opacity") == "0") {
                that.showNow();
                clearInterval(int);
            }
        },372);
    }

    showNow() {
        var that = this;
        $("#rplayerSlideshow").css({
            display: "flex"
        });
        $("#rplayerSlideshow").stop().animate({
            opacity: "1"
        },1000,function() {
            that.exit();
        });
    }

    exit() {
        var that = this;
        var int = setInterval(function() {
            if (that.playerWindow.css("opacity") != "0") {
                that.exitNow();
                clearInterval(int);
            }
        },372);
    }

    exitNow() {
        $("#rplayerSlideshow").stop().animate({
            opacity: "0"
        },1000,function() {
            $("#rplayerSlideshow").css({
                display: "none"
            });
        });
    }
}

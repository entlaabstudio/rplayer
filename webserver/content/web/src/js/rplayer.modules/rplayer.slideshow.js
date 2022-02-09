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
        this.lastImage      = false;
        this.slideImgActive = "second";

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
                that.imageChanger();
            }
        },85);
    }

    imageChanger() {
        var that = this;

        if (this.lastImage != this.getCurrentImage()["src"]) {
            if (this.slideImgActive == "first") {
                this.slideImgActive = "second";
                
                $("#rplayerSlideshow img.first").transit({
                    scale: ".5",
                    opacity: "0"
                },250,function() {
                    $("#rplayerSlideshow img.first").removeAttr("src");
                });
                
                $("#rplayerSlideshow img.second").attr("src",that.getCurrentImage()["src"]);

                $("#rplayerSlideshow img.second").transit({
                    scale: "1",
                    opacity: "1"
                },250);

            } else {
                this.slideImgActive = "first";

                $("#rplayerSlideshow img.second").transit({
                    scale: ".5",
                    opacity: "0"
                },250,function() {
                    $("#rplayerSlideshow img.second").removeAttr("src");
                });
                
                $("#rplayerSlideshow img.first").attr("src",that.getCurrentImage()["src"]);

                $("#rplayerSlideshow img.first").transit({
                    scale: "1",
                    opacity: "1"
                },250);

            }
            this.lastImage = this.getCurrentImage()["src"];
        }
    }

    getCurrentImage() {
        try {
            var images = this.rplayerObj.obj2array(this.rplayerCfg.slideShow.pictures);
            var time = Math.round(this.rplayerObj.audioObject.currentTime * 1000);
            var currentImage = new Array;
            images.forEach(element => {
                if (element[1].timeStart < time) {
                    currentImage["time"]   = element[1].timeStart;
                    currentImage["offset"] = time - element[1].timeStart;
                    currentImage["src"]   = element[1].src;
                    currentImage["mediaName"]   = element[1].mediaName;
                }
            });
            if (currentImage["offset"] !== undefined) {
                return currentImage;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
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

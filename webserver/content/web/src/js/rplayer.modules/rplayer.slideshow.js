/**
 * @file Slideshow module for RPlayer web application
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
                that.makeImages();
                that.ticker();
                that.buttons();
                clearInterval(int);
            }
        },372);
    }

    makeImages() {
        try {
            var images = this.rplayerObj.obj2array(this.rplayerCfg.slideShow.pictures);
            images.forEach(element => {
                $("#rplayerSlideshow").append("<img src='" + element[1].src + "' data-time='" + element[1].timeStart + "'>");
            });
            $("#rplayerSlideshow").append("<div></div>");
        } catch (error) {
            return false;
        }
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
        if (this.lastImage !== this.getCurrentImage()["time"]) {
            console.log(this.getCurrentImage()["time"]);
            $("#rplayerSlideshow img:not([data-time='" + this.getCurrentImage()["time"] + "'])").stop().transit({
                transform: "perspective(50em) scale(0.5) rotateX(0deg) rotateY(-10deg) rotateZ(-10deg) translateX(-10em)",
                opacity: "0"
            },1000);
            $("#rplayerSlideshow img[data-time='" + this.getCurrentImage()["time"] + "']").stop().transit({
                transform: "perspective(50em) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0em)",
                opacity: "1"
            },1000);
            this.lastImage = this.getCurrentImage()["time"];
        }
    }

    getCurrentImage() {
        try {
            var images = this.rplayerObj.obj2array(this.rplayerCfg.slideShow.pictures);
            var time = Math.round(this.rplayerObj.audioObject.currentTime * 1000);
            var currentImage = new Array;
            images.forEach(element => {
                if (element[1].timeStart <= time) {
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

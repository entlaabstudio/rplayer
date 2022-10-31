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

    hideElements() {
        var that = this;
        setTimeout(function() {
            try {
                var images = that.rplayerCfg.slideShow.pictures;
                for (const [key, value] of Object.entries(images)) {
                    $("#rplayerSlideshow img[data-time='" + key + "']").css({
                        display: "none",
                        opacity: "0"
                    });
                }
            } catch (error) {
                return false;
            }
        },3000);
    }
    
    makeImages() {
        try {
            var images = this.rplayerCfg.slideShow.pictures;
            for (const [key, value] of Object.entries(images)) {
                $("#rplayerSlideshow").append("<img src='" + value.src + "' data-time='" + key + "'>");
            }
            $("#rplayerSlideshow").append("<div></div>");
        } catch (error) {
            return false;
        }
    }

    ticker() {
        var that = this;
        setInterval(function() {
            if (!that.rplayerObj.power.off("slideShow")) {
                that.getLyrics();
                that.imageChanger();
            }
        },33);
    }

    imageChanger() {
        var that = this;
        
        if (this.lastImage !== this.rplayerObj.getCurrentSlideshowImage()["time"]) {
            $("#rplayerSlideshow img[data-time='" + this.lastImage + "']").css({
                transform: "perspective(50em) rotate3d(0, 0, 1, -30deg) scale(2)",
                opacity: "0",
                transition: "transform 1s ease, opacity 1s ease"
            });

            this.displayNone("#rplayerSlideshow img[data-time='" + this.lastImage + "']",1500);

            $("#rplayerSlideshow img[data-time='" + this.rplayerObj.getCurrentSlideshowImage()["time"] + "']").css({
                transform: "perspective(50em) rotate3d(0, 0, 1, -30deg) scale(2)",
                display: "block"
            });
            setTimeout(function() {
                $("#rplayerSlideshow img[data-time='" + that.rplayerObj.getCurrentSlideshowImage()["time"] + "']").css({
                    transform: "perspective(50em) rotate3d(0, 0, 0, 0)",
                    opacity: "1",
                    transition: "transform 1s ease, opacity 1s ease"
                });
            },15);
            
            this.lastImage = this.rplayerObj.getCurrentSlideshowImage()["time"];
        }
    }

    displayNone(element,delay) {
        var element;
        var delay;

        setTimeout(function() {
            if ($(element).css("opacity") == 0) {
                $(element).css({
                    display: "none"
                });
            }
        },delay);
    }

    getLyrics() {
        var currentWord;
        
        if (this.wordsButton.hasClass("primary")) {
            if (this.rplayerObj.getCurrentPhrase()) {
                currentWord = this.rplayerObj.removeHtml(this.rplayerObj.getCurrentPhrase()["text"]);
            }
            
            if (
                currentWord === undefined ||
                this.rplayerObj.getCurrentPhrase()["offset"] > this.rplayerCfg.app.preferences.words.titleMaxTime
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

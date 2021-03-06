/**
 * @file Visual module for RPlayer web application
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

export default class RPlayerVisual {
    constructor(rplayerObj,QrCode) {
        this.rplayerObj = rplayerObj;

        this.fadeoutTime = 789;
        this.fadeinTime  = 1789;

        this.QrCod = new QrCode(0,'H');

        this.init();
        console.log("[RPlayer]","Visual module loaded.")
    }

    init() {
        var that = this;
        this.putFavicon();
        
        this.ticker = new Array;
        this.timerSecs = 0;

        this.mainWindowSel = that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow;
        this.cfg = that.rplayerObj.rplayerCfg.conf;
        this.lastCssModyfiers = [];
        this.wasClick = false;

        if (this.cfg.app.preferences.design.motion3d) {
            this.motion3d();
        }

        this.ticker["checkFirstLoading"] = setInterval(function() {
            that.dimmerFullscreen();
        },this.fadeoutTime * 1.2);
        this.ticker["stopTimer"] = setInterval(function() {
            that.tickStopTimer()
        },1000);
        this.transportInteractiveIcons();
        this.correctAdressBar();
        this.seekersInfo();
        this.windowMinimize();
        this.fullscreen();
        this.showQrCode();
        this.buttons();
        this.setBackground();
        this.putMiniIconsFront();
    }
    
    putFavicon() {
        var favicon = this.rplayerObj.rplayerCfg.conf.app.preferences.design.favicon;
        if (favicon !== undefined) {
            $("link[rel='icon']").attr("href",this.rplayerObj.rplayerCfg.conf.app.preferences.design.favicon);
        }
    }

    putMiniIconsFront() {
        for (const [key, value] of Object.entries(this.rplayerObj.rplayerCfg.conf.album.info.miniIcons)) {
            if (value.onFront) {
                $(this.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " .itemA").prepend(
                    "<a href=\"" + value.url + "\" target=\"" + value.target + "\" style=\"margin: 0em 0 0 0.25rem\">" +
                        value.icon +
                    "</a>"
                );
            }
        }
    }

    transportInteractiveIcons() {
        var that = this;
        setInterval(function() {
            if (!document.hidden) {
                
                if (that.rplayerObj.audioObject.paused) {
                    $(that.mainWindowSel + " button[data-command='rplayerStartPause'] i").removeClass("pause");
                    $(that.mainWindowSel + " button[data-command='rplayerStartPause'] i").addClass("play");
                } else {
                    $(that.mainWindowSel + " button[data-command='rplayerStartPause'] i").removeClass("play");
                    $(that.mainWindowSel + " button[data-command='rplayerStartPause'] i").addClass("pause");
                }
            }
        },200);
    }

    correctAdressBar() {
        var url = new URL(window.location.href.replace('rplayer.htm','index.htm'));
        if (window.self == window.top) {
            window.history.pushState({}, '', url);
        }
    }

    setBackground() {
        $(".rplayerFx").css({
            backgroundImage: this.rplayerObj.rplayerCfg.conf.app.preferences.design.backgroundImage
        });
    }

    buttons() {
        $("#rplayer .icon.qrcode").on("click",function() {
            if ($("#rplayerQrCode").css("opacity") != "1") {
                $("#rplayerQrCode").css("display","flex");
                $("#rplayerQrCode").stop().animate({
                    opacity: "1"
                },1000);
            }
        });
        $("#rplayerQrCode").on("click",function() {
            $("#rplayerQrCode").stop().animate({
                opacity: "0"
            },1000,function() {
                $("#rplayerQrCode").css("display","none");
            });
        });
    }

    showQrCode() {
        var link;
        
        link = window.location.href;

        if (link.includes("localhost")) {
            link = link.substring(
                link.indexOf("//") + 2,
                link.lastIndexOf("/")
            );
            link = this.rplayerObj.rplayerCfg.conf.app.web3Protocol +
            link.substring(
                0,
                link.indexOf(".")
            ) +
            "/"
        }
        
        if (link.includes("index.htm")) {
            link = link;
        } else {
            link = link + "index.htm";
        }
        link = link.replace('rplayer.htm','');
        this.QrCod.addData(link);
        this.QrCod.make();
        $("#rplayerQrCode").html(this.QrCod.createSvgTag({}));
    }

	fullscreen() {
        $(".fullScreen").on("click",function() {
            if ($.fullscreen.isFullScreen()) {
                $.fullscreen.exit();
            } else {
                $("body").fullscreen();
                $("body").css({
                    overflow: "auto"
                });
            }
        });
	}

    tickStopTimer() {
        
        try {
            if (this.rplayerObj.audioObject.paused == false) {
                var inputNumber = parseInt($(".itemB input").val());
                if (inputNumber >= 0) {
                    this.timerSecs -= 1;
                }
        
                if (
                    this.timerSecs == -1 &&
                    inputNumber != 0
                ) {
                    this.timerSecs = 59;
                    var newInputNumber = inputNumber - 1;
                    $(".itemB input").val(newInputNumber.toString());
                }
        
                if (
                    this.timerSecs == -1 &&
                    inputNumber == 0
                ) {
                    this.timerSecs = 0;
                    var newInputNumber = inputNumber;
                    $(".itemB input").val("");
                    $(".rplayerStopAfterTrack").prop("checked",true);
                }
                
                if($(".stopTimerSecs").html() != this.zeroFill(this.timerSecs)) {
                    $(".stopTimerSecs").html(this.zeroFill(this.timerSecs));
                }
            }
        } catch (err) {
            console.log("[NOTICE] Waiting...");
        }
        
    }

    zeroFill(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    windowMinimize() {
        var that = this;
        $(".rplayerMinimize").on("click",function() {
            $(that.mainWindowSel).css({
                transform: "perspective(50em) scale(0.9) rotateX(0deg) rotateY(-1deg) rotateZ(-1deg) translateX(-1em)",
                opacity: 0
            },that.fadeoutTime,function() {
                $(that.mainWindowSel).css({
                    display: "none"
                });
            });
            $("#rajs").css({
                opacity: "0"
            },that.fadeoutTime,function() {
                $("#rajs").css({
                    display: "none"
                });
            });
        });
        $("body").on("click",function() {
            if ($(that.mainWindowSel).css("opacity") == "0") {
                $("#rajs").css({
                    display: "block"
                });
                $(that.mainWindowSel).css({
                    display: "grid"
                });
                $("#rajs").css({
                    opacity: "1"
                },that.fadeoutTime);
                $(that.mainWindowSel).css({
                    opacity: "1",
                    transform: "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0)"
                },that.fadeoutTime);
            }
        })
    }
    
    dimmerFullscreen() {
        if ($(".rplayerTrackList").html().length > 0) {
            clearInterval(this.ticker["checkFirstLoading"]);

            $('html, body').animate({
                scrollTop: top
            },500);

            $(".FullscreenDimmer").stop().animate({
                opacity: 0
            },this.fadeoutTime,function() {
                $(".FullscreenDimmer").css({
                    display: "none"
                });
            });

            $(".rplayerFx").css({
                opacity: "1"
            },this.fadeinTime);
            
            $("#rplayer").css({
                opacity: "1",
                transform: "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0)"
            },this.fadeinTime);
            
            var that = this;
            var visualOn = false;
            $(".rplayerTransport").on("click",function() {
                if (!visualOn) {
                    that.visualisation();
                    visualOn = true;
                }
            });
        }
    }

    seekersInfo() {
        var lastVolume = false;
        this.infoInterval = setInterval(function() {
            if (!document.hidden) {

                var volumeTggleData = Math.round($(".rplayerVolFader").val() / 10) / 1000 + "%";
                var pointPosition = volumeTggleData.indexOf(".");
                
                if (pointPosition != 0) {
                    var output = [volumeTggleData.slice(0, pointPosition), "<span style=\"font-size: .7em; opacity: .7\">", volumeTggleData.slice(pointPosition)].join('');
                    var percPosition  = output.indexOf("%");
                    var output = [output.slice(0, percPosition), "</span> ", output.slice(percPosition)].join('');
                } else {
                    var output = volumeTggleData;
                }
                
                if ($(".rplayerVolFader").val() != lastVolume) {
                    $(".volumeInfo").html(output);
                    lastVolume = $(".rplayerVolFader").val();
                }
    
                var seekerPosition = Math.ceil($(".rplayerSeeker").val() - $(".rplayerSeeker").attr("min"));
    
                var sMin = Math.floor(seekerPosition / 60);
                var sSec = seekerPosition - (sMin * 60);
    
                if (sSec < 10) {
                    sSec = 0 + sSec.toString()
                }
                
                var seekerInfoOutput = sMin + ":" + sSec;
    
                if ($(".rplayerSeeker").attr("data-content") != seekerInfoOutput) {
                    $(".rplayerSeeker").attr("data-content",seekerInfoOutput);
                    $(".popup").html(seekerInfoOutput);
                }
            }

        },30);
    }

    visualisation() {
        var audio = this.rplayerObj.audioObject;

        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = document.getElementById("rplayerVisualCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;

        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;

        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            for (var i = 0; i < bufferLength; i++) {
                barHeight = (dataArray[i] * (dataArray[i] / 2)) / 50;

                var r = 155;
                var g = 255;
                var b = 0;

                ctx.fillStyle = "#1e70bf";
                ctx.fillRect(x, HEIGHT - (barHeight), barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        renderFrame();
    }

    motion3d() {
        var framerate = 30;
        var scale = 0.9;
        var i = 0;

        var shakingBrutality = .1;

        this.motion3dTicker = setInterval(function() {

            $("#rplayer").css({
                transform: "perspective(5em) rotateX(" + (Math.sin(i / 222) * -4 * shakingBrutality) + "deg) rotateY(" + (Math.sin(i / 126) * -4 * shakingBrutality) + "deg) rotateZ(" + (Math.sin(i / 635) * -16 * shakingBrutality) + "deg)"
            });

            i++;
        }, 1000 / framerate);
    }
}

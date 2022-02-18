/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

export default class RPlayer {
    
    constructor(
        rplayerCfg
    ) {
        
        console.log("[RPlayer]","Core loaded.");
        this.seekingNow            = false;
        this.seekerInit            = true;
        this.rewindToThisTrackTime = 2;
        this.rplayerCfg            = rplayerCfg;
        this.wordsView             = true;
        this.tracklistLoaded       = false;
        this.license               = false;
        
        this.rplayerObject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow);
        
        this.audioSrc = rplayerCfg.conf.album.mediaSrc;

        this.audioObject = new Audio(this.audioSrc);
        this.audioObject.preload = "auto";
        this.showcurtimeobject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.info.currentTime);
        this.showlentimeobject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.info.lengthTime);
        this.volumefaderobject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.controls.volumeFader);
        this.seekerObject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.controls.seeker);

        this.wasInit = false;
        this.trackInfoSelected = false;
        this.seekerStartPosition = 0;
        this.seekerEndPosition;
        this.curTrackId;
                
        var that = this;

        this.audioObject.addEventListener("loadedmetadata", function() {
            that.init();
            console.log("[RPlayer]","Data loaded.");
        });
    }
    
    init() {
        this.wasInit = true;
        if (device.os == "ios") {
            $(this.rplayerCfg.conf.app.htmlSelectors.controls.volumeFader).attr("disabled",true);
        }

        this.htmlToHeader();
        this.getLicense();
        this.noScreenSleep();
        this.preloadAllImages();
        this.tracklist();
        this.buttons();
        this.putAlbumInfo();
        this.putWebTitle();
        this.showTime();
        this.volumeFader();
        this.seeker();
        this.currentTrack();
        this.looper();
        this.lockScreenInfo();
        this.showLoading();
        this.writeVersionDate();
        this.words();
        this.keyboard();
    }

    htmlToHeader() {
        // console.log(this.rplayerCfg.conf.app.htmlToHeader)
        $("head").append(this.rplayerCfg.conf.app.htmlToHeader);
    }

    nl2br(str, is_xhtml) {   
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    }
    
    getLicense() {
        var that = this;
        $.get('./LICENSE', function(data) {
            // console.log("[RPlayer]",data);
            that.license = that.nl2br(data,false);
        });
    }

    noScreenSleep() {
        try {
            navigator.wakeLock.request('screen');
            console.log("[RPlayer]","The screen will not fall asleep now.");
        } catch (err) {
            // the wake lock request fails - usually system related, such being low on battery
            console.log("[RPlayer] noScreenSleep()",`${err.name}, ${err.message}`);
        }          
    }

    preloadAllImages() {
        var cfg = this.rplayerCfg.conf;
        var key = 0;
        var image = new Array;

        // tracks
        this.obj2array(cfg.album.tracks).forEach(element => {

            image[key] = new Image();
            image[key].src = element[1].info.image;

            key++;
        });

        // album
        image[key] = new Image();
        image[key].src = cfg.album.info.image;

        key++;

        // slideshow
        this.obj2array(cfg.slideShow.pictures).forEach(element => {

            image[key] = new Image();
            image[key].src = element[1].src;

            key++;
        });
    }

    putWebTitle() {
        var cfg = this.rplayerCfg.conf;
        $("title").html(
            cfg.album.info.composer + " - " +
            cfg.album.info.name + " (" +
            cfg.album.info.year + " :: " +
            cfg.app.name + " " +
            cfg.app.version
        );
    }
    
    putAlbumInfo() {
        var cfg = this.rplayerCfg.conf;
        $(cfg.app.htmlSelectors.info.albumComposer).html(cfg.album.info.composer);
        $(cfg.app.htmlSelectors.info.albumName).html(cfg.album.info.name);
        $(cfg.app.htmlSelectors.info.albumYear).html(cfg.album.info.year);
    }
    
    help() {
        // console.log(this.curTrackId,this.trackInfoSelected);
        var htmlSelector = this.rplayerCfg.conf.app.windows.showInfo.htmlSelector;
        // var songInfoHtml = "ahoj";
        // console.log(songInfoHtml);

        var htmlOut = "<div class='infoWindow'><div style='text-align: right'><i class='window close icon' onclick='$(this).parent().parent().parent().css({display: \"none\"})'></i></div>";
        var lat = 0;
                
        htmlOut  += "<img src='./src/imgs/help.svg' style='width: 100%; padding-top: .5em;'>" + 
                    "<div style='height: 50vh; overflow: auto; text-align: justify;'>" +
                        "<br>" +
                        "<span style='font-weight: bold; font-size: 1.2em'>This is RPlayer...</span>" +
                        "<table style='border-collapse: collapse; font-family: courier; margin-top: .5em; width: 100%;'>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[SPACE]" +
                                "</td>" +
                                "<td>" +
                                    "Play / Pause" +
                                "</td>" +
                                "<td rowspan='4' style='border-left: 1px solid rgba(0,0,0,.1); text-align: center;'>" +
                                    "<img style='width: 6em;' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyAyMDE4ICg2NCBiaXTFrykgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjIxMG1tIiBoZWlnaHQ9IjIxMG1tIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCAyMTAwMCAyMTAwMCINCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogPGRlZnM+DQogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQogICA8IVtDREFUQVsNCiAgICAuc3RyMSB7c3Ryb2tlOiMyQjJBMjk7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLnN0cjAge3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI1Nn0NCiAgICAuZmlsMSB7ZmlsbDpibGFja30NCiAgICAuZmlsMiB7ZmlsbDojNDE4M0M0fQ0KICAgIC5maWwwIHtmaWxsOndoaXRlfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJWcnN0dmFfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxnIGlkPSJMb2dvX3gwMDIwX1JQbGF5ZXIiPg0KICAgPHJlY3QgY2xhc3M9ImZpbDAiIHdpZHRoPSIyMTAwMCIgaGVpZ2h0PSIyMTAwMCIgcng9IjI5NzMuOTYiIHJ5PSIyOTczLjk2Ii8+DQogICA8ZyBpZD0iTG9nb194MDAyMF9SUGxheWVyX3gwMDIwXzEiPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjQ1MC40OCAxMjEwMy43bDY3MC44MyAtMzg3LjMgNzg4MS4yOCAtNDU1MC4yNmMxNDkuNDYsLTg2LjI5IDIzNSwtMjM0LjQ1IDIzNSwtNDA3LjAzIDAsLTE3Mi41OCAtODUuNTQsLTMyMC43NCAtMjM1LC00MDcuMDNsLTg1NTIuMTEgLTQ5MzcuNTZjLTE0OS40NiwtODYuMjkgLTMyMC41NCwtODYuMjkgLTQ3MCwwIC0xNDkuNDUsODYuMjkgLTIzNSwyMzQuNDUgLTIzNSw0MDcuMDNsMCA5ODc1LjExYzAsMTcyLjU4IDg1LjU0LDMyMC43NSAyMzUsNDA3LjA0IDE0OS40Niw4Ni4yOCAzMjAuNTQsODYuMjkgNDcwLDB6bTY3MC44MyAtMjU3Ny4xOWwwIC01NTM0LjggMCAtODE0LjA2IDcwNC44MSA0MDYuOTIgMjM5Ni44MyAxMzgzLjgxIDMxMDEuNjMgMTc5MC43MyAtMzEwMS42MyAxNzkwLjczIC0yMzk2LjgzIDEzODMuODEgLTcwNC44MSA0MDYuOTIgMCAtODE0LjA2eiIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjIxNS40OCAxMjc4NS43N2w0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MHoiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIwIiBkPSJNOTg3Mi45NyAxOTI2OS45OGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MGw0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MHoiLz4NCiAgICA8cG9seWdvbiBjbGFzcz0iZmlsMiBzdHIxIiBwb2ludHM9IjcxMjEuMzEsMzk5MS43MSA3MTIxLjMxLDk1MjYuNTEgNzEyMS4zMSwxMDM0MC41NyA3ODI2LjEyLDk5MzMuNjUgMTAyMjIuOTUsODU0OS44NCAxMzMyNC41OCw2NzU5LjExIDEwMjIyLjk1LDQ5NjguMzggNzgyNi4xMiwzNTg0LjU3IDcxMjEuMzEsMzE3Ny42NSAiLz4NCiAgIDwvZz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K'>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[UP]" +
                                "</td>" +
                                "<td>" +
                                    "Previous track / start current track" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[DOWN]" +
                                "</td>" +
                                "<td>" +
                                    "Next track" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[LEFT]" +
                                "</td>" +
                                "<td>" +
                                    "Rewind" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[RIGHT]" +
                                "</td>" +
                                "<td>" +
                                    "Forward" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[CTRL]" +
                                "</td>" +
                                "<td>" +
                                    "Slideshow mode" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[ENTER]" +
                                "</td>" +
                                "<td>" +
                                    "Fullscreen mode" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[S]" +
                                "</td>" +
                                "<td>" +
                                    "Stop after track" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[L]" +
                                "</td>" +
                                "<td>" +
                                    "Loop all" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "[T]" +
                                "</td>" +
                                "<td>" +
                                    "Show / hide lyrics" +
                                "</td>" +
                            "</tr>" +
                        "</table>" +
                        "<br>" +
                        "<div style='padding-top: .5em;'>" +
                            this.license;
                        "</div>" +
                    "</div>";
                    // console.log($.get('./LICENSE'));

        htmlOut += "</div>";

        // console.log(htmlOut);
        $(htmlSelector).html(htmlOut);
        $(htmlSelector).css({
            display: "block"
        });
    }

    keyboard() {
        var that = this;
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
              return; // Do nothing if the event was already processed
            }
            // console.log(event.key);
          
            switch (event.key) {
                case "+":
                
                    $(that.volumefaderobject).val(Math.round($(that.volumefaderobject).val()) + 5000);
                    that.audioObject.volume = ($(that.volumefaderobject).val() / 1000000);
    
                break;
                case "-":
                
                    $(that.volumefaderobject).val(Math.round($(that.volumefaderobject).val()) - 5000);
                    that.audioObject.volume = ($(that.volumefaderobject).val() / 1000000);
    
                break;
                case "Control":
                
                    if ($(that.rplayerCfg.conf.app.htmlSelectors.mainWindow).css("opacity") == "1") {
                        $(that.rplayerCfg.conf.app.htmlSelectors.controls.minimize).click();
                    }
                    if ($(that.rplayerCfg.conf.app.htmlSelectors.mainWindow).css("opacity") == "0") {
                        $("body").click();
                    }
    
                break;
                case "Enter":
                
                    $(that.rplayerCfg.conf.app.htmlSelectors.controls.fullScreen).click();
    
                break;
                case "l":
                case "L":
                
                    $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerCfg.conf.app.htmlSelectors.controls.loopAll).click();
    
                break;
                case "s":
                case "S":
                
                    $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerCfg.conf.app.htmlSelectors.controls.stopAfterTrack).click();
    
                break;
                case "w":
                case "W":
                case "t":
                case "T":

                    $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerCfg.conf.app.htmlSelectors.controls.wordsButton).click();

                break;
                case " ":

                    $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerStartPause\"]").click();

                break;
                case "ArrowDown":

                    that.transportLastAction = "rplayerFW";
                    that.transport();

                break;
                case "ArrowUp":
                
                    that.transportLastAction = "rplayerRW"
                    that.transport();

                break;
                case "ArrowLeft":

                    that.transportLastAction = "stepRW"
                    that.transport();
                    
                break;
                case "ArrowRight":

                    that.transportLastAction = "stepFW"
                    that.transport();

                break;
                default:
                return; // Quit when this doesn't handle the key event.
            }
          
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }, true);
        // the last option dispatches the event to the listener first,
        // then dispatches event to window
    }

    getCurrentWord() {
        try {
            var words = this.obj2array(this.rplayerCfg.conf.album.tracks[this.curTrackId].words);
            var time = Math.round(this.audioObject.currentTime * 1000) - this.seekerStartPosition * 1000;
            var currentWord = new Array;
            words.forEach(element => {

                if (element[0] < time) {
                    currentWord["time"]   = element[0];
                    currentWord["offset"] = time - element[0];
                    currentWord["text"]   = element[1];
                }
            });
            if (currentWord["offset"] !== undefined) {
                return currentWord;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
    
    words() {
        var that     = this;
        var lastWord = false; // fix for online translation
        var lastTime = false;
        this.wordsInterval = setInterval(function () {
            
            if (that.wordsView) {
                
                if (
                    that.rplayerCfg.conf.app.preferences.words.timeToConsole &&
                    Math.round(that.audioObject.currentTime * 1000) != lastTime
                ) {
                    lastTime = Math.round(that.audioObject.currentTime * 1000);
                    console.clear();
                    console.log("[RPlayer] Current time",Math.round(that.audioObject.currentTime * 1000) - that.seekerStartPosition * 1000," :: ",Math.round(that.audioObject.currentTime * 1000));
                }
                
                if (
                    that.getCurrentWord()["offset"] !== undefined
                    && that.getCurrentWord()["offset"] < that.rplayerCfg.conf.app.preferences.words.titleMaxTime
                ) {
                    if ($(that.rplayerCfg.conf.app.htmlSelectors.controls.wordsButton + " .align").parent().hasClass("primary")) {
                        $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                            display: "block"
                        });
                        
                        if (lastWord != that.removeHtml(that.getCurrentWord()["text"])) {
                            lastWord = that.removeHtml(that.getCurrentWord()["text"]);
                            $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').html(lastWord);
                        }
                    } else {
                        $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                            display: "none"
                        });
                    }
                } else {
                    $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                        display: "none"
                    });
                }

            } else {
                $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                    display: "none"
                });
            }

            $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                opacity: 1 - (that.getCurrentWord()["offset"] / 10000)
            });
        },100);
    }

    writeVersionDate() {
        $(this.rplayerCfg.conf.app.htmlSelectors.info.appVersion).html(this.rplayerCfg.conf.app.version);
        $(this.rplayerCfg.conf.app.htmlSelectors.info.appDate).html(this.rplayerCfg.conf.app.date);
    }

    lockScreenInfo() {

        if ("mediaSession" in navigator) {

            const defaultSkipTime = 10;
            const actionHandlers = [
                ['play',          () => {
                    this.transportLastAction = "rplayerStartPause";
                    this.transport();
                }],
                ['pause',         () => {
                    this.transportLastAction = "rplayerStartPause";
                    this.transport();
                }],
                ['previoustrack', () => {
                    this.transportLastAction = "rplayerRW";
                    this.transport();
                }],
                ['nexttrack',     () => {
                    this.transportLastAction = "rplayerFW";
                    this.transport();
                }],
                ['stop',          () => {
                    this.transportLastAction = "rplayerStop";
                    this.transport();
                }],
                ['seekbackward',  (details) => {
                    const skipTime = details.seekOffset || defaultSkipTime;
                    this.audioObject.currentTime = Math.max(this.audioObject.currentTime - skipTime, 0);
                }],
                ['seekforward',   (details) => {
                    const skipTime = details.seekOffset || defaultSkipTime;
                    this.audioObject.currentTime = Math.min(this.audioObject.currentTime + skipTime, this.audioObject.duration);
                }],
                ['seekto',        (details) => {
                    if (details.fastSeek && "fastSeek" in video) {
                        this.audioObject.fastSeek(details.seekTime);
                        return;
                    }
                    this.audioObject.currentTime = details.seekTime;
                }],
            ];
              
            for (const [action, handler] of actionHandlers) {
                try {
                    navigator.mediaSession.setActionHandler(action, handler);
                } catch (error) {
                    console.log(`The media session action "${action}" is not supported yet.`);
                }
            }

            // TODO: Update playback state.
        }
    }

    looper() {
        var that = this;
        this.audioObject.onended = function() {
            if ($(that.rplayerCfg.conf.app.htmlSelectors.controls.loopAll).prop("checked") == true) {
                that.audioObject.currentTime = that.seekerStartPosition = 0;
                that.transportLastAction = "rplayerStartPause";
                that.transport();
            }
        }
    }

    currentTrack() {
        var that = this;
        var curTrackLast;
        setInterval(function() {
            if (parseInt(that.seekerObject.attr("max")) != Math.floor(that.audioObject.duration)) {
                that.curTrackId = that.getKeyByValue(that.splits,that.seekerEndPosition) - 1;
            } else {
                that.curTrackId = that.tnames.length - 1
            }

            if (that.tnames[that.curTrackId] != curTrackLast) {
                $(that.rplayerCfg.conf.app.htmlSelectors.info.currentTrackName).html(that.tnames[that.curTrackId]);

                if ("mediaSession" in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: that.tnames[that.curTrackId],
                        artist: that.rplayerCfg.conf.album.info.composer,
                        album: that.rplayerCfg.conf.album.info.name,
                        artwork: [
                            {src: that.rplayerCfg.conf.album.tracks[that.curTrackId].info.image}
                        ]
                    });
                }

                curTrackLast = that.tnames[that.curTrackId];
            }

            $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistOneTrack + "#" + (that.curTrackId)).addClass("rplayerActiveTrack");

            for (var key in that.tnames) {
                if (key != that.curTrackId) {
                    $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistOneTrack + "#" + key).removeClass("rplayerActiveTrack");
                }
            }
            
        },100);
    }
    
    obj2array(obj) {
        return Object.keys(obj).map((key) => [Number(key), obj[key]]);
    }
    
    removeHtml(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    
    tracklist() {
        this.splits = new Array;

        
        var tracks = this.obj2array(this.rplayerCfg.conf.album.tracks);
        var albumInfo = (this.rplayerCfg.conf.album.info.anyHtml);
        // console.log("informace o albu",this.removeHtml(albumInfo));

        this.tnames = new Array;
        var i = 0;
        tracks.forEach(element => {
            // console.log(element);
            this.tnames[i] = element[1].mediaName;
            if (i != 0) {
                this.splits[i] = element[1].timeStart;
            }
            i++;
        });

        this.tracklistLoaded = true;
        
        // console.log(this.splits, this.tnames);

        
        
        var tDuration;
        var that = this;
        for (var key in this.tnames) {
            if (key == 0) {
                tDuration = that.secondsToTime(that.splits[parseInt(key) + 1]);
            } else if (key < that.tnames.length - 1) {
                tDuration = that.secondsToTime(that.splits[parseInt(key) + 1] - that.splits[parseInt(key)]);
            } else {
                tDuration = that.secondsToTime(that.audioObject.duration - that.splits[parseInt(key)]);
            }
            $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).append(
                "<a href='#' class='rplayerOneTrack' id='" +
                key +
                "'><span class='name'>" +
                this.tnames[key] +
                "</span><span class='duration'>" +
                (
                    (
                        this.obj2array(this.rplayerCfg.conf.album.tracks)[key][1].words ||
                        this.obj2array(this.rplayerCfg.conf.album.tracks)[key][1].info
                    ) ?
                        "<span class='trackInfoButton'>&nbsp;&nbsp;" +
                        (
                            (
                                this.obj2array(this.rplayerCfg.conf.album.tracks)[key][1].words
                            ) ? 
                            "<i class='align center icon'></i>" : 
                            ""
                        ) +
                        (
                            (
                                this.obj2array(this.rplayerCfg.conf.album.tracks)[key][1].info
                            ) ? 
                            "<i class='info icon' data-trackid='" + key + "'></i>" : 
                            ""
                        ) +
                        "</span>"
                    : ""
                ) +
                tDuration +
                "</span></a><br>"
            );
        }

        $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistOneTrack).on("click",function() {
            var curTrackId = $(this).attr("id");
            // console.log("[RPlayer]",this);

            that.transportLastAction = "rplayerStartPause";
            that.transport();
            
            if (curTrackId == 0) {
                that.audioObject.currentTime = that.seekerStartPosition = 0;
            } else {
                that.audioObject.currentTime = that.seekerStartPosition = that.splits[curTrackId] + 0.001;
            }

            if (curTrackId = that.splits.length) {
                that.seekerEndPosition = that.audioObject.duration;
            }

            that.transportLastAction = "rplayerStartPause";
            that.transport();

            return false;
        });

        $(that.rplayerCfg.conf.app.htmlSelectors.info.albumDuration).html(this.secondsToTime(this.audioObject.duration));
    }

    seeker() {
        var that = this;

        if (this.seekerInit == true) {

            this.seekerObject.attr("max",this.audioObject.duration);
            this.seekerObject.val(0);
            
            this.audioObject.currentTime = this.seekerObject.val();

            console.log("[RPlayer]","Seeker init success.");
            this.seekerInit = false;
        } else {            
            var condition = false;
            var tempElementMax = 0;
            
            this.splits.forEach(element => {
                if (that.audioObject.currentTime > element && condition == false) {

                    if (element > tempElementMax) {
                        tempElementMax = that.seekerStartPosition = element;
                    } else {
                        condition = true;
                    }

                }
            });
            
            var condition = false;
            this.splits.forEach(element => {
                if (that.seekerStartPosition < element && condition == false) {
                    that.seekerEndPosition = element;
                    condition = true;
                }
            });

            if (this.audioObject.currentTime < this.splits[1]) {
                this.seekerStartPosition = 0;
            }

            if (this.seekerEndPosition == this.seekerStartPosition) {
                this.seekerEndPosition = this.audioObject.duration;
            }

            if (this.audioObject.currentTime > this.splits[(this.splits.length - 1)]) {
                this.seekerEndPosition = this.audioObject.duration;
            }

            if (!this.seekingNow) {

                if (this.seekerStartPosition != this.seekerObject.attr("min")) {
                    this.seekerObject.attr("min",this.seekerStartPosition);

                    if (
                        $(
                            that
                            .rplayerCfg
                            .conf
                            .app
                            .htmlSelectors
                            .controls
                            .stopAfterTrack
                        ).prop("checked") == true) {
                        console.log("[RPlayer]","autoStop");
                        
                        this.transportLastAction = "rplayerStartPause";
                        this.transport();
                        
                        setTimeout(function() {
                            that.transportLastAction = "rplayerStop";
                            that.transport();
                        },200);

                        $(
                            that
                            .rplayerCfg
                            .conf
                            .app
                            .htmlSelectors
                            .controls
                            .stopAfterTrack
                        ).prop("checked",false);
                    }

                }
                if (this.seekerEndPosition != this.seekerObject.attr("max")) {
                    this.seekerObject.attr("max",this.seekerEndPosition);
                }
                this.seekerObject.attr("value",this.audioObject.currentTime);
                this.seekerObject.val(this.audioObject.currentTime);
            } else {
                this.seekerObject.on("change",function() {
                    that.audioObject.currentTime = that.seekerObject.val();
                });
            }
        }
    }
    
    volumeFader() {
        this.audioObject.volume = ($(this.volumefaderobject).val() / 1000000);
    }
    
    showLoading() {
        var that = this;

        that.audioObject.addEventListener('waiting', function () {
            console.log('[NOTICE] Buffering...');
            $(that.rplayerCfg.conf.app.htmlSelectors.info.bufferLoading).css({
                opacity: "1"
            });
        });
        that.audioObject.addEventListener('playing', function () {
            $(that.rplayerCfg.conf.app.htmlSelectors.info.bufferLoading).css({
                opacity: "0"
            });
        });
        that.audioObject.addEventListener('pause', function () {
            $(that.rplayerCfg.conf.app.htmlSelectors.info.bufferLoading).css({
                opacity: "0"
            });
        });
        that.audioObject.addEventListener('stalled', function () {
            console.log('[WARNING] Failed to fetch data, but trying.');
        });
        that.audioObject.addEventListener('suspend', (event) => {
            that.audioObject.oncanplay = function() {
                $(that.rplayerCfg.conf.app.htmlSelectors.info.bufferLoading).css({
                    opacity: "0"
                });
            };
            console.log('[NOTICE] Data loading has been suspended.');
        });
    }
    
    showTime() {
        var that = this;
        var curTimeLast;
        var lenTimeLast;
        var bufferLast;

        this.showTimeTicker = setInterval(function() {
            
            that.volumeFader();
            that.seeker()

            var bufferOnePerc = that.audioObject.duration / 100;
            var bufferedPerc = 0;

            for (let index = 0; index < Math.round(that.audioObject.buffered.length); index++) {
                bufferedPerc += (that.audioObject.buffered.end(index) - that.audioObject.buffered.start(index)) / bufferOnePerc;
                
                
                
                
                
                // console.log(
                //     that.audioObject.buffered.start(index),
                //     that.audioObject.buffered.end(index),
                //     that.audioObject.buffered.end(index) - that.audioObject.buffered.start(index),
                //     that.audioObject.currentTime
                // );
                
                
                
                
                
                            
            }
            bufferedPerc = Math.round(bufferedPerc);
            if (bufferedPerc != bufferLast) {
                $(that.rplayerCfg.conf.app.htmlSelectors.info.bufferCondition).html(bufferedPerc);
                bufferLast = bufferedPerc;
            }
            
            if (that.secondsToTime(that.audioObject.currentTime - that.seekerStartPosition) != curTimeLast) {
                that.showcurtimeobject.html(
                    that.secondsToTime(
                        that.audioObject.currentTime - that.seekerStartPosition
                    )
                );
                curTimeLast = that.showcurtimeobject.html();
            }

            if (that.secondsToTime(that.seekerEndPosition - that.seekerStartPosition) != lenTimeLast) {
                that.showlentimeobject.html(
                    that.secondsToTime(
                        that.seekerEndPosition - that.seekerStartPosition
                    )
                );
                lenTimeLast = that.showlentimeobject.html();
            }

        },100);
    }

    secondsToTime(value) {
        var sec_num = parseInt(value, 10);
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
        return ((hours != "00") ? hours + ':' : "") + minutes + ":" + seconds;
    }

    buttons() {
        var htmlSelectors =  this
                            .rplayerCfg
                            .conf
                            .app
                            .htmlSelectors
                            ;
        var that = this;

        $(htmlSelectors.info.transport).on("click",function() {
            console.log("[RPlayer]",$(this).attr("data-command"));
            that.transportLastAction = $(this).attr("data-command");
            that.transport();
        });

        $(htmlSelectors.controls.trackInfoButton).on("click",function() {
            that.trackInfoSelected = parseInt($(this).find("i.icon.info").attr("data-trackid"));
        });

        $(htmlSelectors.controls.helpButton).on("click",function() {
            that.help(); // Build-in dev window
        });

        this.seekerObject.on("touchstart touchmove mouseover",function() {
            that.seekingNow = true;
        });

        this.seekerObject.on("touchend mouseout",function() {
            that.seekingNow = false;
        });

        $(".trackInfoButton").on("click",function() {
            return false;
        });

        // setInterval(function() {
        //     that.seekingNow = false;
        // },10000);

    }
    
    transport() {

        if (this.transportLastAction == "rplayerStartPause") {
            if(this.audioObject.paused) {
                this.audioObject.play();
            } else {
                this.audioObject.pause();
            }
        }

        if (this.transportLastAction == "rplayerWords") {
            if(this.wordsView == true) {
                this.wordsView = false;
                $(this.rplayerCfg.conf.app.htmlSelectors.controls.wordsButton).removeClass("primary");
            } else {
                this.wordsView = true;
                $(this.rplayerCfg.conf.app.htmlSelectors.controls.wordsButton).addClass("primary");
            }
        }
        
        if (this.transportLastAction == "rplayerStop") {
            this.audioObject.pause();
            this.audioObject.currentTime = this.seekerStartPosition + 0.001;
        }

        if (this.transportLastAction == "stepFW") {
            // console.log(this.rplayerCfg.conf);
            this.audioObject.currentTime += this.rplayerCfg.conf.app.preferences.transport.stepTime;
        }

        if (
            this.transportLastAction == "stepRW"
        ) {
            if (this.audioObject.currentTime - this.rplayerCfg.conf.app.preferences.transport.stepTime >= 0) {
                this.audioObject.currentTime -= this.rplayerCfg.conf.app.preferences.transport.stepTime;
            } else {
                this.audioObject.currentTime = 0;
            }
        }

        if (this.transportLastAction == "rplayerFW") {
            this.audioObject.currentTime = this.seekerEndPosition + 0.001;
        }

        if (this.transportLastAction == "rplayerRW") {
            var myTrack = this.getKeyByValue(this.splits,this.seekerStartPosition) - 1;
            if (!isNaN(myTrack)) {
                if (myTrack == 0) {
                    if (this.audioObject.currentTime - this.splits[myTrack + 1] > this.rewindToThisTrackTime) {
                        this.audioObject.currentTime = this.splits[myTrack + 1] + 0.001;
                    } else {
                        this.audioObject.currentTime = 0;
                        this.seekerStartPosition = 0;
                    }
                } else {
                    if (this.audioObject.currentTime - this.splits[myTrack + 1] > this.rewindToThisTrackTime) {
                        this.audioObject.currentTime = this.splits[myTrack + 1] + 0.001;
                    } else {
                        this.audioObject.currentTime = this.splits[myTrack] + 0.001;
                    }
                }
            } else {
                this.audioObject.currentTime = 0;
                this.seekerStartPosition = 0;
            }
        }

    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

}

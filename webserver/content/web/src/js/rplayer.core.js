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
        
        this.rplayerObject = $(rplayerCfg.conf.app.htmlSelectors.mainWindow);
        
        this.audioSrc = rplayerCfg.conf.album.mediaSrc;

        this.audioObject = new Audio(this.audioSrc);
        this.audioObject.preload = "metadata";
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
            $(rplayerCfg.conf.app.htmlSelectors.controls.volumeFader).attr("disabled",true);
        }

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
    
    windows() {
        console.log(this.curTrackId,this.trackInfoSelected);
        var htmlSelector = this.rplayerCfg.conf.app.windows.showInfo.htmlSelector;
        var songInfoHtml = this
                        .rplayerCfg
                        .conf
                        .album
                        .tracks[this.trackInfoSelected]
                        .info
                        .anyHtml
                        ;
        console.log(songInfoHtml);

        var htmlOut = "<div class='infoWindow'><i class='window angle left icon'></i><i class='window close outline icon' onclick='$(this).parent().parent().css({display: \"none\"})'></i><i class='window angle right icon'></i>";
        var lat = 0;
        
        this.obj2array(songInfoHtml).forEach(element => {
            if (lat > 0) {
                htmlOut += "<hr>";
            }
            // console.log(element[1].id);
            htmlOut += "<h3>" + element[1].id + "</h3><br>";
            htmlOut += "<p>" + element[1].html + "</p><br>";
            lat++;
        });

        htmlOut += "</div>";

        console.log(htmlOut);
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
        this.wordsInterval = setInterval(function () {
            
            if (that.wordsView) {
                
                if (that.rplayerCfg.conf.app.preferences.words.timeToConsole) {
                    console.clear();
                    console.log("[RPlayer] Current time",Math.round(that.audioObject.currentTime * 1000) - that.seekerStartPosition * 1000);
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
                        artist: 'YATSU',
                        album: 'Dreamer',
                        artwork: [
                        { src: 'media/YATSU96.jpg',  sizes: '96x96',   type: 'image/jpg' },
                        { src: 'media/YATSU128.jpg', sizes: '128x128', type: 'image/jpg' },
                        { src: 'media/YATSU192.jpg', sizes: '192x192', type: 'image/jpg' },
                        { src: 'media/YATSU256.jpg', sizes: '256x256', type: 'image/jpg' },
                        { src: 'media/YATSU384.jpg', sizes: '384x384', type: 'image/jpg' },
                        { src: 'media/YATSU512.jpg', sizes: '512x512', type: 'image/jpg' },
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
            // that.windows(); // Build-in dev window
        });

        this.seekerObject.on("touchstart touchmove mouseover",function() {
            that.seekingNow = true;
        });

        this.seekerObject.on("touchend mouseout",function() {
            that.seekingNow = false;
        });

        $(".trackInfoButton").on("click",function() {
            // console.log("ahoj");
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

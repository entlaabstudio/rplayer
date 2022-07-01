/**
 * @file Core file of RPlayer web application
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
        rplayerCfg,
        QrCode
    ) {
        
        console.log("[RPlayer]","Core loaded.");

        this.refreshPlayerOnInitTimeout();

        this.cfg                   = rplayerCfg.conf;
        this.seekingNow            = false;
        this.seekerInit            = true;
        this.rewindToThisTrackTime = 2;
        this.rplayerCfg            = rplayerCfg;
        this.wordsView             = true;
        this.tracklistLoaded       = false;
        this.license               = false;
        this.QrCode                = QrCode;
        
        this.ct = $(rplayerCfg.conf.app.htmlSelectors.mainWindow);
        
        this.audioSrc = rplayerCfg.conf.album.mediaSrc;

        this.audioObject           = new Audio(this.audioSrc);
        this.audioObject.preload   = "auto";
        this.showcurtimeobject     = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.info.currentTime);
        this.showlentimeobject     = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.info.lengthTime);
        this.volumefaderobject     = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.controls.volumeFader);
        this.seekerObject          = $(rplayerCfg.conf.app.htmlSelectors.mainWindow).find(rplayerCfg.conf.app.htmlSelectors.controls.seeker);

        this.wasInit               = false;
        this.trackInfoSelected     = false;
        this.additionalSrcsChecked = [];
        this.seekerStartPosition   = 0;
        this.currentTimeOnError    = false;
        this.seekerEndPosition;
        this.curTrackId;
        this.translated            = [];
        this.lastActiveTrack       = false;
        this.cssModifierActualCss  = [];

        this.playAfterCriticalStreamError = false;

        // +++ Prepare media for check
        var prepareFilesKey = 0;

        this.additionalSrcsChecked[prepareFilesKey] = this.rplayerCfg.conf.app.preferences.design.favicon;
        prepareFilesKey += 1;
        
        this.additionalSrcsChecked[prepareFilesKey] = this.rplayerCfg.conf.album.info.image;
        prepareFilesKey += 1;
        
        if (rplayerCfg.conf.album.srcsForCheck !== undefined) {
            for (const [key, value] of Object.entries(rplayerCfg.conf.album.srcsForCheck)) {
                this.additionalSrcsChecked[prepareFilesKey] = value;
                prepareFilesKey += 1;
            }
        }

        if (rplayerCfg.conf.album.downloads !== undefined) {
            for (const [key, value] of Object.entries(rplayerCfg.conf.album.downloads)) {
                this.additionalSrcsChecked[prepareFilesKey] = value.srcFile;
                prepareFilesKey += 1;
            }
        }

        for (const [key, value] of Object.entries(rplayerCfg.conf.album.tracks)) {
            this.additionalSrcsChecked[prepareFilesKey] = value["info"].image;
            prepareFilesKey += 1;

            if (value["info"].icon) {
                this.additionalSrcsChecked[prepareFilesKey] = value["info"].icon;
                prepareFilesKey += 1;
            }
            
            if (value["downloads"] !== undefined) {

                this.additionalSrcsChecked[prepareFilesKey] = value["downloads"].mp3;
                prepareFilesKey += 1;
    
                if (value["downloads"]["others"] !== undefined) {
                    for (const [key2, value2] of Object.entries(value["downloads"]["others"])) {
                        this.additionalSrcsChecked[prepareFilesKey] = value2.srcFile;
                        prepareFilesKey += 1;
                    }
                }
            }
        }

        var uniquePathsAddSrcs = [];
        $.each(this.additionalSrcsChecked, function(i, el){
            if($.inArray(el, uniquePathsAddSrcs) === -1) uniquePathsAddSrcs.push(el);
        });

        this.additionalSrcsChecked = uniquePathsAddSrcs;
        this.checkAdditionalSrcs();
        // --- Prepare media for check
                
        var that = this;

        this.audioObject.addEventListener("error", function() {
            window.top.postMessage("[BOOT-RELOAD]", '*');
        });

        this.audioObject.addEventListener("loadedmetadata", function() {
            if (!that.wasInit) {
                that.init();
            } else {
                if (that.currentTimeOnError) {
                    that.audioObject.currentTime = that.currentTimeOnError;
                    that.currentTimeOnError = false;
                    if (that.playAfterCriticalStreamError == true) {
                        that.audioObject.play();
                    }
                }
            }

            console.log("[RPlayer]","Data loaded.");
        });
    }
    
    checkAdditionalSrcs() {
        var that = this;
        
        this.additionalSrcsChecked.forEach(element => {
            that.checkAdditionalSrc(element);
        });
    }

    checkAdditionalSrc(source) {
        var source;
        var that = this;
        console.log("[RPlayer]","Getting the header of the \"" + source + "\" file.");
        $.ajax({
            type: 'HEAD',
            url: source,
            error: function(jqXHR, textStatus, errorThrown){
                console.log("[RPlayer]","An attempt to load the header for the \"" + source + "\" file failed. I'm trying again.");
                setTimeout(function() {
                    that.checkAdditionalSrc(source);
                },10000);
                window.top.postMessage("[BOOT-RELOAD]", '*');
            },
            success: function() {
                console.log("[RPlayer]","I got the header for the file \"" + source + "\".");
            }
        });
    }

    init() {
        this.wasInit = true;
        if (device.os == "ios") {
            $(this.rplayerCfg.conf.app.htmlSelectors.controls.volumeFader).attr("disabled",true);
        }

        this.refreshAudioOnError();
        this.putLocalization();
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
        this.lyrics();
        this.slideShow();
        this.cssTimeModifier();
        this.keyboard();
    }

    lyrics() {
        this.prepareLyricsMessageData().then(
            this.startMessages(this.lyricsMessagesBranch, "lyricsWorker"),
            this.lyricsPlay()
        );
    }

    slideShow() {
        this.prepareSlideshowMessageData().then(
            this.startMessages(this.slideshowMessagesBranch)
        );
    }

    async prepareSlideshowMessageData() {
        var commands = [];
        var i = 0;

        if (this.cfg.slideShow !== undefined) {
            for(const[key, value] of Object.entries(this.cfg.slideShow.pictures)) {
                commands[i] = {
                    time: parseInt(key),
                    src: value.src,
                    mediaName: value.mediaName
                }
                i += 1; 
            }
        }

        var branch = {
            target: "slideShow", // anything for worker
            commands: commands
        };
        this.slideshowMessagesBranch = branch;
        return Promise.resolve(branch);
    }
    
    async prepareLyricsMessageData() {
        var commands = [];
        var timeStart;
        var i = 0;

        for(const[key, value] of Object.entries(this.cfg.album.tracks)) {
            timeStart = value.timeStart * 1000;
            if (value.words !== undefined) {
                for(const[key2, value2] of Object.entries(value.words)) {
                    commands[i] = {
                        time: parseInt(key2) + timeStart,
                        lyrics: value2
                    }
                    i += 1; 
                }
            }
        }

        var branch = {
            target: "lyrics", // anything for worker
            commands: commands
        };
        this.lyricsMessagesBranch = branch;
        return Promise.resolve(branch);
    }

    cssTimeModifier() {
        if (this.cfg.cssTimeModifier !== undefined) {
            if (!this.cfg.app.preferences.cssTimeModifier.useJSON) {
                this.prepareCssMessageData().then(
                    this.startCssMessages(),
                    this.consoleGetCssTimeModifierJSON()
                );
            } else {
                var zip = new JSZip();
                var that = this;
                JSZipUtils.getBinaryContent('./src/json/prlayer.conf.cssTimeModifierData.json.zip', function(err, data) {
                    if(err) {
                        throw err; // or handle err
                    }
                
                    zip.loadAsync(data).then(function () {
                        return zip.file("prlayer.conf.cssTimeModifierData.json").async("string"); // a promise of "Hello World\n"
                    }).then(function(data) {
                        that.cssMesages = JSON.parse(data);
                        that.startCssMessages();
                        that.consoleGetCssTimeModifierJSON()
                    });
                });
            }
        }
    }

    consoleGetCssTimeModifierJSON() {
        if (this.cfg.app.preferences.cssTimeModifier.getJSON) {
            console.log(JSON.stringify(this.cssMesages));
        }
    }

    startMessages(messageBranch, instance = "any") {
        var messageBranch;
        var worker = new Worker("./src/js/rplayer.workers/rplayer.messageOnTime.worker.js");
        var that = this;

        worker.postMessage({
            branch: messageBranch
        });

        setInterval(function() {
            if (!that.power.off(instance)) {

                worker.postMessage({
                    currentTime: that.audioObject.currentTime
                });
            }
        }, 33);

        worker.onmessage = function(e) {
            var message = e.data;
            that.timeMessageExecute(message);
        }
    }

    power = {
        that: this,
        lastCurrentTime: {},
        off(instance = "any") {
            var ret = false;
            // if (
            //     document.hidden
            //     ||
            //     (
            //         this.lastCurrentTime[instance] == this.that.audioObject.currentTime &&
            //         this.that.audioObject.paused == true
            //     )
            // ) {
                // console.log(this.that.cfg.app.preferences.powerManager.switches[instance], instance);
                // debugger;






                
            if (!document.hidden) {
                if (this.that.cfg.app.preferences.powerManager.switches[instance] !== undefined) {
                    for (const [key, value] of Object.entries(this.that.cfg.app.preferences.powerManager.switches[instance])) {
                        // console.log(key, value);
                    //     // debugger;
    
                        if (key == "cssMustBeVisibleOR") {
                            // console.log(value);
                                // if (
                                //     (
                                //         this.lastCurrentTime[instance] == this.that.audioObject.currentTime &&
                                //         this.that.audioObject.paused == true
                                //     )
                                // ) {
                                //     ret = true;
                                // } else {
                                    for (const [key2, value2] of Object.entries(value)) {
                                        if ($(value2).is(":hidden")) {
                                            // console.log("Jsem skrytý?", $(value2).is(":hidden"));
                                            ret = true;
                                        }/* else {
                                            // console.log("Jsem v pohodě.");
                                        }*/
                                    }
                                // }
                        }
                    
                        switch(key) {
                            case "cssMustBeVisibleOR":
                                // console.log(value);
                                // if (
                                //     (
                                //         this.lastCurrentTime[instance] == this.that.audioObject.currentTime &&
                                //         this.that.audioObject.paused == true
                                //     )
                                // ) {
                                //     ret = true;
                                // } else {
                                    for (const [key2, value2] of Object.entries(value)) {
                                        if ($(value2).is(":hidden")) {
                                            // console.log("Jsem skrytý?", $(value2).is(":hidden"));
                                            ret = true;
                                        } else {
                                            // console.log("Jsem v pohodě.");
                                        }
                                    }
                                // }
    
                            break;
                            case "pauseSensitive":
                                    // console.log(key,value,"AHOJ");
                                    if (
                                        value == true &&
                                        (
                                            this.lastCurrentTime[instance] == this.that.audioObject.currentTime &&
                                            this.that.audioObject.paused == true
                                        )
                                    ) {
                                        ret = true;
                                    }
                            break;
                            default:
                                // code block
                                // console.log("nazdar");
                            }
                    }
            } else {
                return true;
            }






                // }
                // debugger;






                ret = true;
            }
            
            this.lastCurrentTime[instance] = this.that.audioObject.currentTime;
            return ret;
        }
    }
    
    timeMessageExecute(data) {
        var data;
        
        // css Modifier
        if (data.command.css !== undefined) {
            $(data.target).css(data.command.css);
            this.cssModifierActualCss[data.target] = {
                time: data.command.time,
                css: data.command.css
            }
        }

        // Lyrics
        if (data.command.lyrics !== undefined) {
            this.lyricsActualPhrase = {
                time: data.command.time,
                text: data.command.lyrics
            }
        }

        // SlideShow
        if (data.command.mediaName !== undefined) {
            this.slideshowActualImage = {
                time: data.command.time,
                mediaName: data.command.mediaName,
                src: data.command.src
            }
        }

        // Messages to console
        if (this.cfg.app.preferences.messagesOnTime.messagesToConsole) {
            console.log("[RPlayer::messagesOnTime]",data);
        }
    }
    
    startCssMessages() {
        var that = this;
        
        for (const [key, value] of Object.entries(this.cssMesages)) {
            this.startMessages(value);
        }

        $("body").on("click", function() {
            setTimeout(function() {
                for (const [key, value] of Object.entries(that.cssModifierActualCss)) {
                    $(key).css(value.css);
                }
            }, 500);
        });
    }
    
    async prepareCssMessageData() {
        var selectors = {};
        
        for (const [key, value] of Object.entries(this.cfg.cssTimeModifier.commandsInTime)) {
            if (selectors[value.selectorsKey] === undefined) {
                selectors[value.selectorsKey] = {};
                selectors[value.selectorsKey]["target"] = this.cfg.cssTimeModifier.selectors[value.selectorsKey];
                selectors[value.selectorsKey]["commands"] = {};
            }

            // entrance
            selectors[value.selectorsKey]["commands"][key] = {};
            selectors[value.selectorsKey]["commands"][key]["time"] = parseInt(key);
            if (this.cfg.cssTimeModifier.css[value.cssKey]) {
                selectors[value.selectorsKey]["commands"][key]["css"] = this.cfg.cssTimeModifier.css[value.cssKey].entrance;
            } else {
                selectors[value.selectorsKey]["commands"][key]["css"] = this.cfg.cssTimeModifier.css[this.cfg.cssTimeModifier.default.cssKey].entrance
            }

            // outgoing
            selectors[value.selectorsKey]["commands"][parseInt(key) + value.length] = {};
            if (value.length !== undefined) {
                selectors[value.selectorsKey]["commands"][parseInt(key) + value.length]["time"] = parseInt(parseInt(key) + value.length);
            } else {
                selectors[value.selectorsKey]["commands"][parseInt(key) + value.length]["time"] = parseInt(parseInt(key) + this.cfg.cssTimeModifier.default.length);
            }
            if (this.cfg.cssTimeModifier.css[value.cssKey]) {
                selectors[value.selectorsKey]["commands"][parseInt(key) + value.length]["css"] = this.cfg.cssTimeModifier.css[value.cssKey].outgoing;
            } else {
                selectors[value.selectorsKey]["commands"][parseInt(key) + value.length]["css"] = this.cfg.cssTimeModifier.css[this.cfg.cssTimeModifier.default.cssKey].outgoing;
            }

            // fix array keys
            var fixedKeysArray = {};
            var i = 0;
            for (const [key2, value2] of Object.entries(selectors[value.selectorsKey].commands)) {
                fixedKeysArray[i] = value2;
                i += 1;
            }
            selectors[value.selectorsKey].commands = fixedKeysArray;
        }
        this.cssMesages = selectors;
        return Promise.resolve(selectors);
    }

    refreshPlayerOnInitTimeout() {
        var that = this;
        setInterval(function() {
            if (
                $(that.rplayerCfg.conf.app.htmlSelectors.dimmer).css("display") !== "none" &&
                window.location == window.parent.location
            ) {
                console.log("[RPlayer]","Refresh...");
                window.location.href = "./" + that.rplayerCfg.conf.app.rplayerIndex;
            }
        },30000);
    }

    refreshAudioOnError() {
        var that = this;

        function onerrorFunction() {
            setTimeout(function() {
                if (!that.currentTimeOnError) {
                    that.currentTimeOnError = that.audioObject.currentTime;
                }

                that.audioObject.src = that.audioSrc;
                that.audioObject.currentTime = that.currentTimeOnError;
            },1000);
        }

        this.audioObject.onerror = onerrorFunction;
    }

    putLocalization() {
        var that    = this;

        setInterval(function() {
            if (!document.hidden) {

                var phrases      = $(".rplayerLocalText");
                var placeholders = $("*[placeholder]");
    
                $("html").attr("lang",that.rplayerCfg.conf.app.localization.lang);
                
                for (var obj of phrases) {
                    if ($(obj).html() != that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("data-phrase")] && that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("data-phrase")] !== undefined) {
                        if (!that.translated.includes($(obj).attr("data-phrase"))) {
                            console.log("[RPlayer]","Localization phrase [" + that.rplayerCfg.conf.app.localization.lang + "]: " + $(obj).attr("data-phrase") + " => " + that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("data-phrase")]);
                            $(obj).html(that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("data-phrase")]);
                            that.translated.push($(obj).attr("data-phrase"));
                        }
                    }
                }
        
                for (var obj of placeholders) {
                    if (that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("placeholder")] !== undefined) {
                        if (!that.translated.includes($(obj).attr("placeholder"))) {
                            console.log("[RPlayer]","Localization placeholder [" + that.rplayerCfg.conf.app.localization.lang + "]: " + $(obj).attr("placeholder") + " => " + that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("placeholder")]);
                            $(obj).attr("placeholder",that.rplayerCfg.conf.app.localization.phrases[$(obj).attr("placeholder")]);
                        }
                    }
                }
            }


            
        },50);
    }
    
    htmlToHeader() {
        $("head").append(this.rplayerCfg.conf.app.htmlToHeader);
        $("body").append(this.rplayerCfg.conf.app.htmlToBody);
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
            // console.log("[RPlayer] noScreenSleep()",`${err.name}, ${err.message}`);
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
            cfg.album.info.year + ") :: " +
            cfg.app.name + " v" +
            cfg.app.version + " (" +
            cfg.app.date + ")"
        );
    }
    
    putAlbumInfo() {
        var cfg = this.rplayerCfg.conf;
        $(cfg.app.htmlSelectors.info.albumComposer).html(cfg.album.info.composer);
        $(cfg.app.htmlSelectors.info.albumName).html(cfg.album.info.name);
        $(cfg.app.htmlSelectors.info.albumYear).html(cfg.album.info.year);
    }
    
    help() {
        var htmlSelector = this.rplayerCfg.conf.app.windows.showInfo.htmlSelector;

        var htmlOut = "<div class='infoWindow'><div style='text-align: right'><i class='window close icon' onclick='$(this).parent().parent().parent().css({display: \"none\"})'></i></div>";
        var lat = 0;
                
        htmlOut  += "<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyAyMDE4ICg2NCBiaXTFrykgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyMi40NzdtbSIgaGVpZ2h0PSIzNS4zNzE2bW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDQ3NjQuMTYgMTM3NS45Ig0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5zdHIwIHtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjIwLjU5O3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLnN0cjEge3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6OS43MjtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjU2fQ0KICAgIC5zdHIyIHtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjIwLjU5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLmZpbDAge2ZpbGw6bm9uZX0NCiAgICAuZmlsMiB7ZmlsbDojMjE4NUQwfQ0KICAgIC5maWwxIHtmaWxsOiNGOUY5Rjl9DQogICAgLmZpbDMge2ZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm99DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IlZyc3R2YV94MDAyMF8xIj4NCiAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4NCiAgPGcgaWQ9IktleWJvYXJkIj4NCiAgIDxwYXRoIGNsYXNzPSJmaWwwIHN0cjAiIGQ9Ik00NzUzLjg3IDEzMDcuNzFjMCwzMS45OCAtMjIuMzksNTcuODkgLTUwLjAxLDU3Ljg5bC00NjQzLjU1IDBjLTI3LjYyLDAgLTUwLjAyLC0yNS45MSAtNTAuMDIsLTU3Ljg5bDAgLTEyMzkuNTNjMCwtMzEuOTcgMjIuMzksLTU3Ljg5IDUwLjAyLC01Ny44OWw0NjQzLjU0IDBjMjcuNjMsMCA1MC4wMSwyNS45MSA1MC4wMSw1Ny44OWwwIDEyMzkuNTMgMC4wMSAweiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTQ0NTIuMDkgNTI2LjIzYzAsMTIuMDcgLTkuNzcsMjEuODUgLTIxLjg0LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODQsLTkuNzkgLTIxLjg0LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDkgOS43NywtMjEuODYgMjEuODQsLTIxLjg2bDE5MC42NiAwYzEyLjA3LDAgMjEuODQsOS43OCAyMS44NCwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik00NDUyLjA5IDI3Mi44NWMwLDEyLjA1IC05Ljc3LDIxLjg1IC0yMS44NCwyMS44NWwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg0LC05Ljc5IC0yMS44NCwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA4IDkuNzcsLTIxLjg2IDIxLjg0LC0yMS44NmwxOTAuNjYgMGMxMi4wNywwIDIxLjg0LDkuNzggMjEuODQsMjEuODZsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjUwMi44NiA3ODQuMDNjMCwxMi4wNyAtOS43OCwyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NyAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wNyA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY3IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTI0MzkuOTIgNTI3LjY1YzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjggMGMtMTIuMDcsMCAtMjEuODQsLTkuNzggLTIxLjg0LC0yMS44NWwwIC0xOTAuNjVjMCwtMTIuMDcgOS43OCwtMjEuODYgMjEuODQsLTIxLjg2bDE5MC42NyAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NXoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0yNTY3LjE4IDI3MS4zN2MwLDExLjk4IC05Ljc4LDIxLjcgLTIxLjg1LDIxLjdsLTE5MC42NSAwYy0xMi4wNywwIC0yMS44NiwtOS43MiAtMjEuODYsLTIxLjdsMCAtMTg5LjM0YzAsLTExLjk4IDkuNzksLTIxLjcgMjEuODYsLTIxLjdsMTkwLjY1IDBjMTIuMDcsMCAyMS44NSw5LjcyIDIxLjg1LDIxLjdsMCAxODkuMzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMTI0MC4wNyA3ODQuMDNjMCwxMi4wNyAtOS43OCwyMS44NSAtMjEuODQsMjEuODVsLTE5MC42NyAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wNyA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY3IDBjMTIuMDYsMCAyMS44NCw5Ljc4IDIxLjg0LDIxLjg1bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTExNzcuMTQgNTI3LjY1YzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjVjMCwtMTIuMDcgOS43OCwtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NiAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NXoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xMzA0LjQxIDI3MS4zN2MwLDExLjk4IC05Ljc5LDIxLjcgLTIxLjg2LDIxLjdsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43MiAtMjEuODUsLTIxLjdsMCAtMTg5LjM0YzAsLTExLjk4IDkuNzgsLTIxLjcgMjEuODUsLTIxLjdsMTkwLjY2IDBjMTIuMDcsMCAyMS44Niw5LjcyIDIxLjg2LDIxLjdsMCAxODkuMzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMTM2Ny4zMyAxMDM5LjgxYzAsMTIuMDYgLTkuNzksMjEuODQgLTIxLjg2LDIxLjg0bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjhjMCwtMTIuMDYgOS43OSwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA2LDAgMjEuODYsOS43OCAyMS44NiwyMS44NWwwIDE5MC42OHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0yNjMwLjEgMTAzOS44MWMwLDEyLjA2IC05Ljc4LDIxLjg0IC0yMS44NiwyMS44NGwtMTkwLjY1IDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY4YzAsLTEyLjA2IDkuNzksLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjUgMGMxMi4wNiwwIDIxLjg2LDkuNzggMjEuODYsMjEuODVsMCAxOTAuNjh6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNNDIwMC4wNyA1MjYuMjNjMCwxMi4wNyAtOS43OCwyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NSAwYy0xMi4wOCwwIC0yMS44NSwtOS43OSAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wOSA5Ljc3LC0yMS44NiAyMS44NSwtMjEuODZsMTkwLjY1IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg2bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTQyMDAuMDcgMjcyLjg1YzAsMTIuMDUgLTkuNzgsMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjUgMGMtMTIuMDgsMCAtMjEuODUsLTkuNzkgLTIxLjg1LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDggOS43NywtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NSAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xOTk3Ljc1IDc4NC4wM2MwLDEyLjA3IC05LjgsMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDcgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA2LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xNzQ1LjE5IDc4NC4wM2MwLDEyLjA3IC05Ljc5LDIxLjg1IC0yMS44NiwyMS44NWwtMTkwLjY2IDBjLTEyLjA2LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuNzgsLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNiwwIDIxLjg2LDkuNzggMjEuODYsMjEuODVsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMTQ5Mi42NCA3ODQuMDNjMCwxMi4wNyAtOS43OSwyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NyAwYy0xMi4wNiwwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wNyA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY2IDBjMTIuMDUsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTIyNTAuMjkgNzg0LjAzYzAsMTIuMDcgLTkuNzgsMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDcgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xOTM0LjggNTI3LjY1YzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjVjMCwtMTIuMDcgOS43OSwtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NiAwYzEyLjA2LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NXoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xNDI5LjcgNTI3LjY1YzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwtMCAtMTkwLjY1YzAsLTEyLjA3IDkuNzgsLTIxLjg2IDIxLjg1LC0yMS44NmwxOTAuNjYgMGMxMi4wNywwIDIxLjg1LDkuNzggMjEuODUsMjEuODZsMCAxOTAuNjV6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjE4Ny4zNSA1MjcuNjVjMCwxMi4wNyAtOS43OSwyMS44NSAtMjEuODYsMjEuODVsLTE5MC42NSAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NWMwLC0xMi4wNyA5Ljc4LC0yMS44NiAyMS44NSwtMjEuODZsMTkwLjY2IDBjMTIuMDcsMCAyMS44Niw5Ljc4IDIxLjg2LDIxLjg2bDAgMTkwLjY1eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTE4MDkuNTIgMjcxLjM3YzAsMTEuOTggLTkuNzksMjEuNyAtMjEuODYsMjEuN2wtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg2LC05LjcyIC0yMS44NiwtMjEuN2wwIC0xODkuMzRjMCwtMTEuOTggOS43OSwtMjEuNyAyMS44NiwtMjEuN2wxOTAuNjYgMGMxMi4wNywwIDIxLjg2LDkuNzIgMjEuODYsMjEuN2wwIDE4OS4zNHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xNTU2Ljk2IDI3MS4zN2MwLDExLjk4IC05Ljc4LDIxLjcgLTIxLjg1LDIxLjdsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43MiAtMjEuODUsLTIxLjdsMCAtMTg5LjM0YzAsLTExLjk4IDkuNzgsLTIxLjcgMjEuODUsLTIxLjdsMTkwLjY2IDBjMTIuMDYsMCAyMS44NSw5LjcyIDIxLjg1LDIxLjdsMCAxODkuMzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjMxNC42MyAyNzEuMzdjMCwxMS45OCAtOS43OSwyMS43IC0yMS44NiwyMS43bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzIgLTIxLjg1LC0yMS43bDAgLTE4OS4zNGMwLC0xMS45OCA5Ljc4LC0yMS43IDIxLjg1LC0yMS43bDE5MC42NiAwYzEyLjA3LDAgMjEuODYsOS43MiAyMS44NiwyMS43bDAgMTg5LjM0eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTIwNjIuMDcgMjcxLjM3YzAsMTEuOTggLTkuNzksMjEuNyAtMjEuODUsMjEuN2wtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg1LC05LjcyIC0yMS44NSwtMjEuN2wwIC0xODkuMzRjMCwtMTEuOTggOS43OSwtMjEuNyAyMS44NSwtMjEuN2wxOTAuNjYgMGMxMi4wNywwIDIxLjg1LDkuNzIgMjEuODUsMjEuN2wwIDE4OS4zNHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xODcyLjQzIDEwMzkuODFjMCwxMi4wNiAtOS43OCwyMS44NCAtMjEuODUsMjEuODRsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg0bDAgLTE5MC42OGMwLC0xMi4wNiA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY4eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTE2MTkuODggMTAzOS44MWMwLDEyLjA2IC05Ljc5LDIxLjg0IC0yMS44NSwyMS44NGwtMTkwLjY2IDBjLTEyLjA2LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY4YzAsLTEyLjA2IDkuNzgsLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNiwwIDIxLjg1LDkuNzggMjEuODUsMjEuODVsMCAxOTAuNjh6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjM3Ny41NCAxMDM5LjgxYzAsMTIuMDYgLTkuNzksMjEuODQgLTIxLjg1LDIxLjg0bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjhjMCwtMTIuMDYgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA2LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42OHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0yMTI0Ljk4IDEwMzkuODFjMCwxMi4wNiAtOS43OCwyMS44NCAtMjEuODUsMjEuODRsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg0bDAgLTE5MC42OGMwLC0xMi4wNiA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY4eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTQ3MDMuODMgNTI2LjIzYzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg2LDIxLjg1bC0xOTAuNjUgMGMtMTIuMDgsMCAtMjEuODUsLTkuNzkgLTIxLjg1LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDkgOS43NywtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NSAwYzEyLjA2LDAgMjEuODYsOS43OCAyMS44NiwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik00NzAzLjgzIDI3Mi44NWMwLDEyLjA1IC05Ljc5LDIxLjg1IC0yMS44NiwyMS44NWwtMTkwLjY1IDBjLTEyLjA4LDAgLTIxLjg1LC05Ljc5IC0yMS44NSwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA4IDkuNzcsLTIxLjg2IDIxLjg1LC0yMS44NmwxOTAuNjUgMGMxMi4wNiwwIDIxLjg2LDkuNzggMjEuODYsMjEuODZsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjY5Mi40NyA1MjcuNjVjMCwxMi4wNyAtOS43OCwyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NWMwLC0xMi4wNyA5Ljc4LC0yMS44NiAyMS44NSwtMjEuODZsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg2bDAgMTkwLjY1eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTI4MTkuNzQgMjcxLjM3YzAsMTEuOTggLTkuNzksMjEuNyAtMjEuODcsMjEuN2wtMTkwLjY1IDBjLTEyLjA3LDAgLTIxLjg1LC05LjcyIC0yMS44NSwtMjEuN2wwIC0xODkuMzRjMCwtMTEuOTggOS43OSwtMjEuNyAyMS44NSwtMjEuN2wxOTAuNjUgMGMxMi4wNywwIDIxLjg2LDkuNzIgMjEuODYsMjEuN2wwIDE4OS4zNHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik05MjQuNTggNTI3LjY1YzAsMTIuMDcgLTkuNzksMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjVjMCwtMTIuMDcgOS43OCwtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NiAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NXoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xMDUxLjg0IDI3MS4zN2MwLDExLjk4IC05Ljc4LDIxLjcgLTIxLjg1LDIxLjdsLTE5MC42NiAwYy0xMi4wNiwwIC0yMS44NSwtOS43MiAtMjEuODUsLTIxLjdsMCAtMTg5LjM0YzAsLTExLjk4IDkuNzgsLTIxLjcgMjEuODUsLTIxLjdsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5LjcyIDIxLjg1LDIxLjdsMCAxODkuMzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMTExNC43NyAxMDM5LjgxYzAsMTIuMDYgLTkuNzgsMjEuODQgLTIxLjg0LDIxLjg0bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjhjMCwtMTIuMDYgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA2LDAgMjEuODQsOS43OCAyMS44NCwyMS44NWwwIDE5MC42OHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0yODgyLjY1IDEwMzkuODFjMCwxMi4wNiAtOS43OCwyMS44NCAtMjEuODUsMjEuODRsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NiwtOS43OCAtMjEuODYsLTIxLjg0bDAgLTE5MC42OGMwLC0xMi4wNiA5Ljc4LC0yMS44NSAyMS44NiwtMjEuODVsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY4eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTc5OS4yOSAyNzEuMzdjMCwxMS45OCAtOS43OSwyMS43IC0yMS44NSwyMS43bC0xOTAuNjYgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzIgLTIxLjg1LC0yMS43bDAgLTE4OS4zNGMwLC0xMS45OCA5Ljc4LC0yMS43IDIxLjg1LC0yMS43bDE5MC42NiAwYzEyLjA2LDAgMjEuODUsOS43MiAyMS44NSwyMS43bDAgMTg5LjM0eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTMwMDcuOTUgNzg0LjAzYzAsMTIuMDcgLTkuNzgsMjEuODUgLTIxLjg1LDIxLjg1bC0xOTAuNjUgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NWwwIC0xOTAuNjZjMCwtMTIuMDcgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NSAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0zNTEzLjA3IDc4NC4wM2MwLDEyLjA3IC05Ljc3LDIxLjg1IC0yMS44MywyMS44NWwtMTkwLjY4IDBjLTEyLjA1LDAgLTIxLjg0LC05Ljc4IC0yMS44NCwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuNzksLTIxLjg1IDIxLjg0LC0yMS44NWwxOTAuNjggMGMxMi4wNiwwIDIxLjgzLDkuNzggMjEuODMsMjEuODVsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzI2MC41MiA3ODQuMDNjMCwxMi4wNyAtOS43NywyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NSAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wNyA5Ljc5LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY0IDBjMTIuMDgsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY2IDAuMDEgMHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0yOTQ1LjAyIDUyNy42NWMwLDEyLjA3IC05Ljc4LDIxLjg1IC0yMS44NCwyMS44NWwtMTkwLjY3IDBjLTEyLjA2LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY1YzAsLTEyLjA3IDkuNzksLTIxLjg2IDIxLjg0LC0yMS44NmwxOTAuNjcgMGMxMi4wNiwwIDIxLjg0LDkuNzggMjEuODQsMjEuODZsMCAxOTAuNjV6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzQ1MC4xNCA1MjcuNjVjMCwxMi4wNyAtOS44LDIxLjg1IC0yMS44NSwyMS44NWwtMTkwLjY1IDBjLTEyLjA4LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY1YzAsLTEyLjA3IDkuNzcsLTIxLjg2IDIxLjg1LC0yMS44NmwxOTAuNjUgMGMxMi4wNiwwIDIxLjg1LDkuNzggMjEuODUsMjEuODZsMCAxOTAuNjV6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzE5Ny41NyA1MjcuNjVjMCwxMi4wNyAtOS43NywyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43OCAtMjEuODUsLTIxLjg1bDAgLTE5MC42NWMwLC0xMi4wNyA5Ljc5LC0yMS44NiAyMS44NSwtMjEuODZsMTkwLjY2IDBjMTIuMDgsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg2bDAgMTkwLjY1eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTMzMjQuODMgMjcxLjM3YzAsMTEuOTggLTkuNzgsMjEuNyAtMjEuODMsMjEuN2wtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg1LC05LjcyIC0yMS44NSwtMjEuN2wwIC0xODkuMzRjMCwtMTEuOTggOS43NywtMjEuNyAyMS44NSwtMjEuN2wxOTAuNjYgMGMxMi4wNSwwIDIxLjgzLDkuNzIgMjEuODMsMjEuN2wwIDE4OS4zNHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0zMDcyLjI3IDI3MS4zN2MwLDExLjk4IC05Ljc2LDIxLjcgLTIxLjg0LDIxLjdsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NSwtOS43MiAtMjEuODUsLTIxLjdsMCAtMTg5LjM0YzAsLTExLjk4IDkuNzgsLTIxLjcgMjEuODUsLTIxLjdsMTkwLjY2IDBjMTIuMDgsMCAyMS44NCw5LjcyIDIxLjg0LDIxLjdsMCAxODkuMzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzc1NS4xMSAxMDQyLjEzYzAsMTIuMTkgLTEwLjIsMjIuMDkgLTIyLjgsMjIuMDlsLTU1Ni4wOSAwYy0xMi42MSwwIC0yMi44LC05LjkgLTIyLjgsLTIyLjA5bDAgLTE5Mi43NGMwLC0xMi4yMiAxMC4xOSwtMjIuMSAyMi44LC0yMi4xbDU1Ni4wOSAtMGMxMi42LDAgMjIuOCw5Ljg5IDIyLjgsMjIuMTFsMCAxOTIuNzR6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzc1MC42NCAyNzIuODZjMCwxMi4wNSAtOS43OSwyMS44NCAtMjEuODUsMjEuODRsLTM1Ni44MiAwYy0xMi4wNywwIC0yMS44NiwtOS43OCAtMjEuODYsLTIxLjg0bDAgLTE5MC42NmMwLC0xMi4wOCA5LjgsLTIxLjg2IDIxLjg2LC0yMS44NmwzNTYuODIgLTBjMTIuMDYsMCAyMS44NSw5Ljc5IDIxLjg1LDIxLjg2bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTMxMzUuMjEgMTAzOS44MWMwLDEyLjA2IC05Ljc5LDIxLjg0IC0yMS44NSwyMS44NGwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY4YzAsLTEyLjA2IDkuNzgsLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNywwIDIxLjg1LDkuNzggMjEuODUsMjEuODVsMCAxOTAuNjh6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNNzM0Ljk3IDc4NC4wM2MwLDEyLjA3IC05Ljc4LDIxLjg1IC0yMS44NiwyMS44NWwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg2LC05Ljc4IC0yMS44NiwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuNzgsLTIxLjg1IDIxLjg2LC0yMS44NWwxOTAuNjYgMGMxMi4wNiwwIDIxLjg2LDkuNzggMjEuODYsMjEuODVsLTAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTY3Mi4wNCA1MjcuNjVjMCwxMi4wNyAtOS43OSwyMS44NSAtMjEuODYsMjEuODVsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NiwtOS43OCAtMjEuODYsLTIxLjg1bDAgLTE5MC42NWMwLC0xMi4wNyA5Ljc4LC0yMS44NiAyMS44NiwtMjEuODZsMTkwLjY1IDBjMTIuMDYsMCAyMS44Niw5Ljc4IDIxLjg2LDIxLjg2bDAgMTkwLjY1IDAuMDEgMHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik01NDYuNzQgMjcxLjM3YzAsMTEuOTggLTkuNzksMjEuNyAtMjEuODUsMjEuN2wtMTkwLjY2IDBjLTEyLjA2LDAgLTIxLjg1LC05LjcyIC0yMS44NSwtMjEuN2wwIC0xODkuMzRjMCwtMTEuOTggOS43OCwtMjEuNyAyMS44NSwtMjEuN2wxOTAuNjYgMGMxMi4wNiwwIDIxLjg1LDkuNzIgMjEuODUsMjEuN2wwIDE4OS4zNCAtMC4wMSAweiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTI5NC40NCAyNzIuODRjMCwxMi4wNyAtOS43OCwyMS44NSAtMjEuODUsMjEuODVsLTE5MC42NiAwYy0xMi4wNiwwIC0yMS44NSwtOS43OSAtMjEuODUsLTIxLjg1bDAgLTE5MC42NmMwLC0xMi4wNiA5Ljc4LC0yMS44NSAyMS44NSwtMjEuODVsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc5IDIxLjg1LDIxLjg1bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTg2Mi4yMSAxMDM5LjgxYzAsMTIuMDYgLTkuNzksMjEuODQgLTIxLjg1LDIxLjg0bC0xOTAuNjYgMGMtMTIuMDYsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjhjMCwtMTIuMDYgOS43OCwtMjEuODUgMjEuODUsLTIxLjg1bDE5MC42NiAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42OHoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik02MDkuNjYgMTAzOS44MWMwLDEyLjA2IC05Ljc5LDIxLjg0IC0yMS44NSwyMS44NGwtMTkwLjY2IDBjLTEyLjA2LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY4YzAsLTEyLjA2IDkuNzksLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNiwwIDIxLjg1LDkuNzggMjEuODUsMjEuODVsMCAxOTAuNjh6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzU1LjczIDEwMzkuODFjMCwxMi4wNiAtOS43OSwyMS44NCAtMjEuODUsMjEuODRsLTI1MS45NiAwYy0xMi4wNiwwIC0yMS44NCwtOS43OCAtMjEuODQsLTIxLjg0bDAgLTE5MC42OGMwLC0xMi4wNiA5Ljc4LC0yMS44NSAyMS44NCwtMjEuODVsMjUxLjk3IDBjMTIuMDYsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg1bDAgMTkwLjY4IC0wLjAxIDB6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNNDE1LjQ0IDUyNy42NWMwLDEyLjA3IC05Ljc5LDIxLjg1IC0yMS44NiwyMS44NWwtMzExLjExIDBjLTEyLjA3LDAgLTIxLjg2LC05Ljc4IC0yMS44NiwtMjEuODVsMCAtMTkwLjY1YzAsLTEyLjA4IDkuNzgsLTIxLjg2IDIxLjg2LC0yMS44NmwzMTEuMTEgMGMxMi4wNiwwIDIxLjg2LDkuNzkgMjEuODYsMjEuODZsMCAxOTAuNjV6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNNDc0Ljk4IDc4NC4wM2MwLDEyLjA1IC05Ljg1LDIxLjg1IC0yMS45OSwyMS44NWwtMzcwLjkyIDBjLTEyLjE1LDAgLTIyLC05Ljc5IC0yMiwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuODUsLTIxLjg2IDIyLC0yMS44NmwzNzAuOTIgMGMxMi4xNCwwIDIxLjk5LDkuNzggMjEuOTksMjEuODZsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNNjY5LjQ1IDEyOTMuNzNjMCwxMi4wNyAtOS43OCwyMS44NCAtMjEuODUsMjEuODRsLTE5MC42NiAwYy0xMi4wOCwwIC0yMS44NiwtOS43OCAtMjEuODYsLTIxLjg0bDAgLTE5MC42NmMwLC0xMi4wOSA5Ljc4LC0yMS44NiAyMS44NiwtMjEuODZsMTkwLjY2IDBjMTIuMDcsMCAyMS44NSw5Ljc4IDIxLjg1LDIxLjg2bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDEgc3RyMSIgZD0iTTMyMDAuNjUgMTI5My43M2MwLDEyLjA3IC05Ljc4LDIxLjg0IC0yMS44MywyMS44NGwtMTkwLjY3IDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY2YzAsLTEyLjA5IDkuNzgsLTIxLjg2IDIxLjg1LC0yMS44NmwxOTAuNjcgMGMxMi4wNiwwIDIxLjgzLDkuNzggMjEuODMsMjEuODZsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMzQ1My4yMiAxMjkzLjczYzAsMTIuMDcgLTkuNzgsMjEuODQgLTIxLjg2LDIxLjg0bC0xOTAuNjUgMGMtMTIuMDYsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgOS43OSwtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NSAwYzEyLjA4LDAgMjEuODYsOS43OCAyMS44NiwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwxIHN0cjEiIGQ9Ik0xMDI4Ljg5IDEyOTMuNzNjMCwxMi4wNyAtOS44LDIxLjg0IC0yMS44NSwyMS44NGwtMjkzLjczIDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODRsMCAtMTkwLjY2YzAsLTEyLjA5IDkuNzgsLTIxLjg2IDIxLjg1LC0yMS44NmwyOTMuNzMgMGMxMi4wNiwwIDIxLjg1LDkuNzggMjEuODUsMjEuODZsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIxIiBkPSJNMjk0MS44OCAxMjkzLjcyYzAsMTIuMDcgLTkuNzgsMjEuODUgLTIxLjg1LDIxLjg1bC0zMDMuNDQgMGMtMTIuMDcsMCAtMjEuODYsLTkuNzkgLTIxLjg2LC0yMS44NWwwIC0xOTAuNjdjMCwtMTIuMDcgOS43OSwtMjEuODUgMjEuODYsLTIxLjg1bDMwMy40NCAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NWwwIDE5MC42N3oiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwyIHN0cjEiIGQ9Ik00NDUyLjA5IDEyOTMuNzNjMCwxMi4wNyAtOS43NywyMS44NCAtMjEuODQsMjEuODRsLTE5MC42NiAwYy0xMi4wNywwIC0yMS44NCwtOS43OCAtMjEuODQsLTIxLjg0bDAgLTE5MC42NmMwLC0xMi4wOSA5Ljc3LC0yMS44NiAyMS44NCwtMjEuODZsMTkwLjY2IDBjMTIuMDcsMCAyMS44NCw5Ljc4IDIxLjg0LDIxLjg2bDAgMTkwLjY2eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDIgc3RyMSIgZD0iTTQ0NTIuMDkgMTAzOS45N2MwLDEyLjA1IC05Ljc3LDIxLjg1IC0yMS44NCwyMS44NWwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg0LC05Ljc5IC0yMS44NCwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA5IDkuNzcsLTIxLjg4IDIxLjg0LC0yMS44OGwxOTAuNjYgMGMxMi4wNywwIDIxLjg0LDkuNzkgMjEuODQsMjEuODhsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMiBzdHIxIiBkPSJNNDIwMC4wNyAxMjkzLjczYzAsMTIuMDcgLTkuNzgsMjEuODQgLTIxLjg1LDIxLjg0bC0xOTAuNjUgMGMtMTIuMDgsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgOS43NywtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NSAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwyIHN0cjEiIGQ9Ik0xNjgyLjI1IDUyNy42NWMwLDEyLjA3IC05Ljc5LDIxLjg1IC0yMS44NiwyMS44NWwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY1YzAsLTEyLjA3IDkuNzksLTIxLjg2IDIxLjg1LC0yMS44NmwxOTAuNjYgMGMxMi4wNywwIDIxLjg2LDkuNzggMjEuODYsMjEuODZsMCAxOTAuNjV6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMiBzdHIxIiBkPSJNNDcwMy44MyAxMjkzLjczYzAsMTIuMDcgLTkuNzksMjEuODQgLTIxLjg2LDIxLjg0bC0xOTAuNjUgMGMtMTIuMDgsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgOS43NywtMjEuODYgMjEuODUsLTIxLjg2bDE5MC42NSAwYzEyLjA2LDAgMjEuODYsOS43OCAyMS44NiwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwyIHN0cjEiIGQ9Ik0yNzU1LjQxIDc4NC4wM2MwLDEyLjA3IC05Ljc5LDIxLjg1IC0yMS44NSwyMS44NWwtMTkwLjY2IDBjLTEyLjA2LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuNzksLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNywwIDIxLjg1LDkuNzggMjEuODUsMjEuODVsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMiBzdHIxIiBkPSJNOTg3LjUzIDc4NC4wM2MwLDEyLjA3IC05Ljc5LDIxLjg1IC0yMS44NiwyMS44NWwtMTkwLjY2IDBjLTEyLjA3LDAgLTIxLjg1LC05Ljc4IC0yMS44NSwtMjEuODVsMCAtMTkwLjY2YzAsLTEyLjA3IDkuNzksLTIxLjg1IDIxLjg1LC0yMS44NWwxOTAuNjYgMGMxMi4wNywwIDIxLjg2LDkuNzggMjEuODYsMjEuODVsMCAxOTAuNjZ6Ii8+DQogICA8cGF0aCBjbGFzcz0iZmlsMiBzdHIxIiBkPSJNMzc1NS4xMiAxMjkzLjczYzAsMTIuMDcgLTkuNzgsMjEuODQgLTIxLjg1LDIxLjg0bC0yMzUuOTQgMGMtMTIuMDcsMCAtMjEuODUsLTkuNzggLTIxLjg1LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgOS43OSwtMjEuODYgMjEuODUsLTIxLjg2bDIzNS45NCAwYzEyLjA3LDAgMjEuODUsOS43OCAyMS44NSwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwyIHN0cjEiIGQ9Ik0zNzMzLjI3IDMxNS4xNGwtMjQzLjA4IDBjLTEyLjA2LDAgLTIxLjg0LDEwLjE0IC0yMS44NCwyMi42N2wwIDE4OS44NGMwLDEyLjUyIDkuNzgsMjEuODUgMjEuODQsMjEuODVsNDEuMDkgMCAwIDIzMy43MmMwLDEyLjUxIDkuNzksMjIuNjUgMjEuODYsMjIuNjVsMTgwLjEzIC0wYzEyLjA3LDAgMjEuODUsLTEwLjE0IDIxLjg1LC0yMi42NWwwIC0yNDcuNjMgMCAtMTMuMDMgMCAtMTg0Ljc0YzAuMDEsLTEyLjUzIC05Ljc4LC0yMi42NyAtMjEuODUsLTIyLjY3eiIvPg0KICAgPHBhdGggY2xhc3M9ImZpbDIgc3RyMSIgZD0iTTQwNy40OSAxMjkzLjczYzAsMTIuMDcgLTkuNzksMjEuODQgLTIxLjg2LDIxLjg0bC0zMDMuNDQgMGMtMTIuMDcsMCAtMjEuODYsLTkuNzggLTIxLjg2LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgOS43OSwtMjEuODYgMjEuODYsLTIxLjg2bDMwMy40NCAwYzEyLjA2LDAgMjEuODYsOS43OCAyMS44NiwyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxwYXRoIGNsYXNzPSJmaWwyIHN0cjEiIGQ9Ik0yNTc2LjUzIDEyOTMuNzNjMCwxMi4wNyAtMTAuNDMsMjEuODQgLTIzLjMsMjEuODRsLTE0ODIuODUgMGMtMTIuODYsMCAtMjMuMjksLTkuNzggLTIzLjI5LC0yMS44NGwwIC0xOTAuNjZjMCwtMTIuMDkgMTAuNDMsLTIxLjg2IDIzLjI5LC0yMS44NmwxNDgyLjg1IDBjMTIuODcsMCAyMy4zLDkuNzggMjMuMywyMS44NmwwIDE5MC42NnoiLz4NCiAgIDxsaW5lIGNsYXNzPSJmaWwwIHN0cjIiIHgxPSIxMzM5LjIxIiB5MT0iNzYyIiB4Mj0iMTQxMC44MyIgeTI9ICI3NjIiIC8+DQogICA8bGluZSBjbGFzcz0iZmlsMCBzdHIyIiB4MT0iMjA5My45OSIgeTE9Ijc2MiIgeDI9IjIxNjUuNiIgeTI9ICI3NjIiIC8+DQogICA8ZyBpZD0iWm5ha3kiPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwzIiBkPSJNMzU1Ni43OCAxMjAwLjI1bDkuMTcgMS4wMmMtMC41OSw1LjQ5IC0yLjcyLDEwLjAyIC02LjM4LDEzLjU2IC0zLjY1LDMuNTYgLTguNDUsNS4zMyAtMTQuNDEsNS4zNCAtNS4wMSwtMC4wMiAtOS4wOSwtMS4yNiAtMTIuMiwtMy43OSAtMy4xMywtMi41MSAtNS41MywtNS45NCAtNy4yMiwtMTAuMjUgLTEuNjksLTQuMzEgLTIuNTIsLTkuMDcgLTIuNTIsLTE0LjI3IDAsLTguMzYgMS45OCwtMTUuMTYgNS45NCwtMjAuNDEgMy45NywtNS4yNCA5LjQzLC03Ljg3IDE2LjM2LC03Ljg3IDUuNDUsMCA5Ljk3LDEuNjggMTMuNiw1LjA0IDMuNjEsMy4zNSA1Ljg5LDguMTQgNi44MywxNC4zOGwtOS4xNyAwLjk4Yy0xLjY5LC04LjI5IC01LjQyLC0xMi40MiAtMTEuMTgsLTEyLjQyIC0zLjY5LDAgLTYuNTcsMS43MiAtOC42Miw1LjE2IC0yLjA0LDMuNDQgLTMuMDcsOC40NCAtMy4wNywxNC45NyAwLDYuNjYgMS4xLDExLjY3IDMuMjksMTUuMDYgMi4xOSwzLjM5IDUuMSw1LjA5IDguNzIsNS4wOSAyLjksMCA1LjM1LC0xLjE0IDcuNCwtMy40MiAyLjAzLC0yLjI4IDMuMTgsLTQuOTkgMy40NiwtOC4xNnoiLz4NCiAgICA8cG9seWdvbiBpZD0iMSIgY2xhc3M9ImZpbDMiIHBvaW50cz0iMzU5Mi45NywxMjE5LjMxIDM1ODIuMzYsMTIxOS4zMSAzNTgyLjM2LDExNzIuOTEgMzU2Ny43NiwxMTcyLjkxIDM1NjcuNzYsMTE2NC40MyAzNjA3LjU1LDExNjQuNDMgMzYwNy41NSwxMTcyLjkxIDM1OTIuOTcsMTE3Mi45MSAiLz4NCiAgICA8cGF0aCBpZD0iMiIgY2xhc3M9ImZpbDMiIGQ9Ik0zNjU2LjM3IDEyMTkuMzFsLTEwLjQ2IDAgLTguNTIgLTIyLjU2IC0xMy45MiAwIDAgMjIuNTYgLTkuODggMCAwIC01NC44OCAyMy44IDBjNi42MSwwIDExLjQ4LDEuNSAxNC41OSw0LjQ5IDMuMTEsMi45OCA0LjY2LDYuODUgNC42NiwxMS42IDAsNy4wNCAtMy4yOSwxMS45IC05LjksMTQuNTRsOS42MiAyNC4yNXptLTMyLjkgLTMwLjQ4bDEyLjMxIDBjMy41NSwwIDYuMjIsLTAuNzQgNy45NiwtMi4yNSAxLjc0LC0xLjQ5IDIuNjEsLTMuNTcgMi42MSwtNi4xOSAwLC0yLjQyIC0wLjg1LC00LjM2IC0yLjU3LC01Ljg1IC0xLjcxLC0xLjQ5IC00LjEyLC0yLjI0IC03LjIsLTIuMjRsLTEzLjEgMCAwIDE2LjUyeiIvPg0KICAgIDxwb2x5Z29uIGlkPSIzIiBjbGFzcz0iZmlsMyIgcG9pbnRzPSIzNzAwLjI1LDEyMTkuMzEgMzY2Ni40OSwxMjE5LjMxIDM2NjYuNDksMTE2NC40MyAzNjc2Ljg5LDExNjQuNDMgMzY3Ni44OSwxMjEwLjM0IDM3MDAuMjUsMTIxMC4zNCAiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTE3NS4zOSAxMjAwLjI1bDkuMTcgMS4wMmMtMC41OSw1LjQ5IC0yLjcyLDEwLjAyIC02LjM4LDEzLjU2IC0zLjY1LDMuNTYgLTguNDUsNS4zMyAtMTQuNDEsNS4zNCAtNS4wMSwtMC4wMiAtOS4wOSwtMS4yNiAtMTIuMiwtMy43OSAtMy4xMywtMi41MSAtNS41MywtNS45NCAtNy4yMiwtMTAuMjUgLTEuNjksLTQuMzEgLTIuNTIsLTkuMDcgLTIuNTIsLTE0LjI3IDAsLTguMzYgMS45OCwtMTUuMTYgNS45NCwtMjAuNDEgMy45NywtNS4yNCA5LjQzLC03Ljg3IDE2LjM2LC03Ljg3IDUuNDUsMCA5Ljk3LDEuNjggMTMuNiw1LjA0IDMuNjEsMy4zNSA1Ljg5LDguMTQgNi44MywxNC4zOGwtOS4xNyAwLjk4Yy0xLjY5LC04LjI5IC01LjQyLC0xMi40MiAtMTEuMTgsLTEyLjQyIC0zLjY5LDAgLTYuNTcsMS43MiAtOC42Miw1LjE2IC0yLjA0LDMuNDQgLTMuMDcsOC40NCAtMy4wNywxNC45NyAwLDYuNjYgMS4xLDExLjY3IDMuMjksMTUuMDYgMi4xOSwzLjM5IDUuMSw1LjA5IDguNzIsNS4wOSAyLjksMCA1LjM1LC0xLjE0IDcuNCwtMy40MiAyLjAzLC0yLjI4IDMuMTgsLTQuOTkgMy40NiwtOC4xNnoiLz4NCiAgICA8cG9seWdvbiBpZD0iMSIgY2xhc3M9ImZpbDMiIHBvaW50cz0iMjExLjU4LDEyMTkuMzEgMjAwLjk3LDEyMTkuMzEgMjAwLjk3LDExNzIuOTEgMTg2LjM3LDExNzIuOTEgMTg2LjM3LDExNjQuNDMgMjI2LjE2LDExNjQuNDMgMjI2LjE2LDExNzIuOTEgMjExLjU4LDExNzIuOTEgIi8+DQogICAgPHBhdGggaWQ9IjIiIGNsYXNzPSJmaWwzIiBkPSJNMjc0Ljk4IDEyMTkuMzFsLTEwLjQ2IDAgLTguNTIgLTIyLjU2IC0xMy45MiAwIDAgMjIuNTYgLTkuODggMCAwIC01NC44OCAyMy44IDBjNi42MSwwIDExLjQ4LDEuNSAxNC41OSw0LjQ5IDMuMTEsMi45OCA0LjY2LDYuODUgNC42NiwxMS42IDAsNy4wNCAtMy4yOSwxMS45IC05LjksMTQuNTRsOS42MiAyNC4yNXptLTMyLjkgLTMwLjQ4bDEyLjMxIDBjMy41NSwwIDYuMjIsLTAuNzQgNy45NiwtMi4yNSAxLjc0LC0xLjQ5IDIuNjEsLTMuNTcgMi42MSwtNi4xOSAwLC0yLjQyIC0wLjg1LC00LjM2IC0yLjU3LC01Ljg1IC0xLjcxLC0xLjQ5IC00LjEyLC0yLjI0IC03LjIsLTIuMjRsLTEzLjEgMCAwIDE2LjUyeiIvPg0KICAgIDxwb2x5Z29uIGlkPSIzIiBjbGFzcz0iZmlsMyIgcG9pbnRzPSIzMTguODYsMTIxOS4zMSAyODUuMSwxMjE5LjMxIDI4NS4xLDExNjQuNDMgMjk1LjUsMTE2NC40MyAyOTUuNSwxMjEwLjM0IDMxOC44NiwxMjEwLjM0ICIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwzIiBkPSJNMTY5NC4zMSAxMjA2LjA4bDkuNjEgLTIuMDRjMS4xNSw1LjQzIDUuNTcsOC4xNSAxMy4yNyw4LjE1IDMuNSwwIDYuMiwtMC42OCA4LjA5LC0yLjA4IDEuODksLTEuMzggMi44MywtMy4xMiAyLjgzLC01LjE5IDAsLTEuNDkgLTAuNDIsLTIuODggLTEuMjgsLTQuMTYgLTAuODYsLTEuMjggLTIuNywtMi4yOCAtNS41MiwtMi45OWwtMTAuNDggLTIuNzRjLTMuNiwtMC45MyAtNi4yNSwtMiAtNy45NiwtMy4xOSAtMS43MiwtMS4xOSAtMy4xLC0yLjg4IC00LjEzLC01LjA1IC0xLjAzLC0yLjE3IC0xLjU1LC00LjQ5IC0xLjU1LC02Ljk2IDAsLTQuOSAxLjgyLC04Ljg0IDUuNDgsLTExLjggMy42NSwtMi45NiA4LjMsLTQuNDUgMTMuOTgsLTQuNDUgNC43MiwwIDguOTMsMS4wNSAxMi42NSwzLjEgMy43MSwyLjA2IDYuMDgsNC45OCA3LjEsOC43N2wtOS40MSAyLjMzYy0xLjQ0LC00LjE2IC00LjgyLC02LjIzIC0xMC4xMywtNi4yMyAtMy4wOCwwIC01LjQzLDAuNjMgLTcuMDUsMS45MiAtMS42MiwxLjI5IC0yLjQzLDIuOTIgLTIuNDMsNC45MSAwLDMuMTMgMi41NCw1LjMzIDcuNjMsNi41OWw5LjMzIDIuMzNjNS42NSwxLjQxIDkuNDQsMy41MSAxMS4zOCw2LjI5IDEuOTMsMi43OSAyLjg5LDUuODUgMi44OSw5LjE5IDAsNS4zOCAtMi4wMyw5LjY0IC02LjA5LDEyLjcyIC00LjA2LDMuMSAtOS4zMiw0LjY0IC0xNS43OCw0LjY1IC01LjQzLC0wLjAyIC0xMC4yLC0xLjE2IC0xNC4yOSwtMy40MyAtNC4wOSwtMi4yOCAtNi44MSwtNS44MiAtOC4xNCwtMTAuNjV6Ii8+DQogICAgPHBhdGggaWQ9IjEiIGNsYXNzPSJmaWwzIiBkPSJNMTc1Ni45OCAxMjE5LjMxbC05Ljg4IDAgMCAtNTQuODggMjIuNDYgMGM2LjQxLDAgMTEuMTYsMS42MiAxNC4yNiw0Ljg1IDMuMDgsMy4yMiA0LjY0LDcuMDQgNC42NCwxMS40MyAwLDUuMDIgLTEuNjcsOS4wOSAtNS4wMiwxMi4xOSAtMy4zNSwzLjEyIC03LjYsNC42NiAtMTIuNzUsNC42NmwtMTMuNzEgMCAwIDIxLjc1em0wIC0zMC4yM2wxMS43MSAwYzMuMDUsMCA1LjM4LC0wLjc1IDYuOTgsLTIuMjUgMS42MiwtMS41MSAyLjQyLC0zLjUgMi40MiwtNiAwLC0yLjI1IC0wLjc0LC00LjE3IC0yLjIyLC01Ljc5IC0xLjUsLTEuNjEgLTQuMTksLTIuNCAtOC4wNywtMi40bC0xMC44MSAwIDAgMTYuNDR6Ii8+DQogICAgPHBhdGggaWQ9IjIiIGNsYXNzPSJmaWwzIiBkPSJNMTgzNS44NiAxMjE5LjMxbC0xMC41NiAwIC00LjM5IC0xMy4wNiAtMjEuMTEgMCAtNC4yOSAxMy4wNiAtOC40NCAwIDE4LjIxIC01NC44OCAxMi4xNyAwIDE4LjQxIDU0Ljg4em0tMTcuNjEgLTIwLjk4bC04IC0yNC40OSAtOCAyNC40OSAxNiAweiIvPg0KICAgIDxwYXRoIGlkPSIzIiBjbGFzcz0iZmlsMyIgZD0iTTE4NzEuMzIgMTIwMC4yNWw5LjE3IDEuMDJjLTAuNTksNS40OSAtMi43MiwxMC4wMiAtNi4zOCwxMy41NiAtMy42NSwzLjU2IC04LjQ1LDUuMzMgLTE0LjQxLDUuMzQgLTUuMDEsLTAuMDIgLTkuMDksLTEuMjYgLTEyLjIsLTMuNzkgLTMuMTMsLTIuNTEgLTUuNTMsLTUuOTQgLTcuMjIsLTEwLjI1IC0xLjY5LC00LjMxIC0yLjUyLC05LjA3IC0yLjUyLC0xNC4yNyAwLC04LjM2IDEuOTgsLTE1LjE2IDUuOTQsLTIwLjQxIDMuOTcsLTUuMjQgOS40MywtNy44NyAxNi4zNiwtNy44NyA1LjQ1LDAgOS45NywxLjY4IDEzLjYsNS4wNCAzLjYxLDMuMzUgNS44OSw4LjE0IDYuODMsMTQuMzhsLTkuMTcgMC45OGMtMS42OSwtOC4yOSAtNS40MiwtMTIuNDIgLTExLjE4LC0xMi40MiAtMy42OSwwIC02LjU3LDEuNzIgLTguNjIsNS4xNiAtMi4wNCwzLjQ0IC0zLjA3LDguNDQgLTMuMDcsMTQuOTcgMCw2LjY2IDEuMSwxMS42NyAzLjI5LDE1LjA2IDIuMTksMy4zOSA1LjEsNS4wOSA4LjcyLDUuMDkgMi45LDAgNS4zNSwtMS4xNCA3LjQsLTMuNDIgMi4wMywtMi4yOCAzLjE4LC00Ljk5IDMuNDYsLTguMTZ6Ii8+DQogICAgPHBvbHlnb24gaWQ9IjQiIGNsYXNzPSJmaWwzIiBwb2ludHM9IjE5MjMuOTksMTIxOS4zMSAxODg4LjM0LDEyMTkuMzEgMTg4OC4zNCwxMTY0LjQzIDE5MjMuNjMsMTE2NC40MyAxOTIzLjYzLDExNzIuNTkgMTg5OC4yMiwxMTcyLjU5IDE4OTguMjIsMTE4Ny40NyAxOTE4LjY0LDExODcuNDcgMTkxOC42NCwxMTk1LjQzIDE4OTguMjIsMTE5NS40MyAxODk4LjIyLDEyMTAuNzggMTkyMy45OSwxMjEwLjc4ICIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwzIiBkPSJNODQ0LjYyIDY5Ni4zOGw5LjYxIC0yLjA0YzEuMTUsNS40MyA1LjU3LDguMTUgMTMuMjcsOC4xNSAzLjUsMCA2LjIsLTAuNjggOC4wOSwtMi4wOCAxLjg5LC0xLjM4IDIuODMsLTMuMTIgMi44MywtNS4xOSAwLC0xLjQ5IC0wLjQyLC0yLjg4IC0xLjI4LC00LjE2IC0wLjg2LC0xLjI4IC0yLjcsLTIuMjggLTUuNTIsLTIuOTlsLTEwLjQ4IC0yLjc0Yy0zLjYsLTAuOTMgLTYuMjUsLTIgLTcuOTYsLTMuMTkgLTEuNzIsLTEuMTkgLTMuMSwtMi44OCAtNC4xMywtNS4wNSAtMS4wMywtMi4xNyAtMS41NSwtNC40OSAtMS41NSwtNi45NiAwLC00LjkgMS44MiwtOC44NCA1LjQ4LC0xMS44IDMuNjUsLTIuOTYgOC4zLC00LjQ1IDEzLjk4LC00LjQ1IDQuNzIsMCA4LjkzLDEuMDUgMTIuNjUsMy4xIDMuNzEsMi4wNiA2LjA4LDQuOTggNy4xLDguNzdsLTkuNDEgMi4zM2MtMS40NCwtNC4xNiAtNC44MiwtNi4yMyAtMTAuMTMsLTYuMjMgLTMuMDgsMCAtNS40MywwLjYzIC03LjA1LDEuOTIgLTEuNjIsMS4yOSAtMi40MywyLjkyIC0yLjQzLDQuOTEgMCwzLjEzIDIuNTQsNS4zMyA3LjYzLDYuNTlsOS4zMyAyLjMzYzUuNjUsMS40MSA5LjQ0LDMuNTEgMTEuMzgsNi4yOSAxLjkzLDIuNzkgMi44OSw1Ljg1IDIuODksOS4xOSAwLDUuMzggLTIuMDMsOS42NCAtNi4wOSwxMi43MiAtNC4wNiwzLjEgLTkuMzIsNC42NCAtMTUuNzgsNC42NSAtNS40MywtMC4wMiAtMTAuMiwtMS4xNiAtMTQuMjksLTMuNDMgLTQuMDksLTIuMjggLTYuODEsLTUuODIgLTguMTQsLTEwLjY1eiIvPg0KICAgIDxwb2x5Z29uIGNsYXNzPSJmaWwzIiBwb2ludHM9IjE1NjYuODEsNDUzLjI0IDE1NTYuMiw0NTMuMjQgMTU1Ni4yLDQwNi44NCAxNTQxLjYsNDA2Ljg0IDE1NDEuNiwzOTguMzYgMTU4MS4zOSwzOTguMzYgMTU4MS4zOSw0MDYuODQgMTU2Ni44MSw0MDYuODQgIi8+DQogICAgPHBvbHlnb24gY2xhc3M9ImZpbDMiIHBvaW50cz0iMjY1MS41NCw3MDkuNjEgMjYxNy43OCw3MDkuNjEgMjYxNy43OCw2NTQuNzMgMjYyOC4xOCw2NTQuNzMgMjYyOC4xOCw3MDAuNjUgMjY1MS41NCw3MDAuNjUgIi8+DQogICAgPHBvbHlnb24gY2xhc3M9ImZpbDMiIHBvaW50cz0iMzUzNS4wMiw0NTcuNjIgMzQ5OS4zNyw0NTcuNjIgMzQ5OS4zNyw0MDIuNzQgMzUzNC42Niw0MDIuNzQgMzUzNC42Niw0MTAuOTEgMzUwOS4yNSw0MTAuOTEgMzUwOS4yNSw0MjUuNzggMzUyOS42Nyw0MjUuNzggMzUyOS42Nyw0MzMuNzQgMzUwOS4yNSw0MzMuNzQgMzUwOS4yNSw0NDkuMSAzNTM1LjAyLDQ0OS4xICIvPg0KICAgIDxwYXRoIGlkPSIxIiBjbGFzcz0iZmlsMyIgZD0iTTM1ODUgNDU3LjYybC05LjYgMCAtMjAuODMgLTM1LjA2Yy0wLjMyLC0wLjUzIC0wLjg0LC0xLjQgLTEuNTcsLTIuNjEgLTAuMzMsLTAuNTMgLTAuODIsLTEuMzggLTEuNDgsLTIuNTRsMCA0MC4yMSAtNy45NiAwIDAgLTU0Ljg4IDEwLjkyIDAgMTkuMjMgMzIuMzJjMC4xNSwwLjI4IDEuMzIsMi4yNCAzLjUsNS45MmwwIC0zOC4yMyA3LjggMCAwIDU0Ljg4eiIvPg0KICAgIDxwb2x5Z29uIGlkPSIyIiBjbGFzcz0iZmlsMyIgcG9pbnRzPSIzNjE2LjIzLDQ1Ny42MiAzNjA1LjYyLDQ1Ny42MiAzNjA1LjYyLDQxMS4yMiAzNTkxLjAyLDQxMS4yMiAzNTkxLjAyLDQwMi43NCAzNjMwLjgyLDQwMi43NCAzNjMwLjgyLDQxMS4yMiAzNjE2LjIzLDQxMS4yMiAiLz4NCiAgICA8cG9seWdvbiBpZD0iMyIgY2xhc3M9ImZpbDMiIHBvaW50cz0iMzY3Mi41MSw0NTcuNjIgMzYzNi44Niw0NTcuNjIgMzYzNi44Niw0MDIuNzQgMzY3Mi4xNSw0MDIuNzQgMzY3Mi4xNSw0MTAuOTEgMzY0Ni43NCw0MTAuOTEgMzY0Ni43NCw0MjUuNzggMzY2Ny4xNiw0MjUuNzggMzY2Ny4xNiw0MzMuNzQgMzY0Ni43NCw0MzMuNzQgMzY0Ni43NCw0NDkuMSAzNjcyLjUxLDQ0OS4xICIvPg0KICAgIDxwYXRoIGlkPSI0IiBjbGFzcz0iZmlsMyIgZD0iTTM3MjMuODIgNDU3LjYybC0xMC40NiAwIC04LjUyIC0yMi41NiAtMTMuOTIgMCAwIDIyLjU2IC05Ljg4IDAgMCAtNTQuODggMjMuOCAwYzYuNjEsMCAxMS40OCwxLjUgMTQuNTksNC40OSAzLjExLDIuOTggNC42Niw2Ljg1IDQuNjYsMTEuNiAwLDcuMDQgLTMuMjksMTEuOSAtOS45LDE0LjU0bDkuNjIgMjQuMjV6bS0zMi45IC0zMC40OGwxMi4zMSAwYzMuNTUsMCA2LjIyLC0wLjc0IDcuOTYsLTIuMjUgMS43NCwtMS40OSAyLjYxLC0zLjU3IDIuNjEsLTYuMTkgMCwtMi40MiAtMC44NSwtNC4zNiAtMi41NywtNS44NSAtMS43MSwtMS40OSAtNC4xMiwtMi4yNCAtNy4yLC0yLjI0bC0xMy4xIDAgMCAxNi41MnoiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTQ1MzkuMSAxMTk5Ljg2bDQzLjk4IDAgMCA4IDQzLjk4IC0xNiAtNDMuOTggLTE1Ljk5IDAgNy45OSAtNDMuOTggMCAwIDE2em0yMS45OSAwbTIxLjk5IDRtMjEuOTkgLTRtMCAtMTZtLTIxLjk5IC0zLjk5bS0yMS45OSAzLjk5bS0yMS45OSA4Ii8+DQogICAgPHBhdGggY2xhc3M9ImZpbDMiIGQ9Ik00MTIzLjMgMTE4My44N2wtNDMuOTggMCAwIC04IC00My45OCAxNiA0My45OCAxNS45OSAwIC03Ljk5IDQzLjk4IDAgMCAtMTZ6bS0yMS45OSAwbS0yMS45OSAtNG0tMjEuOTkgNG0wIDE2bTIxLjk5IDMuOTltMjEuOTkgLTMuOTltMjEuOTkgLTgiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTQzMjMuMzUgMTE0Ny44OWwwIDQzLjk4IC04IDAgMTYgNDMuOTggMTUuOTkgLTQzLjk4IC03Ljk5IDAgMCAtNDMuOTggLTE2IDB6bTAgMjEuOTltLTQgMjEuOTltNCAyMS45OW0xNiAwbTMuOTkgLTIxLjk5bS0zLjk5IC0yMS45OW0tOCAtMjEuOTkiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMyIgZD0iTTQzMzkuMzUgOTgyLjA5bDAgLTQzLjk4IDggMCAtMTYgLTQzLjk4IC0xNS45OSA0My45OCA3Ljk5IDAgMCA0My45OCAxNiAwem0wIC0yMS45OW00IC0yMS45OW0tNCAtMjEuOTltLTE2IDBtLTMuOTkgMjEuOTltMy45OSAyMS45OW04IDIxLjk5Ii8+DQogICA8L2c+DQogIDwvZz4NCiA8L2c+DQo8L3N2Zz4NCg==' style='width: 100%; padding-top: .5em;'>" + 
                    "<div style='height: 50vh; overflow: auto; text-align: justify;'>" +
                        "<br>" +
                        "<span style='font-weight: bold; font-size: 1.2em' class='rplayerLocalText' data-phrase='helpThisIsRplayer'>This is RPlayer...</span>" +
                        "<table style='border-collapse: collapse; font-family: courier; margin-top: .5em; width: 100%; text-align: left;'>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeySpace'>[SPACE]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpPlayPause'>Play / Pause</span>" +
                                "</td>" +
                                "<td rowspan='4' style='border-left: 1px solid rgba(0,0,0,.1); text-align: center;'>" +
                                    "<img style='width: 4em;' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyAyMDE4ICg2NCBiaXTFrykgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjIxMG1tIiBoZWlnaHQ9IjIxMG1tIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCAyMTAwMCAyMTAwMCINCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogPGRlZnM+DQogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQogICA8IVtDREFUQVsNCiAgICAuc3RyMSB7c3Ryb2tlOiMyQjJBMjk7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLnN0cjAge3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI1Nn0NCiAgICAuZmlsMSB7ZmlsbDpibGFja30NCiAgICAuZmlsMiB7ZmlsbDojNDE4M0M0fQ0KICAgIC5maWwwIHtmaWxsOndoaXRlfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJWcnN0dmFfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxnIGlkPSJMb2dvX3gwMDIwX1JQbGF5ZXIiPg0KICAgPHJlY3QgY2xhc3M9ImZpbDAiIHdpZHRoPSIyMTAwMCIgaGVpZ2h0PSIyMTAwMCIgcng9IjI5NzMuOTYiIHJ5PSIyOTczLjk2Ii8+DQogICA8ZyBpZD0iTG9nb194MDAyMF9SUGxheWVyX3gwMDIwXzEiPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjQ1MC40OCAxMjEwMy43bDY3MC44MyAtMzg3LjMgNzg4MS4yOCAtNDU1MC4yNmMxNDkuNDYsLTg2LjI5IDIzNSwtMjM0LjQ1IDIzNSwtNDA3LjAzIDAsLTE3Mi41OCAtODUuNTQsLTMyMC43NCAtMjM1LC00MDcuMDNsLTg1NTIuMTEgLTQ5MzcuNTZjLTE0OS40NiwtODYuMjkgLTMyMC41NCwtODYuMjkgLTQ3MCwwIC0xNDkuNDUsODYuMjkgLTIzNSwyMzQuNDUgLTIzNSw0MDcuMDNsMCA5ODc1LjExYzAsMTcyLjU4IDg1LjU0LDMyMC43NSAyMzUsNDA3LjA0IDE0OS40Niw4Ni4yOCAzMjAuNTQsODYuMjkgNDcwLDB6bTY3MC44MyAtMjU3Ny4xOWwwIC01NTM0LjggMCAtODE0LjA2IDcwNC44MSA0MDYuOTIgMjM5Ni44MyAxMzgzLjgxIDMxMDEuNjMgMTc5MC43MyAtMzEwMS42MyAxNzkwLjczIC0yMzk2LjgzIDEzODMuODEgLTcwNC44MSA0MDYuOTIgMCAtODE0LjA2eiIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjIxNS40OCAxMjc4NS43N2w0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MHoiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIwIiBkPSJNOTg3Mi45NyAxOTI2OS45OGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MGw0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MHoiLz4NCiAgICA8cG9seWdvbiBjbGFzcz0iZmlsMiBzdHIxIiBwb2ludHM9IjcxMjEuMzEsMzk5MS43MSA3MTIxLjMxLDk1MjYuNTEgNzEyMS4zMSwxMDM0MC41NyA3ODI2LjEyLDk5MzMuNjUgMTAyMjIuOTUsODU0OS44NCAxMzMyNC41OCw2NzU5LjExIDEwMjIyLjk1LDQ5NjguMzggNzgyNi4xMiwzNTg0LjU3IDcxMjEuMzEsMzE3Ny42NSAiLz4NCiAgIDwvZz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K'>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyUp'>[UP]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpPreviousTrack'>Previous track / start current track</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyDown'>[DOWN]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpNextTrack'>Next track</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyLeft'>[LEFT]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpRewind'>Rewind</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyRight'>[RIGHT]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpForward'>Forward</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyCtrl'>[CTRL]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpSlideshow'>Slideshow mode</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyEnter'>[ENTER]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpFullscreen'>Fullscreen mode</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyS'>[S]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpStopAfterTrack'>Stop after track</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyL'>[L]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpLoopAll'>Loop all</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyT'>[T]</span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpLyrics'>Show / hide lyrics</span>" +
                                "</td>" +
                            "</tr>" +
                            "<tr style='border-bottom: 1px solid rgba(0,0,0,.1)'>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpKeyBluetooth'><i class='ui icon bluetooth'></i></span>" +
                                "</td>" +
                                "<td>" +
                                    "<span class='rplayerLocalText' data-phrase='helpBluetooth'>All standard bluetooth commands</span>" +
                                "</td>" +
                            "</tr>" +
                        "</table>" +
                        "<br>" +
                        this.rplayerCfg.conf.app.donations.html +
                        "<p>" + this.rplayerCfg.conf.app.donations.securityPhrase + "</p>" +
                        this.donations() +
                        "<br>" +
                        "<div>" +
                            this.license;
                        "</div>" +
                    "</div>";

        htmlOut += "</div>";

        $(htmlSelector).html(htmlOut);
        $(htmlSelector).css({
            opacity: "0",
            display: "block"
        });
        $(htmlSelector).animate({
            opacity: "1"
        },125);
    }

    donations() {
        var html = "<div class='ui centered grid' style=\"margin: 0; padding: 0;\"><div class='doubling three column row'>";
        var lat  = false;
        
        this.obj2array(this.rplayerCfg.conf.app.donations.wallets).forEach(element => {
            html += "<div class=\"column rplayerCard\">"

            var QrCod = new this.QrCode(0,'H');
            QrCod.addData(element[1].adress);
            QrCod.make();

            html += "<strong>" + element[1].ccurrency + "</strong><br>";
            html += "<img src=\"" + element[1].image + "\"></strong><br>";
            html += "<div class=\"rplayerCrQr\">" + QrCod.createSvgTag({}) + "</div><br>";
            html += "<input type='text' class=\"rplayerCrAdresses\" onClick='this.select();' value='" + element[1].adress + "' readonly='readonly'>";
            
            html += "</div>";
            
            lat = true;
        });
        html += "</div></div>";
        return html;
    }
    
    getURLAddress(onlyBase = false) {
        var link;
        
        link = window.location.href;

        if (link.includes("localhost")) {
            link = link.substring(
                link.indexOf("//") + 2,
                link.lastIndexOf("/")
            );
            link = this.rplayerCfg.conf.app.web3Protocol +
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

        if (onlyBase) {
            return link = link.replace('index.htm','');
        } else {
            return link = link.replace(this.rplayerCfg.conf.app.rplayerIndex,'');
        }
    }

    templateReplacer(string) {
        var string;

        string = string.replaceAll("{base_url}",this.getURLAddress(true));

        return string;
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
    
    getCurrentSlideshowImage() {
        try {
            var offset = (this.audioObject.currentTime * 1000) - this.slideshowActualImage.time; 
            if (offset >= 0) {
                return {
                    time: this.slideshowActualImage.time,
                    offset: offset,
                    src: this.slideshowActualImage.src,
                    mediaName: this.slideshowActualImage.mediaName
                }
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    getCurrentPhrase() {
        try {
            var offset = (this.audioObject.currentTime * 1000) - this.lyricsActualPhrase.time; 
            if (offset >= 0) {
                return {
                    time: this.lyricsActualPhrase.time,
                    offset: offset,
                    text: this.lyricsActualPhrase.text
                }
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
    
    lyricsPlay() {
        var that          = this;
        var lastWord      = false; // fix for online translation
        var lastTime      = false;
        this.lastCurTrack = false;
        
        this.wordsInterval = setInterval(function () {
            if (!document.hidden) {

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
                        that.getCurrentPhrase()["offset"] !== undefined
                        && that.getCurrentPhrase()["offset"] < that.rplayerCfg.conf.app.preferences.words.titleMaxTime
                    ) {
                        if ($(that.rplayerCfg.conf.app.htmlSelectors.controls.wordsButton + " .align").parent().hasClass("primary")) {
                            $(that.rplayerCfg.conf.app.htmlSelectors.mainWindow + ' .words').css({
                                display: "block"
                            });
                            
                            if (lastWord != that.removeHtml(that.getCurrentPhrase()["text"])) {
                                lastWord = that.removeHtml(that.getCurrentPhrase()["text"]);
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
                    opacity: 1 - (that.getCurrentPhrase()["offset"] / 10000)
                });
            }
        },15);
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
            
            if (that.lastActiveTrack != that.curTrackId) {
                that.tracklistScroll();
                that.lastActiveTrack = that.curTrackId;
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
                "</span></a>"
            );
        }

        $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).append(
            "<div></div>"
        );

        $(that.rplayerCfg.conf.app.htmlSelectors.info.playlistOneTrack).on("click",function() {
            var curTrackId = $(this).attr("id");

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

    tracklistScroll() {
        var track          = $(this.rplayerCfg.conf.app.htmlSelectors.mainWindow + " .rplayerActiveTrack");
        var trackMiddlePos = 
            track.offset().top - 
            $(this.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).parent().offset().top + 
            $(this.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).parent().scrollTop() +
            Math.round(track.outerHeight() / 2)
        ;
        var tracklistHalfHeight = Math.round($(this.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).parent().outerHeight() / 2);

        $(this.rplayerCfg.conf.app.htmlSelectors.info.playlistBox).parent().stop().animate({
            scrollTop: trackMiddlePos - tracklistHalfHeight
        },250);
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
        },17);
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

    }
    
    stopAllVideos() {
        $('video').each(function() {
            $(this).get(0).pause();
        });
    }
    
    transport() {

        if (this.transportLastAction == "rplayerStartPause") {
            if(this.audioObject.paused) {
                this.stopAllVideos();
                this.audioObject.play();
                this.playAfterCriticalStreamError = true;
            } else {
                this.audioObject.pause();
                this.playAfterCriticalStreamError = false;
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
            this.playAfterCriticalStreamError = false;
        }

        if (this.transportLastAction == "stepFW") {
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

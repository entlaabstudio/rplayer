/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

import ID3Writer from './../foreign/browser-id3-writer-master/src/ID3Writer.js';
export default class RPlayer {
    
    constructor(
        rplayerObj
    ) {
        this.rplayerObj    = rplayerObj;
        this.rplayerCfg    = rplayerObj.rplayerCfg.conf;
   
        this.download      = {};
        this.download.mp3  = [];
        this.downloadIndex = 0;
        
        this.init();

        console.log("[RPlayer]","Downloads module loaded.");
    }

    init() {
        var that = this;

        // Loader
        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                that.buttons();
                that.checkForm();
                that.tracks();
                clearInterval(int);
            }
        },362);
    }

    checkForm() {
        var that = this;
        
        $("#rplayerDownloads form:first-child").on("submit",function() {
            return false;
        });
        $("#rplayerDownloads form:first-child").on("change",function() {
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if ($("#" + value.checkboxId).is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }
        });
    }

    tracks() {
        var numOfDigits = this.numberGetDigits(Object.keys(this.rplayerCfg.album.tracks).length);

        for (const [key, value] of Object.entries(this.rplayerCfg.album.tracks)) {
            if (value.downloads.mp3) {
                var fileName = this.numberZeroFill((parseInt(key) + 1), numOfDigits) + " - " + value.mediaName + ".mp3";
                var trackNumber = parseInt(key) + 1;
                var checkboxId = "rplayerCheckboxDownloadMp3_" + key;
                $("#rplayerDownloads .rplayerDownloadsTracks").append(
                    "<div class=\"ui toggle checkbox\">" +
                        "<input type=\"checkbox\" checked=\"checked\" id=\"" + checkboxId + "\"><label for=\"" + checkboxId + "\">" + fileName + "</label>" +
                    "</div>"
                );
                var genres = [];
                var commentText = 
                    'RPlayer address where this file was generated: \n' +
                    this.rplayerObj.getURLAddress();
                var i = 0;
                for (const [key, value2] of Object.entries(value.info.genres)) {
                    genres[i] = value2;
                    i++;
                }
                this.download.mp3[key] = {
                    mediaName: value.mediaName,
                    trackNumber: trackNumber + "/" + Object.keys(this.rplayerCfg.album.tracks).length,
                    composer: [value.info.composer],
                    genres: genres,
                    label: value.info.label,
                    copyright: value.info.copyright,
                    lang: value.info.lang,
                    fileName: fileName,
                    download: true,
                    srcFile: value.downloads.mp3,
                    srcImgFile: value.info.image,
                    checkboxId: checkboxId,
                    comment: {
                        description: '',
                        text: commentText,
                    },
                    bpm: value.info.bpm,
                };
            }
        }
    }

    numberGetDigits(number) {
        return number.toString().length;
    }

    numberZeroFill(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    buttons() {
        var that = this;

        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .icon.download").on("click",function() {
            $("#rplayerDownloads").css({
                display: "block"
            });
            $("#rplayerDownloads").stop().animate({
                opacity: "1"
            },250);
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

        $("#rplayerDownloads .button.rplayerDownloadSubmit").on("click",function() {
            that.downloadAction();
        });
    }

    downloadAction() {
        $("#rplayerDownloads .button.rplayerDownloadSubmit").addClass("loading disabled");
        this.getMp3Files();
        this.getMp3ImagesFiles();
        this.checkDataAndContinue();
    }

    getMp3Files() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3FileData(value);
        }
    }

    checkDataAndContinue() {
        var that = this;

        setTimeout(function() {
            var countOfFiles           = that.download.mp3.length - that.numberOfUnwantedFiles();
            var countOfDownloadedFiles = 0;
    
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if (value.data !== undefined && value.imgData !== undefined) {
                    countOfDownloadedFiles += 1;
                }
            }

            if (parseInt(countOfDownloadedFiles) != parseInt(countOfFiles)) {
                that.checkDataAndContinue();
            } else {
                that.zipData();
            }
        },3000);
    }

    
    
    
    
    
    getMp3ImagesFiles() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3ImgFileData(value);
        }
    }

    getMp3ImgFileData(value) {
        var value;
        var that = this;

        if (!value.imgData && value.download == true) {
            console.log("[RPlayer]","Getting the image data for the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcImgFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3ImgFileData(value);
                        console.log("[RPlayer]","I'm trying to get the image data for the \"" + value.fileName + "\" file again.");
                    },
                    success: function(data) {
                        // value.data = new Uint8Array;
                        value.imgData = data;
                        console.log("[RPlayer]","I got the image data for the \"" + value.fileName + "\" file.");
                    }
                });
            },3000);
        }
    }

    
    
    
    
    
    numberOfUnwantedFiles() {
        var numOfUnwanteds = 0;
        
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.download == false) {
                numOfUnwanteds += 1;
                delete value.data;
            }
        }

        return numOfUnwanteds;
    }

    zipData() {
        var zip = new JSZip();
        
        console.log("[RPlayer]","Adding data to ZIP archive.");
        var baseFolderName = this.rplayerCfg.album.info.composer + " - " + this.rplayerCfg.album.info.year + " - " + this.rplayerCfg.album.info.name;
        
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.data) {
                zip.folder(baseFolderName).file(value.fileName,this.putID3(value));
            }
        }

        zip.generateAsync({type:"blob"}).then(function (blob) {
            saveAs(blob, baseFolderName + ".zip");
            $("#rplayerDownloads .button.rplayerDownloadSubmit").removeClass("loading disabled");
        });
    }

    putID3(song) {
        console.log(song);
        var song;
        const writer = new ID3Writer(song.data);
        writer
            .setFrame('TRCK', song.trackNumber)
            .setFrame('COMM', song.comment)
            .setFrame('TIT2', song.mediaName)
            .setFrame('TPE1', [this.rplayerCfg.album.info.composer])
            .setFrame('TALB', this.rplayerCfg.album.info.name)
            .setFrame('TPE2', this.rplayerCfg.album.info.composer)
            .setFrame('TCON', song.genres)
            .setFrame('TPUB', song.label)
            .setFrame('TCOP', song.copyright)
            .setFrame('TLAN', song.lang)
            .setFrame('TBPM', song.bpm)
            .setFrame('TYER', this.rplayerCfg.album.info.year)
            .setFrame('APIC', {
                type: 3,
                data: song.imgData,
                description: 'Super picture'
            });
        writer.addTag();
        return writer.arrayBuffer;
    }

    getMp3FileData(value) {
        var value;
        var that = this;

        if (!value.data && value.download == true) {
            console.log("[RPlayer]","Getting the data of the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3FileData(value);
                        console.log("[RPlayer]","I'm trying to get the data for the file \"" + value.fileName + "\" again.");
                    },
                    success: function(data) {
                        // value.data = new Uint8Array;
                        value.data = data;
                        console.log("[RPlayer]","I got the data for the file \"" + value.fileName + "\".");
                    }
                });
            },3000);
        }
    }
}

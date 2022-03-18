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
            console.log("změna");
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if ($("#" + value.checkboxId).is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }
            console.log(that.download.mp3);
        });
    }

    tracks() {
        var numOfDigits = this.numberGetDigits(Object.keys(this.rplayerCfg.album.tracks).length);

        for (const [key, value] of Object.entries(this.rplayerCfg.album.tracks)) {
            if (value.downloads.mp3) {
                var fileName = this.numberZeroFill((parseInt(key) + 1), numOfDigits) + " - " + value.mediaName + ".mp3";
                var checkboxId = "rplayerCheckboxDownloadMp3_" + key;
                $("#rplayerDownloads .rplayerDownloadsTracks").append(
                    "<div class=\"ui toggle checkbox\">" +
                        "<input type=\"checkbox\" checked=\"checked\" id=\"" + checkboxId + "\"><label for=\"" + checkboxId + "\">" + fileName + "</label>" +
                    "</div>"
                );
                this.download.mp3[key] = {
                    mediaName: value.mediaName,
                    fileName: fileName,
                    download: true,
                    srcFile: value.downloads.mp3,
                    checkboxId: checkboxId,
                };
            }
        }
        console.log(this.download);
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
        this.getMp3Files();
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
                if (value.data !== undefined) {
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

    numberOfUnwantedFiles() {
        var numOfUnwanteds = 0;
        
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.download == false) {
                numOfUnwanteds += 1;
                delete value.data;
            }
        }

        console.log(numOfUnwanteds);
        return numOfUnwanteds;
    }

    zipData() {
        console.log("ahoj");
    }

    getMp3FileData(value) {
        var value;
        var that = this;

        if (!value.data && value.download == true) {
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcFile,
                    xhrFields:{
                        responseType: 'blob'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3FileData(value);
                        console.log("[RPlayer]","I'm trying to get the data for the file \"" + value.fileName + "\" again. Do not panic. In the end, it will work. This is Web3.");
                    },
                    success: function(data) {
                        value.data = new Uint8Array;
                        value.data = data;
                        console.log("[RPlayer]","I got the data for the file \"" + value.fileName + "\".");
                    }
                });
            },3000);
        }
    }
}

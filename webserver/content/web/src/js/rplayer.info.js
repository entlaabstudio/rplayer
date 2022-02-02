/**
 * @file
 * Visual component for web application rplayer.js.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

 export default class RPlayerInfo {
    constructor(rplayerObj) {
        this.rplayerObj = rplayerObj;

        this.selector     = $("#rplayerInfo");
        this.activePanel1 = $("#rplayerInfoActive div:first-child");
        this.activePanel2 = $("#rplayerInfoActive div:first-child ~ div");
        this.tempPanel1   = $("#rplayerInfoTemp div:first-child");
        this.tempPanel2   = $("#rplayerInfoTemp div:first-child ~ div");

        this.snapToTrack  = false;

        this.lastImageWidth = 0;
        this.init();

        console.log("[RPlayer]","Info module loaded.")
    }

    init() {
        var that = this;

        // Loader
        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                console.log("[RPlayer]","Tracklist loaded.");
                that.buttons();
                that.htmlCreate();
                clearInterval(int);
            }
        },359);

        this.ticker();

        // console.log("Objekt RPlayeru",this.rplayerObj);
    }   
    
    checkH1() {
        var minOpacity = "0.5"
        if (
            $("#rplayerInfo h1:first-child").css("opacity") == minOpacity ||
            $("#rplayerInfo h1:first-child").css("opacity") == "1" 
        ) {
            if (
                $("#rplayerInfo #rplayerInfoTemp").scrollTop() != 0 ||
                $("#rplayerInfo #rplayerInfoTemp div:first-child").scrollTop() != 0
            ) {
                $("#rplayerInfo h1:first-child").stop().animate({
                    opacity: minOpacity
                },2000);
            } else {
                $("#rplayerInfo h1:first-child").stop().css({
                    opacity: "1"
                });
            }
        }
        
    }

    transport() {
        var transportPosLeft = $("#rplayerInfo .transportFake").position().left;
        
        try {
            if (
                ($("#rplayerInfo h1:first-child").position().left + $("#rplayerInfo h1:first-child").width()) > parseInt(transportPosLeft)
            ) {
                
                $("#rplayerInfo .transport").css({
                    writingMode: "vertical-lr"
                });
                
                $("#rplayerInfo .mediaImage").css({
                    width: "calc(" + ($("#rplayerInfo .transport.icons").position().left - $("#rplayerInfo .mediaImage").position().left + "px - .5em)")
                });

                
            } else {
                $("#rplayerInfo .transport").css({
                    writingMode: "unset"
                });
                $("#rplayerInfo .mediaImage").css({
                    width: "100%"
                });
            }            
        } catch (error) {
            
        }

    }
    
    htmlCreate() {
        var that = this;
        var html_1;
        var html_2;
        var htmlWords;
        var html_1_last = false;
        var html_2_last = false;
        setInterval(function() {
            html_1  = that.htmlHeader();
            html_1 += that.htmlMediaImage();
            html_1 += that.htmlAlbumInfo();

            html_2     = that.htmlStory();
            htmlWords  = that.htmlWords();

            if (htmlWords != "...") {
                html_2 += "<h3>Lyrics</h3>"
                html_2 += htmlWords;
            }

            // HTML out
            if (html_1 != html_1_last) {
                that.tempPanel1.html(html_1);
                html_1_last = html_1;
            }

            if (html_2 != html_2_last) {
                that.tempPanel2.html(html_2);
                html_2_last = html_2;
            }
        },123);
    }

    htmlAlbumInfo() {
        var html;
        var cfg = this.rplayerObj.rplayerCfg.conf;

        html = 
        "<table class=\"rplayerAlbumInfo\">" +
            "<tbody>" +
                "<tr>" +
                    "<th>" +
                        "Album name:" +
                    "</th>" +
                    "<td>" +
                        "<strong>" + cfg.album.info.name + "</strong>" +
                    "</td>" +
                "</tr>" +
                "<tr>" +
                    "<th>" +
                        "Album year:" +
                    "</th>" +
                    "<td>" +
                        "<strong>" + cfg.album.info.year + "</strong>" +
                    "</td>" +
                "</tr>" +
                "<tr>" +
                    "<th>" +
                        "Album composer:" +
                    "</th>" +
                    "<td>" +
                        "<strong>" + cfg.album.info.composer + "</strong>" +
                    "</td>" +
                "</tr>" +
            "</tbody>" +
        "</table>" +
        cfg.album.info.anyHtml

        return html;
    }

    htmlMediaImage() {
        var html;
        
        try {
            html  = "<img src=\"";
            html += this.rplayerObj.rplayerCfg.conf
                    .album.tracks[this.rplayerObj.trackInfoSelected]
                    .info.image;
            html += "\" style=\"width: " + this.lastImageWidth + "px\" class=\"mediaImage\">";
        } catch (error) {
            html = "";
        }

        return html;
    }
    
    htmlWords() {
        var html = "";
        
        try {
            var songInfoHtml = this
                .rplayerObj.rplayerCfg.conf.album
                .tracks[this.rplayerObj.trackInfoSelected]
                .words;
            html = "<p>";
            this.rplayerObj.obj2array(songInfoHtml).forEach(element => {
                html += element[1] + "<br>";
            });
            html += "</p>";
        } catch (error) {
            html  = "...";
        }
        
        return html;
    }
    
    htmlHeader() {
        var html;
        var cfg = this.rplayerObj.rplayerCfg.conf;
        
        try {
            html  = "<h1>";
            html += cfg
                    .album.tracks[this.rplayerObj.trackInfoSelected]
                    .mediaName;
            html += "</h1>";
        } catch (error) {
            html  = "<h1>";
            html += "...";
            html += "</h1>";
        }
        
        return html;
    }

    htmlStory() {
        var html = "";
        
        try {
            var songInfoHtml = this
                .rplayerObj.rplayerCfg.conf.album
                .tracks[this.rplayerObj.trackInfoSelected]
                .info
                .anyHtml;
            this.rplayerObj.obj2array(songInfoHtml).forEach(element => {
                html += "<h3>" + element[1].id + "</h3>";
                html += "<p>" + element[1].html + "</p>";
            });
        } catch (error) {
            html  = "<p>";
            html += "..." + error.message;
            html += "</p>";
        }
        
        return html;
    }

    htmlLyrics() {
        var html = "";
        
        try {
            var songInfoHtml = this
                .rplayerObj.rplayerCfg.conf.album
                .tracks[this.rplayerObj.trackInfoSelected]
                .info
                .anyHtml;
            this.rplayerObj.obj2array(songInfoHtml).forEach(element => {
                html += "<h3>" + element[1].id + "</h3>";
                html += "<p>" + element[1].html + "</p>";
            });
        } catch (error) {
            html  = "<p>";
            html += "..." + error.message;
            html += "</p>";
        }
        
        return html;
    }





    
    buttons() {
        var that = this;
        $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerStartPause\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerRW']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerRW\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerFW']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerFW\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerStop']").on("click", function() {
            $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow + " " + that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.info.transport + "[data-command=\"rplayerStop\"]").click();
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").on("click", function() {
            if (that.snapToTrack) {
                that.snapToTrack = false;
            } else {
                that.snapToTrack = true;
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoClose']").on("click", function() {
            if (that.selector.css("opacity") == "1") {
                that.snapToTrack  = false;
                that.selector.stop().animate({
                    opacity: "0"
                },750,function() {
                    that.selector.css({
                        display: "none"
                    });
                });
                $("body").css({
                    overflow: "auto"
                });
            } else {
                $("body").css({
                    overflow: "hidden"
                });
                that.selector.css({
                    display: "block"
                });
                $(document).scrollTop(0);
                that.selector.stop().animate({
                    opacity: "1"
                },250);
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoFW']").on("click", function() {
            that.lastImageWidth = $("#rplayerInfo .mediaImage").width();
            var cfg = that.rplayerObj.rplayerCfg.conf;

            if (that.rplayerObj.trackInfoSelected < (that.rplayerObj.obj2array(cfg.album.tracks).length - 1)) {
                that.rplayerObj.trackInfoSelected += 1;
            } else {
                that.rplayerObj.trackInfoSelected = 0;
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoRW']").on("click", function() {
            that.lastImageWidth = $("#rplayerInfo .mediaImage").width();
            var cfg = that.rplayerObj.rplayerCfg.conf;

            if (that.rplayerObj.trackInfoSelected > 0) {
                that.rplayerObj.trackInfoSelected -= 1;
            } else {
                that.rplayerObj.trackInfoSelected = (that.rplayerObj.obj2array(cfg.album.tracks).length - 1);
            }
        });

        // $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.controls.trackInfoButton).on("click", function() {
        $(".trackInfoButton").on("click", function() {
            console.log(that.rplayerObj.rplayerCfg.conf,that.rplayerObj);
            $("#rplayerInfo .transport .icon[data-command='rplayerInfoClose']").click();
        });
    }
    
    ticker() {
        var that = this;
        this.ticker = setInterval(function() {
            that.transportInteractiveIcons();
            that.setInfoForSelectedTrack();
            that.transport();
            that.checkH1();
        },97);
    }

    setInfoForSelectedTrack() {
        if (!$("#rplayerInfo .transport .lock").hasClass("open")) {
            this.rplayerObj.trackInfoSelected = this.rplayerObj.curTrackId;
            $("#rplayerInfo .transport .arrow, #rplayerInfo .transportFake .arrow").css({
                display: "none"
            })
        } else {
            $("#rplayerInfo .transport .arrow, #rplayerInfo .transportFake .arrow").css({
                display: "flex"
            })
        }
    }

    transportInteractiveIcons() {
        if (this.rplayerObj.audioObject.paused) {
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").removeClass("pause");
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").addClass("play");
        } else {
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").removeClass("play");
            $("#rplayerInfo .transport .icon[data-command='rplayerStartPause']").addClass("pause");
        }

        if (this.snapToTrack) {
            $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").removeClass("open");
        } else {
            $("#rplayerInfo .transport .icon[data-command='rplayerSnapInfoToTrack']").addClass("open");
        }
    }
 }
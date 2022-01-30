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

        console.log("Objekt RPlayeru",this.rplayerObj);
    }

    
    
    
    
    
    htmlCreate() {
        var that = this;
        var html_1;
        var html_2;
        var htmlWords;
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
            if (html_1 != that.tempPanel1.html()) {
                that.tempPanel1.html(html_1);
            }

            if (html_2 != that.tempPanel2.html()) {
                that.tempPanel2.html(html_2);
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
                    "<td>" +
                        "Album name:" +
                    "</td>" +
                    "<td>" +
                        "<strong>" + cfg.album.info.name + "</strong>" +
                    "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>" +
                        "Album year:" +
                    "</td>" +
                    "<td>" +
                        "<strong>" + cfg.album.info.year + "</strong>" +
                    "</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>" +
                        "Album composer:" +
                    "</td>" +
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
            html += "\" class=\"mediaImage\">";
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
            this.rplayerObj.obj2array(songInfoHtml).forEach(element => {
                html += element[1] + "<br>";
            });
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
                that.selector.stop().animate({
                    opacity: "0"
                },750,function() {
                    that.selector.css({
                        display: "none"
                    });
                });
            } else {
                that.selector.css({
                    display: "block"
                });
                that.selector.stop().animate({
                    opacity: "1"
                },250);
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoFW']").on("click", function() {
            var cfg = that.rplayerObj.rplayerCfg.conf;
            
            // console.log(
            //     that.rplayerObj.trackInfoSelected,
            //     cfg.album.tracks,
            //     that.rplayerObj.obj2array(cfg.album.tracks).length
            // );

            if (that.rplayerObj.trackInfoSelected < (that.rplayerObj.obj2array(cfg.album.tracks).length - 1)) {
                that.rplayerObj.trackInfoSelected += 1;
            } else {
                that.rplayerObj.trackInfoSelected = 0;
            }
        });

        $("#rplayerInfo .transport .icon[data-command='rplayerInfoRW']").on("click", function() {
            var cfg = that.rplayerObj.rplayerCfg.conf;

            if (that.rplayerObj.trackInfoSelected > 0) {
                that.rplayerObj.trackInfoSelected -= 1;
            } else {
                that.rplayerObj.trackInfoSelected = (that.rplayerObj.obj2array(cfg.album.tracks).length - 1);
            }
        });

        // $(that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.controls.trackInfoButton).on("click", function() {
        $(".trackInfoButton").on("click", function() {
            $("#rplayerInfo .transport .icon[data-command='rplayerInfoClose']").click();
        });
    }
    
    ticker() {
        var that = this;
        this.ticker = setInterval(function() {
            that.transportInteractiveIcons();
            that.setInfoForSelectedTrack();
        },97);
    }

    setInfoForSelectedTrack() {
        if (!$("#rplayerInfo .transport .lock").hasClass("open")) {
            this.rplayerObj.trackInfoSelected = this.rplayerObj.curTrackId;
            $("#rplayerInfo .transport .arrow").css({
                display: "none"
            })
        } else {
            $("#rplayerInfo .transport .arrow").css({
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
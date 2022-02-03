/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

class RPlayerAPI {
    constructor(
        RPlayer,
        RPlayerCfg
    ) {
        
        this.RPlayer    = RPlayer;
        this.config     = RPlayerCfg;

        this.tickerRate = 1250;
        
        this.transport            = new Array();
        this.info                 = new Array();
        this.info["splits"]       = new Array();
        this.info["galleryReady"] = false;
        this.info["gallery"]      = new Array();
        this.info["gallery"]["imgs"]      = new Array();
        this.galleryInfo          = new Array();
        this.galleryInfo["imgs"]  = new Array();

        var that = this;
        $(document).ready(function() {
            that.init();
        });
    }

    init() {
        this.ticker();
        this.gallery();
    }

    gallery() {

        this.info["gallery"]["imgs"][0] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][1] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][2] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][3] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][4] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][5] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][6] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][7] = "media/images/dreamer_album.jpg";
        this.info["gallery"]["imgs"][8] = "media/images/dreamer_album.jpg";

        this.info["gallery"]["start"]   = new Array();

        var that = this;
        this.info["gallery"]["start"][0] = 0;
        this.galleryInitInterval = setInterval(function() {
            var i = 0;
            for (var key in that.info["splits"]) {
                console.log(key,that.info["splits"][key]);
                that.info["gallery"]["start"][key] = that.info["splits"][key];
                i++;
            }
        },2000);

    }

    ticker() {
        var that = this;
        this.tickerInterval = setInterval(function() {

            that.tickGetTransport();
            that.tickGallery();
            that.tickerGetInfo();

        },that.tickerRate);
    }

    tickerGetInfo() {
        this.info["audioTagId"] = this.RPlayer.audioObject.id;
        this.info["splits"]     = this.RPlayer.splits;
    }

    tickGallery() {
        // console.log(this.info,this.transport);
        try {
            if (
                this.info["gallery"]["start"].length == this.info["splits"].length &&
                this.info["splits"].length > 0
            ) {
                clearInterval(this.galleryInitInterval);
                this.info["galleryReady"] = true;
            }
        } catch(err) {
            console.log("[NOTICE] Waiting...");
        }
    }
    
    tickGetTransport() {
        this.transport["trackId"]        = this.RPlayer.curTrackId;
        this.transport["seekerPosFull"]  = this.RPlayer.seekerObject[0].value;
        this.transport["seekerPosTrack"] = this.RPlayer.seekerObject[0].value - this.RPlayer.seekerObject[0].min;
        this.transport["volume"]         = this.RPlayer.audioObject.volume;
        this.transport["playingNow"]     = ((!this.RPlayer.audioObject.paused) ? true : false);
    }
}
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
        rplayerObj,
        QrCode
    ) {
        this.rplayerObj    = rplayerObj;
        this.rplayerCfg    = rplayerObj.rplayerCfg.conf;
        this.QrCode        = QrCode;
   
        this.download      = {};
        this.download.mp3  = [];
        this.downloadIndex = 0;
        this.lyrics        = [];
        this.story         = [];
        
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
                that.bundleOptions();
                clearInterval(int);
            }
        },362);
    }

    bundleOptions() {
        $("#rplayerDownloads .rplayerDownloadsBundleOptions").append(
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\"><label for=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\">Include images to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\"><label for=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\">Include icons to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\"><label for=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\">Songs lyrics files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_InfoFile\"><label for=\"rplayerCheckboxDownloadBundleOptions_InfoFile\">Songs informations files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_AlbumInfoFile\"><label for=\"rplayerCheckboxDownloadBundleOptions_AlbumInfoFile\">Album informations website</label>" +
            "</div>"
        );
    }

    checkForm() {
        var that = this;
        
        $("#rplayerDownloads form:first-child").on("submit",function() {
            return false;
        });

        $("#rplayerDownloads form:first-child").on("change",function(e) {
            var elementId = e.originalEvent.path[0].id;

            // set downloads
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if ($("#" + value.checkboxId).is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }

            // responsibilities
            if (elementId == "rplayerCheckboxDownloadBundleOptions_AlbumInfoFile") {
                if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_AlbumInfoFile").is(":checked")) {
                    $("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_InfoFile").prop("checked",true);
                    $("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_LyricsFile").prop("checked",true);
                }
            } else {
                if (
                    !$("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_InfoFile").is(":checked") ||
                    !$("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_LyricsFile").is(":checked")
                ) {
                    $("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_AlbumInfoFile").prop("checked",false);
                }
            }
        });
    }

    getHtmlBody(title = false,htmlIn) {
        var QrCod = new this.QrCode(0,'H');
            QrCod.addData(this.rplayerObj.getURLAddress());
            QrCod.make();
        
        var title;
        var htmlIn;
        var html = 
        "<!DOCTYPE html>" +
        "\n<html>" +
            "\n<head>" +
                "\n<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">" +
                "\n<meta name=\"generator\" content=\"RPlayer v" + this.rplayerCfg.app.version + " (" + this.rplayerCfg.app.date + "), " + this.rplayerObj.getURLAddress() + "\">" +
                "\n<title>" + this.rplayerCfg.album.info.composer + " :: " + this.rplayerCfg.album.info.name + " (" + this.rplayerCfg.album.info.year + ")" + ((title) ? " :: " + title : "") + "</title>" +
                "\n<link rel=\"icon\" href=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyAyMDE4ICg2NCBiaXTFrykgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjIxMG1tIiBoZWlnaHQ9IjIxMG1tIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCAyMTAwMCAyMTAwMCINCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogPGRlZnM+DQogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQogICA8IVtDREFUQVsNCiAgICAuc3RyMSB7c3Ryb2tlOiMyQjJBMjk7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLnN0cjAge3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI1Nn0NCiAgICAuZmlsMSB7ZmlsbDpibGFja30NCiAgICAuZmlsMiB7ZmlsbDojNDE4M0M0fQ0KICAgIC5maWwwIHtmaWxsOndoaXRlfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJWcnN0dmFfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxnIGlkPSJMb2dvX3gwMDIwX1JQbGF5ZXIiPg0KICAgPHJlY3QgY2xhc3M9ImZpbDAiIHdpZHRoPSIyMTAwMCIgaGVpZ2h0PSIyMTAwMCIgcng9IjI5NzMuOTYiIHJ5PSIyOTczLjk2Ii8+DQogICA8ZyBpZD0iTG9nb194MDAyMF9SUGxheWVyX3gwMDIwXzEiPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjQ1MC40OCAxMjEwMy43bDY3MC44MyAtMzg3LjMgNzg4MS4yOCAtNDU1MC4yNmMxNDkuNDYsLTg2LjI5IDIzNSwtMjM0LjQ1IDIzNSwtNDA3LjAzIDAsLTE3Mi41OCAtODUuNTQsLTMyMC43NCAtMjM1LC00MDcuMDNsLTg1NTIuMTEgLTQ5MzcuNTZjLTE0OS40NiwtODYuMjkgLTMyMC41NCwtODYuMjkgLTQ3MCwwIC0xNDkuNDUsODYuMjkgLTIzNSwyMzQuNDUgLTIzNSw0MDcuMDNsMCA5ODc1LjExYzAsMTcyLjU4IDg1LjU0LDMyMC43NSAyMzUsNDA3LjA0IDE0OS40Niw4Ni4yOCAzMjAuNTQsODYuMjkgNDcwLDB6bTY3MC44MyAtMjU3Ny4xOWwwIC01NTM0LjggMCAtODE0LjA2IDcwNC44MSA0MDYuOTIgMjM5Ni44MyAxMzgzLjgxIDMxMDEuNjMgMTc5MC43MyAtMzEwMS42MyAxNzkwLjczIC0yMzk2LjgzIDEzODMuODEgLTcwNC44MSA0MDYuOTIgMCAtODE0LjA2eiIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjIxNS40OCAxMjc4NS43N2w0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MHoiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIwIiBkPSJNOTg3Mi45NyAxOTI2OS45OGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MGw0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MHoiLz4NCiAgICA8cG9seWdvbiBjbGFzcz0iZmlsMiBzdHIxIiBwb2ludHM9IjcxMjEuMzEsMzk5MS43MSA3MTIxLjMxLDk1MjYuNTEgNzEyMS4zMSwxMDM0MC41NyA3ODI2LjEyLDk5MzMuNjUgMTAyMjIuOTUsODU0OS44NCAxMzMyNC41OCw2NzU5LjExIDEwMjIyLjk1LDQ5NjguMzggNzgyNi4xMiwzNTg0LjU3IDcxMjEuMzEsMzE3Ny42NSAiLz4NCiAgIDwvZz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K\">" +
                // CSS
                "\n<style type=\"text/css\">" +
                    "\nbody {" +
                        "\nbackground-color: #000;" +
                        "\ncolor: rgba(255,255,255,.7);" +
                        "\ntext-align: justify;" +
                        "\nmargin: 0 1.5em 0 1.5em;" +
                    "\n}" +
                    "\na {" +
                        "\ncolor: rgba(255,255,255,1);" +
                        "\ntext-decoration: none;" +
                    "\n}" +
                    "\na:hover {" +
                        "\ntext-decoration: underline rgba(65,131,196,1);" +
                    "\n}" +
                    "\nh1,h2,h3,h4,h5,h6,h7 {" +
                        "\ncolor: rgba(255,255,255,1);" +
                    "\n}" +
                    "\nh1 {" +
                        "\nborder-bottom: 1px solid rgba(65,131,196,1);" +
                        "\nposition: sticky;" +
                        "\ntop: 0;" +
                    "\n}" +
                    "\n.footer {" +
                        "\ndisplay: flex;" +
                        "\njustify-content: safe center;" +
                        "\nalign-items: safe center;" +
                        "\nposition: sticky;" +
                        "\nbottom: 0;" +
                        "\nmargin-top: 1.5em;" +
                        "\npadding: 1em 0 1em 0;" +
                        "\nbackground-color: rgba(0,0,0,.9);" +
                        "\nborder-top: 1px solid rgba(65,131,196,1);" +
                        "\ntext-align: left;" +
                    "\n}" +
                    "\n.footer th, table.footer td {" +
                        "\ntext-align: left;" +
                        "\npadding: 0;" +
                    "\n}" +
                    "\n.footer img {" +
                        "\nheight: 3em;" +
                        "\nmargin-right: 1em;" +
                    "\n}" +
                    "\n.qr {" +
                        "\nwidth: 10em;" +
                        "\nheight: 10em;" +
                    "\n}" +
                    "\na.blockLink {" +
                        "\ndisplay: block;" +
                    "\n}" +
                    "\ndiv.middleBlock {" +
                        "\nmax-width: 60em;" +
                        "\nmargin: auto;" +
                    "\n}" +
                "\n</style>" +
            "\n</head>" +
            "\n<body style=\"font-family: courier\">\n" +
                "\n<div class=\"middleBlock\">\n" +
                    // Content
                    htmlIn +
                    "\n<h2>Generate by RPlayer v" + this.rplayerCfg.app.version + " (" + this.rplayerCfg.app.date + ")</h2>" +
                    "\n<a class=\"blockLink\" href=\"" + this.rplayerObj.getURLAddress() + "\">" +
                        "\nReward options for author of the music or author of the RPlayer are available under this link. " + this.rplayerCfg.app.donations.securityPhrase + "<br><br>" +
                        "\n<div class=\"qr\">" +
                            QrCod.createSvgTag({}) +
                        "\n</div>" +
                    "\n</a>" +
                    "\n</div>\n" +
                // Footer
                "\n<div class=\"footer\">" +
                    "\n<img alt=\"RPlayer\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyAyMDE4ICg2NCBiaXTFrykgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjIxMG1tIiBoZWlnaHQ9IjIxMG1tIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCAyMTAwMCAyMTAwMCINCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogPGRlZnM+DQogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQogICA8IVtDREFUQVsNCiAgICAuc3RyMSB7c3Ryb2tlOiMyQjJBMjk7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNTZ9DQogICAgLnN0cjAge3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI1Nn0NCiAgICAuZmlsMSB7ZmlsbDpibGFja30NCiAgICAuZmlsMiB7ZmlsbDojNDE4M0M0fQ0KICAgIC5maWwwIHtmaWxsOndoaXRlfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJWcnN0dmFfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxnIGlkPSJMb2dvX3gwMDIwX1JQbGF5ZXIiPg0KICAgPHJlY3QgY2xhc3M9ImZpbDAiIHdpZHRoPSIyMTAwMCIgaGVpZ2h0PSIyMTAwMCIgcng9IjI5NzMuOTYiIHJ5PSIyOTczLjk2Ii8+DQogICA8ZyBpZD0iTG9nb194MDAyMF9SUGxheWVyX3gwMDIwXzEiPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjQ1MC40OCAxMjEwMy43bDY3MC44MyAtMzg3LjMgNzg4MS4yOCAtNDU1MC4yNmMxNDkuNDYsLTg2LjI5IDIzNSwtMjM0LjQ1IDIzNSwtNDA3LjAzIDAsLTE3Mi41OCAtODUuNTQsLTMyMC43NCAtMjM1LC00MDcuMDNsLTg1NTIuMTEgLTQ5MzcuNTZjLTE0OS40NiwtODYuMjkgLTMyMC41NCwtODYuMjkgLTQ3MCwwIC0xNDkuNDUsODYuMjkgLTIzNSwyMzQuNDUgLTIzNSw0MDcuMDNsMCA5ODc1LjExYzAsMTcyLjU4IDg1LjU0LDMyMC43NSAyMzUsNDA3LjA0IDE0OS40Niw4Ni4yOCAzMjAuNTQsODYuMjkgNDcwLDB6bTY3MC44MyAtMjU3Ny4xOWwwIC01NTM0LjggMCAtODE0LjA2IDcwNC44MSA0MDYuOTIgMjM5Ni44MyAxMzgzLjgxIDMxMDEuNjMgMTc5MC43MyAtMzEwMS42MyAxNzkwLjczIC0yMzk2LjgzIDEzODMuODEgLTcwNC44MSA0MDYuOTIgMCAtODE0LjA2eiIvPg0KICAgIDxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNjIxNS40OCAxMjc4NS43N2w0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MHoiLz4NCiAgICA8cGF0aCBjbGFzcz0iZmlsMSBzdHIwIiBkPSJNOTg3Mi45NyAxOTI2OS45OGwwIC02MDE0LjIxYzAsLTI1OC44NyAyMTEuMTMsLTQ3MCA0NzAsLTQ3MGw0MzUuODMgMGMyNTguODcsMCA0NzAsMjExLjEzIDQ3MCw0NzBsMCA2MDE0LjIxYzAsMjU4Ljg3IC0yMTEuMTMsNDcwIC00NzAsNDcwbC00MzUuODMgMGMtMjU4Ljg3LDAgLTQ3MCwtMjExLjEzIC00NzAsLTQ3MHoiLz4NCiAgICA8cG9seWdvbiBjbGFzcz0iZmlsMiBzdHIxIiBwb2ludHM9IjcxMjEuMzEsMzk5MS43MSA3MTIxLjMxLDk1MjYuNTEgNzEyMS4zMSwxMDM0MC41NyA3ODI2LjEyLDk5MzMuNjUgMTAyMjIuOTUsODU0OS44NCAxMzMyNC41OCw2NzU5LjExIDEwMjIyLjk1LDQ5NjguMzggNzgyNi4xMiwzNTg0LjU3IDcxMjEuMzEsMzE3Ny42NSAiLz4NCiAgIDwvZz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K\">" +
                    "\n<table cellpadding='0' cellspacing='0'>" +
                        "\n<tr>" +
                            "\n<th>" +
                                "\nAlbum:&nbsp;" +
                            "\n</th>" +
                            "\n<td>" +
                                "\n<a href='" + this.rplayerObj.getURLAddress() + "'>\n" +
                                    this.rplayerCfg.album.info.name +
                                "\n</a>" +
                            "\n</td>" +
                        "\n</tr>" +
                        "\n<tr>" +
                            "\n<th>" +
                                "\nAuthor:&nbsp;" +
                            "\n</th>" +
                            "\n<td>\n" +
                                this.rplayerCfg.album.info.composer +
                            "\n</td>" +
                        "\n</tr>" +
                        "\n<tr>" +
                            "\n<th>" +
                                "\nYear:&nbsp;" +
                            "\n</th>" +
                            "\n<td>\n" +
                                this.rplayerCfg.album.info.year +
                            "\n</td>" +
                        "\n</tr>" +
                    "\n</table>" +
                "\n</div>" +
            "\n</body>" +
        "\n</html>";

        return html;
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
                    'This file was generated by RPlayer v' + this.rplayerCfg.app.version + ' (' + this.rplayerCfg.app.date + ') at the URL:\n' +
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
                    srcIconFile: value.info.icon,
                    checkboxId: checkboxId,
                    storyHtml: this.getTrackStory(value),
                    comment: {
                        description: '',
                        text: 
                            commentText +
                            ((this.rplayerCfg.album.donations !== undefined) ? this.getArtistDonations() : "") +
                            ((value.words !== undefined) ? this.getLyrics(value) : "") +
                            ((this.rplayerCfg.app.donations !== undefined) ? this.getRPlayerDonations() : ""),
                    },
                    isrc: value.info.isrc,
                    bpm: value.info.bpm,
                };
            }
        }
    }

    getTrackStory(song) {
        var storyRet = {};

        storyRet.story    = "";

        storyRet.story +=
        "\n<h1>" + song.mediaName + "</h1>";

        for (const [key, value] of Object.entries(song.info.anyHtml)) {
            if (value.noDownloadRender === undefined) {
                storyRet.story += "\n<h2>" + value.id + "</h2>";
                storyRet.story += "\n" + value.html;
            }
        }

        var i = this.story.length;
        
        this.story[i] = {};
        this.story[i].fileName = song.mediaName + ".htm";
        this.story[i].html     = this.getHtmlBody(song.mediaName + " track detail",storyRet.story);
    }

    getArtistDonations() {
        var lat    = false;
        var string = "\n\n";

        string += "Donations for artist:\n";
        string += "---------------------\n";

        for (const [key, value] of Object.entries(this.rplayerCfg.album.donations.wallets)) {
            if (lat) {
                string += "\n\n";
            }
            string += value.ccurrency + ":\n";
            string += value.adress;
            lat = true;
        }

        return string;
    }

    getRPlayerDonations() {
        var lat    = false;
        var string = "\n\n";

        string += "Donations for RPlayer:\n";
        string += "----------------------\n";

        for (const [key, value] of Object.entries(this.rplayerCfg.app.donations.wallets)) {
            if (lat) {
                string += "\n\n";
            }
            string += value.ccurrency + ":\n";
            string += value.adress;
            lat = true;
        }

        return string;
    }
    
    getLyrics(value) {
        var words  = value.words;
        var lat    = false;
        var string = "\n\n";
        var html   = "";

        string += "Lyrics:\n";
        string += "-------\n";

        html   += "\n<h1>" + value.mediaName + "</h1>";

        for (const [key, value2] of Object.entries(words)) {
            if (lat) {
                string += "\n";
                html   += "\n<br>";
            }
            string += value2.replace("<br>","\n");
            html   += value2;
            lat = true;
        }

        var i    = this.lyrics.length;

        this.lyrics[i] = {};
        this.lyrics[i].fileName = value.mediaName + ".htm";
        this.lyrics[i].html     = this.getHtmlBody("Lyrics of " + value.mediaName,html);

        return string;
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
        $("#rplayerDownloads input").attr('disabled', 'disabled');
        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .downloadsButton").css({
            opacity: "0.3"
        });
        this.getMp3Files();
        this.getMp3ImagesFiles();
        this.getMp3IconsFiles();
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
                if (
                    value.data !== undefined &&
                    value.imgData !== undefined &&
                    value.iconData !== undefined
                ) {
                    countOfDownloadedFiles += 1;
                }
            }

            if (parseInt(countOfDownloadedFiles) != parseInt(countOfFiles)) {
                that.checkDataAndContinue();
            } else {
                that.zipData();
            }
        },6000);
    }

    getMp3ImagesFiles() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3ImgFileData(value);
        }
    }

    getMp3IconsFiles() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3IconFileData(value);
        }
    }

    getMp3IconFileData(value) {
        var value;
        var that = this;

        if (!value.iconData && value.download == true) {
            console.log("[RPlayer]","Getting the icon data for the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcIconFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3IconFileData(value);
                        console.log("[RPlayer]","I'm trying to get the icon data for the \"" + value.fileName + "\" file again.");
                    },
                    success: function(data) {
                        value.iconData = data;
                        console.log("[RPlayer]","I got the icon data for the \"" + value.fileName + "\" file.");
                    }
                });
            },6000);
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
                    error: function(jqXHR, textStatus, errorThrown) {
                        that.getMp3ImgFileData(value);
                        console.log("[RPlayer]","I'm trying to get the image data for the \"" + value.fileName + "\" file again.");
                    },
                    success: function(data) {
                        value.imgData = data;
                        console.log("[RPlayer]","I got the image data for the \"" + value.fileName + "\" file.");
                    }
                });
            },6000);
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
        
        // ZIP mp3
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.data) {
                zip.folder(baseFolderName).file(value.fileName,this.putID3(value));
            }
        }

        // ZIP Lyrics
        for (const [key, value] of Object.entries(this.lyrics)) {
            if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_LyricsFile").is(":checked")) {
                zip.folder(baseFolderName).folder('info').folder("lyrics").file(value.fileName,value.html);
            }
        }

        // ZIP tracks Info
        for (const [key, value] of Object.entries(this.story)) {
            if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_InfoFile").is(":checked")) {
                zip.folder(baseFolderName).folder("info").folder("tracks").file(value.fileName,value.html);
            }
        }

        // ZIP album info
        if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_AlbumInfoFile").is(":checked")) {
            zip.folder(baseFolderName).folder("info").file("index.htm",this.getAlbumInfoHtml());
        }

        var that = this;
        zip.generateAsync({type:"blob"}).then(function (blob) {
            saveAs(blob, baseFolderName + ".zip");
            $("#rplayerDownloads .button.rplayerDownloadSubmit").removeClass("loading disabled");
            $("#rplayerDownloads input").removeAttr('disabled');    
            $(that.rplayerCfg.app.htmlSelectors.mainWindow + " .downloadsButton").css({
                opacity: "1"
            });
        });
    }

    getAlbumInfoHtml() {
        var html = "";
        
        html +=
        "\n<h1>Album information</h1>" +
        "\n<br>" +
        "\n<table cellpadding='0' cellspacing='0'>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nAlbum:&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>" +
                    "\n<a href='" + this.rplayerObj.getURLAddress() + "'>\n" +
                        this.rplayerCfg.album.info.name +
                    "\n</a>" +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nAuthor:&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.composer +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nYear:&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.year +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th>" +
                    "\nDuration:&nbsp;" +
                "\n</th>" +
                "\n<td>\n" +
                    this.rplayerObj.secondsToTime(this.rplayerObj.audioObject.duration) +
                "\n</td>" +
            "\n</tr>" +
            (
                (this.rplayerCfg.album.info.label) ?
                "\n<tr>" +
                    "\n<th style='text-align: left'>" +
                        "\nLabel:&nbsp;" +
                    "\n</th>" +
                    "\n<td style='text-align: left'>\n" +
                        this.rplayerCfg.album.info.label +
                    "\n</td>" +
                "\n</tr>"
                :
                ""
            ) +
            (
                (this.rplayerCfg.album.info.copyright) ?
                "\n<tr>" +
                    "\n<th style='text-align: left'>" +
                        "\nCopyright:&nbsp;" +
                    "\n</th>" +
                    "\n<td style='text-align: left'>\n" +
                        this.rplayerCfg.album.info.copyright +
                    "\n</td>" +
                "\n</tr>"
                :
                ""
            ) +
        "\n</table>\n" +
        this.rplayerCfg.album.info.anyHtml +
        "\n<h2>Tracklist</h2>\n" +
        this.getTracklist();

        return this.getHtmlBody("Album information",html);
    }

    getTracklist() {
        this.splits = new Array;
        var tracks  = this.rplayerObj.obj2array(this.rplayerCfg.album.tracks);
        var html    = "";

        this.tnames = new Array;
        var i = 0;
        tracks.forEach(element => {
            this.tnames[i] = element[1].mediaName;
            if (i != 0) {
                this.splits[i] = element[1].timeStart;
            }
            i++;
        });

        var tDuration;
        var that = this;

        html += "<table cellspacing='0' cellpadding='0'>";
        for (var key in this.tnames) {
            if (key == 0) {
                tDuration = that.rplayerObj.secondsToTime(that.splits[parseInt(key) + 1]);
            } else if (key < that.tnames.length - 1) {
                tDuration = that.rplayerObj.secondsToTime(that.splits[parseInt(key) + 1] - that.splits[parseInt(key)]);
            } else {
                tDuration = that.rplayerObj.secondsToTime(that.rplayerObj.audioObject.duration - that.splits[parseInt(key)]);
            }

            html +=
            "<tr>" +
            "<th style='text-align: left;'>" +
            this.tnames[key] +
            "&nbsp;</th><td>(" +
            tDuration +
            ")</td>" +
            // info, lyrics
            (
                (
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].words ||
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info
                ) ?
                    "<td>" +
                    (
                        (
                            this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info
                        ) ? 
                        "&nbsp;[<a href='tracks/" + this.tnames[key] + ".htm'>information</a>]" : 
                        ""
                    ) +
                    (
                        (
                            this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].words
                        ) ? 
                        "&nbsp;[<a href='lyrics/" + this.tnames[key] + ".htm'>lyrics</a>]" : 
                        ""
                    ) +
                    "</td>"
                : "<td></td>"
            ) +
            // ISRC codes
            (
                (
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info.isrc
                )
                ? "\n<td>&nbsp;ISRC code: " + this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info.isrc + "</td>"
                : ""
            ) +
            "</tr>";
        }
        html += '</table>';

        return html;
    }

    putID3(song) {
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
            .setFrame('TSRC', song.isrc)
            .setFrame('TYER', this.rplayerCfg.album.info.year);

        if ($("#rplayerCheckboxDownloadBundleOptions_ImagesToMp3").is(":checked")) {
            writer.setFrame('APIC', {
                type: 3,
                data: song.imgData,
                description: ''
            });
        }

        if ($("#rplayerCheckboxDownloadBundleOptions_IconsToMp3").is(":checked")) {
            writer.setFrame('APIC', {
                type: 1,
                data: song.iconData,
                description: ''
            });
        }

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
            },6000);
        }
    }
}

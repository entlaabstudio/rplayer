/**
 * @file Downloads module for RPlayer web application
 * @version 1
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
        this.justZipIt     = [];
        
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
                that.coverImage();
                that.slideshowImages();
                that.tracks();
                that.bundleOptions();
                that.otherFiles();
                that.unsortedFiles();
                that.progressBar();
                clearInterval(int);
            }
        },362);
    }

    progressBar() {
        $('#rplayerDownloadsProgress').progress();
    }
    
    slideshowImages() {
        this.download.slideshowImages = [];
        var i;
        var noEntry;

        for (const [key, value] of Object.entries(this.rplayerCfg.slideShow.pictures)) {
            noEntry = true;
            i = this.download.slideshowImages.length;

            for (const [key2, value2] of Object.entries(this.download.slideshowImages)) {
                if (value2.srcFile == value.src) {
                    noEntry = false;
                }
            }

            if (noEntry) {
                this.download.slideshowImages[i] = {};
                
                this.download.slideshowImages[i].fileName = value.mediaName + "." + this.getFileExtension(value.src);
                this.download.slideshowImages[i].srcFile = value.src;
                this.download.slideshowImages[i].download = true;
            }
        }
    }
    
    coverImage() {
        this.download.coverImage = {};
        this.download.coverImage.fileName = "cover." + this.getFileExtension(this.rplayerCfg.album.info.image);
        this.download.coverImage.srcFile = this.rplayerCfg.album.info.image;
        this.download.coverImage.download = true;
    }

    unsortedFiles() {
        this.download.unsorted = [];
        
        if (this.rplayerCfg.album.downloads !== undefined) {
            var i;
            var i2;
            for (const [key, value] of Object.entries(this.rplayerCfg.album.downloads)) {
                if (value !== undefined) {
                    i = this.download.unsorted.length;
                    this.download.unsorted[i] = {};
    
                    this.download.unsorted[i].fileName = value.name;
                    this.download.unsorted[i].srcFile = value.srcFile;
                    this.download.unsorted[i].folder = value.folder;
                    this.download.unsorted[i].download = true;
                    this.download.unsorted[i].checkboxId = "rplayerCheckboxDownloadUnsortedFile_" + key;
                }
            }
            this.renderFieldsetForUnsorted();
        }
    }

    renderFieldsetForUnsorted() {
        try {
            if (this.download.unsorted.length !== undefined) {
                $("#rplayerDownloads .fieldsetBox:first").after(
                    this.getFieldsetsForUnsorted()
                );
            }   
        } catch (error) {
            
        }
    }

    getFieldsetsForUnsorted() {
        var html = "";
        html += 
        "<div class=\"fieldsetBox\">" +
            "<fieldset class=\"rplayerDownloadsUnsorted\">" +
                "<legend><span class=\"rplayerLocalText\" data-phrase=\"downloadsAttachmentsUnsorted\">Unsorted attachments</span></legend>";
        for (const [key2, value2] of Object.entries(this.download.unsorted)) {
            html +=
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"" + value2.checkboxId + "\"><label for=\"" + value2.checkboxId + "\">" + value2.fileName + "</label>" +
            "</div>";
        }
        html +=
            "</fieldset>" +
        "</div>";

        return html;
    }

    otherFiles() {
        this.download.others = [];
        var i;
        var i2;
        for (const [key, value] of Object.entries(this.rplayerCfg.album.tracks)) {
            if (value.downloads !== undefined) {
                if (value.downloads.others !== undefined) {
                    i = this.download.others.length;
                    this.download.others[i] = {};
                    this.download.others[i].mediaName = value.mediaName;
                    this.download.others[i].files = [];
                    for (const [key2, value2] of Object.entries(value.downloads.others)) {
                        i2 = this.download.others[i].files.length;
                        this.download.others[i].files[i2] = {};
                        this.download.others[i].files[i2].fileName = value2.name;
                        this.download.others[i].files[i2].srcFile = value2.srcFile;
                        this.download.others[i].files[i2].folder = value2.folder;
                        this.download.others[i].files[i2].download = true;
                        this.download.others[i].files[i2].checkboxId = "rplayerCheckboxDownloadOtherFile_" + key + "_" + key2;
                    }
                }
            }
        }
        this.renderFieldsetForOthers();
    }

    renderFieldsetForOthers() {
        try {
            if (this.download.others.length !== undefined) {
                $("#rplayerDownloads .fieldsetBox:first").after(
                    this.getFieldsetsForOthers()
                );
            }   
        } catch (error) {
            
        }
    }

    getFieldsetsForOthers() {
        var html = "";
        for (const [key, value] of Object.entries(this.download.others)) {
            html += 
            "<div class=\"fieldsetBox\">" +
                "<fieldset class=\"rplayerDownloadsOthers\">" +
                    "<legend><span class=\"rplayerLocalText\" data-phrase=\"downloadsAttachmentsFor\">Attachments for</span> " + value.mediaName + "</legend>";
            for (const [key2, value2] of Object.entries(value.files)) {
                html +=
                "<div class=\"ui toggle checkbox\">" +
                    "<input type=\"checkbox\" checked=\"checked\" id=\"" + value2.checkboxId + "\"><label for=\"" + value2.checkboxId + "\">" + value2.fileName + "</label>" +
                "</div>";
            }
            html +=
                "</fieldset>" +
            "</div>"
        }

        return html;
    }
    
    bundleOptions() {
        $("#rplayerDownloads .rplayerDownloadsBundleOptions").append(
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsImagesToMp3\" for=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\">Include images to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsIconsToMp3\" for=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\">Include icons to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
            "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsLyricsFiles\" for=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\">Songs lyrics files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
            "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_InfoFile\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsInfoFiles\" for=\"rplayerCheckboxDownloadBundleOptions_InfoFile\">Songs informations files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_AlbumInfoFile\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsInfoWebsite\" for=\"rplayerCheckboxDownloadBundleOptions_AlbumInfoFile\">Album informations website</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_CoverImage\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsCoverImage\" for=\"rplayerCheckboxDownloadBundleOptions_CoverImage\">Cover image to root directory</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_TracksImages\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsTracksImages\" for=\"rplayerCheckboxDownloadBundleOptions_TracksImages\">Tracks images files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_SlideshowImages\"><label class=\"rplayerLocalText\" data-phrase=\"downloadsSlshowImages\" for=\"rplayerCheckboxDownloadBundleOptions_SlideshowImages\">Slideshow images files</label>" +
            "</div>"
        );
    }

    checkForm() {
        var that = this;
        
        $("#rplayerDownloads form:first-child").on("submit",function() {
            return false;
        });

        $("#rplayerDownloads form:first-child").on("change",function(e) {
            var elementId = e.originalEvent.composedPath()[0].id;

            // set slideshow images
            for (const [key, value] of Object.entries(that.download.slideshowImages)) {
                if ($("#rplayerCheckboxDownloadBundleOptions_SlideshowImages").is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }
            
            // set cover image
            if ($("#rplayerCheckboxDownloadBundleOptions_CoverImage").is(":checked")) {
                that.download.coverImage.download = true;
            } else {
                that.download.coverImage.download = false;
            }
            
            // set mp3 downloads
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if ($("#" + value.checkboxId).is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }

            // set other downloads
            for (const [key, value] of Object.entries(that.download.others)) {
                for (const [key2, value2] of Object.entries(value.files)) {
                    if ($("#" + value2.checkboxId).is(":checked")) {
                        value2.download = true;
                    } else {
                        value2.download = false;
                    }
                }
            }

            // set unsorted downloads
            for (const [key, value] of Object.entries(that.download.unsorted)) {
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
        "\n<html lang=\"" + this.rplayerCfg.app.localization.lang + "\">" +
            "\n<head>" +
                "\n<meta charset=\"UTF-8\">" +
                "\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
                "\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
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
                    "\n.nowrap * {" +
                        "\nwhite-space: nowrap;" +
                    "\n}" +
                "\n</style>" +
            "\n</head>" +
            "\n<body style=\"font-family: courier\">\n" +
                "\n<div class=\"middleBlock\">\n" +
                    // Content
                    htmlIn +
                    "\n<h2>" + this.rplayerCfg.app.localization.phrases["downloadsGeneratedByRplayer"] + " v" + this.rplayerCfg.app.version + " (" + this.rplayerCfg.app.date + ")</h2>" +
                    "\n<a class=\"blockLink\" href=\"" + this.rplayerObj.getURLAddress() + "\">" +
                        "\n" + this.rplayerCfg.app.localization.phrases["downloadsRewardInfo"] + " " + this.rplayerCfg.app.donations.securityPhrase + "<br><br>" +
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
                                "\n" + this.rplayerCfg.app.localization.phrases["downloadsAlbum"] + ":&nbsp;" +
                            "\n</th>" +
                            "\n<td>" +
                                "\n<a href='" + this.rplayerObj.getURLAddress() + "'>\n" +
                                    this.rplayerCfg.album.info.name +
                                "\n</a>" +
                            "\n</td>" +
                        "\n</tr>" +
                        "\n<tr>" +
                            "\n<th>" +
                                "\n" + this.rplayerCfg.app.localization.phrases["downloadsAuthor"] + ":&nbsp;" +
                            "\n</th>" +
                            "\n<td>\n" +
                                this.rplayerCfg.album.info.composer +
                            "\n</td>" +
                        "\n</tr>" +
                        "\n<tr>" +
                            "\n<th>" +
                                "\n" + this.rplayerCfg.app.localization.phrases["downloadsYear"] + ":&nbsp;" +
                            "\n</th>" +
                            "\n<td>\n" +
                                this.rplayerCfg.album.info.year +
                            "\n</td>" +
                        "\n</tr>" +
                    "\n</table>" +
                "\n</div>" +
            "\n</body>" +
        "\n</html>";

        return this.rplayerObj.templateReplacer(html);
    }

    tracks() {
        var numOfDigits = this.numberGetDigits(Object.keys(this.rplayerCfg.album.tracks).length);

        for (const [key, value] of Object.entries(this.rplayerCfg.album.tracks)) {
            var fileName = this.numberZeroFill((parseInt(key) + 1), numOfDigits) + " - " + value.mediaName + ".mp3";
            var trackNumber = parseInt(key) + 1;
            var checkboxId = "rplayerCheckboxDownloadMp3_" + key;
            var genres = [];
            var commentText = 
                this.rplayerCfg.app.localization.phrases["downloadsGeneratedByRplayer"] + ' v' + this.rplayerCfg.app.version + ' (' + this.rplayerCfg.app.date + ') ' + this.rplayerCfg.app.localization.phrases["downloadsAtTheUrl"] + ':\n' +
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
                srcImgFile: value.info.image,
                srcIconFile: value.info.icon,
                checkboxId: checkboxId,
                storyHtml: this.getTrackStory(value),
                comment: {
                    description: '',
                    text: 
                        this.rplayerObj.templateReplacer(commentText) + "\n" +
                        ((value.words !== undefined) ? this.rplayerObj.templateReplacer(this.getLyrics(value)) + "\n" : "") +
                        ((this.rplayerCfg.album.info.miniIcons !== undefined) ? this.getArtistUrls() + "\n" : "") +
                        ((this.rplayerCfg.album.donations !== undefined) ? this.getArtistDonations() + "\n" : "") +
                        ((this.rplayerCfg.app.donations !== undefined) ? this.getRPlayerDonations() : ""),
                },
                isrc: value.info.isrc,
                bpm: value.info.bpm,
            };
            if (value.downloads !== undefined) {
                if (value.downloads.mp3 !== undefined) {        
                    $("#rplayerDownloads .rplayerDownloadsTracks").append(
                        "<div class=\"ui toggle checkbox\">" +
                            "<input type=\"checkbox\" checked=\"checked\" id=\"" + checkboxId + "\"><label for=\"" + checkboxId + "\">" + fileName + "</label>" +
                        "</div>"
                    );
                    this.download.mp3[key].srcFile = value.downloads.mp3;
                } else {
                    this.download.mp3[key].download = false;
                    this.srcImgFile                 = value.info.image;
                    this.mediaName                  = value.mediaName;
                }
            } else {
                this.download.mp3[key].download = false;
                this.srcImgFile                 = value.info.image;
                this.mediaName                  = value.mediaName;
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
        this.story[i].html     = this.getHtmlBody(song.mediaName + " " + this.rplayerCfg.app.localization.phrases["downloadsTrackDetail"],storyRet.story);
    }

    getArtistUrls() {
        var lat    = false;
        var string = "\n\n";

        string += this.rplayerCfg.app.localization.phrases["downloadsArtUrlsID3"] + ":\n";
        string += this.rplayerCfg.app.localization.phrases["downloadsArtUrlsID3U"] + "\n";

        for (const [key, value] of Object.entries(this.rplayerCfg.album.info.miniIcons)) {
            if (lat) {
                string += "\n";
            }
            string += value.name + ": " + value.url;
            lat = true;
        }

        return string;
    }
    
    getArtistDonations() {
        var lat    = false;
        var string = "\n\n";

        string += this.rplayerCfg.app.localization.phrases["downloadsDonatArtID3"] + ":\n";
        string += this.rplayerCfg.app.localization.phrases["downloadsDonatArtID3U"] + "\n";

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

        string += this.rplayerCfg.app.localization.phrases["downloadsDonatRPID3"] + ":\n";
        string += this.rplayerCfg.app.localization.phrases["downloadsDonatRPID3U"] + "\n";

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

        string += this.rplayerCfg.app.localization.phrases["downloadsLyricsID3"] + ":\n";
        string += this.rplayerCfg.app.localization.phrases["downloadsLyricsID3U"] + "\n";

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

        $("#rplayerDownloads .button.rplayerDownloadInvert").on("click",function() {
            that.checkboxesManipulator("invert");
        });

        $("#rplayerDownloads .button.rplayerDownloadReset").on("click",function() {
            that.checkboxesManipulator("reset");
        });
    }

    checkboxesManipulator(manipulationStyle) {

        var manipulationStyle;
        var checkboxes = $("#rplayerDownloads input[type='checkbox']");

        for (const [key, value] of Object.entries(checkboxes)) {
            try {
                if (manipulationStyle == "invert") {
                    setTimeout(function() {
                        $(value).click();
                    }, key * 24);
                }

                if (manipulationStyle == "reset") {

                    if (!$(value).contents().prevObject[0].checked) {
                        $(value).click();
                    }
                }
            } catch (error) {}
        }
    }

    downloadAction() {
        $("#rplayerDownloads .button.rplayerDownloadSubmit").addClass("loading disabled");
        $("#rplayerDownloads input").attr('disabled', 'disabled');
        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .downloadsButton").css({
            opacity: "0.3"
        });
        this.getslideshowImages();
        this.getCoverImage();
        this.getOtherFiles();
        this.getUnsortedFiles();
        this.getMp3Files();
        this.getMp3ImagesFiles();
        this.getMp3IconsFiles();
        this.checkDataAndContinue();
    }

    getslideshowImages() {
        for (const [key, value] of Object.entries(this.download.slideshowImages)) {
            this.getFileData(value);
        }
    }

    getFileExtension(file) {
        var file;
        return file.split('.').pop();
    }

    getCoverImage() {
        var value = this.download.coverImage;
        if (value.download) {
            this.getFileData(value);
        }
    }
    
    getOtherFiles() {
        for (const [key, value] of Object.entries(this.download.others)) {
            for (const [key2, value2] of Object.entries(value.files)) {
                this.getFileData(value2);
            }
        }
    }

    getUnsortedFiles() {
        for (const [key, value] of Object.entries(this.download.unsorted)) {
            this.getFileData(value);
        }
    }
    
    getMp3Files() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getFileData(value);
        }
    }

    numberOfOthersFiles() {
        var number = 0;
        
        // attachments
        for (const [key, value] of Object.entries(this.download.others)) {
            for (const [key2, value2] of Object.entries(value.files)) {
                number += 1;
            }
        }
        for (const [key2, value2] of Object.entries(this.download.unsorted)) {
            number += 1;
        }

        // cover image
        number += 1;

        // slideshow images
        if ($("#rplayerCheckboxDownloadBundleOptions_SlideshowImages").is(":checked")) {
            number += this.download.slideshowImages.length;
        }

        return number;
    }
    
    checkDataAndContinue() {
        var that = this;
        setTimeout(function() {
            var countOfFiles           = Object.keys(that.download.mp3).length + that.numberOfOthersFiles() - that.numberOfUnwantedFiles();
            var countOfDownloadedFiles = 0;

            // check mp3 files and included media
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if (
                    value.data !== undefined &&
                    value.imgData !== undefined &&
                    value.iconData !== undefined
                ) {
                    countOfDownloadedFiles += 1;
                }
            }

            // check attachments
            for (const [key, value] of Object.entries(that.download.others)) {
                for (const [key2, value2] of Object.entries(value.files)) {
                    if (
                        value2.data !== undefined
                    ) {
                        countOfDownloadedFiles += 1;
                    }
                }
            }
            for (const [key2, value2] of Object.entries(that.download.unsorted)) {
                if (
                    value2.data !== undefined
                ) {
                    countOfDownloadedFiles += 1;
                }
            }

            // check cover image
            if (
                that.download.coverImage.data !== undefined
            ) {
                countOfDownloadedFiles += 1;
            }

            // check slideshow images
            for (const [key, value] of Object.entries(that.download.slideshowImages)) {
                if (
                    value.data !== undefined
                ) {
                    countOfDownloadedFiles += 1;
                }
            }

            $('#rplayerDownloadsProgress').css("opacity","1");
            if (parseInt(countOfDownloadedFiles) != parseInt(countOfFiles)) {
                that.checkDataAndContinue();                
                
                $('#rplayerDownloadsProgress').progress({
                    percent: parseInt(countOfDownloadedFiles) / parseInt(countOfFiles) * 100
                });
            
            
            } else {

                setTimeout(function() {
                    $('#rplayerDownloadsProgress').progress({
                        percent: 100
                    });
                },7000);
                setTimeout(function() {
                    $('#rplayerDownloadsProgress').css({
                        opacity: "0",
                    });
                    $('#rplayerDownloadsProgress .bar').css({
                        backgroundColor: "var(--currentTime)"
                    });
                    $('#rplayerDownloadsProgress').progress({
                        value: 1
                    });
                },14000);
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

    getFileData(value) {
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
                        that.getFileData(value);
                        console.log("[RPlayer]","I'm trying to get the data for the file \"" + value.fileName + "\" again.");
                    },
                    success: function(data) {
                        value.data = data;
                        console.log("[RPlayer]","I got the data for the file \"" + value.fileName + "\".");
                    }
                });
            },6000);
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

        // if (!value.imgData && value.download == true) {
        if (!value.imgData) {
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
        
        // mp3 files
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.download == false) {
                numOfUnwanteds += 1;
                delete value.data;
            }
        }

        // attachments
        for (const [key, value] of Object.entries(this.download.others)) {
            for (const [key2, value2] of Object.entries(value.files)) {
                if (value2.download == false) {
                    numOfUnwanteds += 1;
                    delete value2.data;
                }
            }
        }
        for (const [key2, value2] of Object.entries(this.download.unsorted)) {
            if (value2.download == false) {
                numOfUnwanteds += 1;
                delete value2.data;
            }
        }

        // cover image
        if (this.download.coverImage.download == false) {
            numOfUnwanteds += 1;
            delete this.download.coverImage.data;
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
            } else {
                if (value.imgData) {
                    if ($("#rplayerCheckboxDownloadBundleOptions_TracksImages").is(":checked")) {
                        var imageName = value.mediaName + "." + this.getFileExtension(value.srcImgFile);
                        zip.folder(baseFolderName + "/images").file(imageName,value.imgData);
                    }
                }
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

        // ZIP other files
        for (const [key, value] of Object.entries(this.download.others)) {
            for (const [key2, value2] of Object.entries(value.files)) {
                if (value2.data) {
                    zip.folder(baseFolderName).folder("attachments").folder(value.mediaName).folder(value2.folder).file(value2.fileName,value2.data);
                }
            }
        }

        // ZIP unsorted files
        for (const [key2, value2] of Object.entries(this.download.unsorted)) {
            if (value2.data) {
                zip.folder(baseFolderName).folder("attachments").folder(value2.folder).file(value2.fileName,value2.data);
            }
        }

        // ZIP cover image
        if (this.download.coverImage.data) {
            zip.folder(baseFolderName).file(this.download.coverImage.fileName,this.download.coverImage.data);
        }

        // ZIP slideshow images
        for (const [key, value] of Object.entries(this.download.slideshowImages)) {
            if (value.data) {
                zip.folder(baseFolderName).folder("images").folder("slideshow").file(value.fileName,value.data);
                delete value.data;
            }
        }

        // ZIP anything else
        for (const [key, value] of Object.entries(this.justZipIt)) {
            if (value.data) {
                zip.folder(baseFolderName).folder(value.folder).file(value.fileName,value.data);
                delete value.data;
            }
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
        "\n<h1>" + this.rplayerCfg.app.localization.phrases["downloadsAlbumInfoHead"] + "</h1>" +
        "\n<br>" +
        "\n<table cellpadding='0' cellspacing='0'>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\n" + this.rplayerCfg.app.localization.phrases["downloadsAlbum"] + ":&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>" +
                    "\n<a href='" + this.rplayerObj.getURLAddress() + "'>\n" +
                        this.rplayerCfg.album.info.name +
                    "\n</a>" +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\n" + this.rplayerCfg.app.localization.phrases["downloadsAuthor"] + ":&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.composer +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\n" + this.rplayerCfg.app.localization.phrases["downloadsYear"] + ":&nbsp;" +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.year +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th>" +
                    "\n" + this.rplayerCfg.app.localization.phrases["downloadsDuration"] + ":&nbsp;" +
                "\n</th>" +
                "\n<td>\n" +
                    this.rplayerObj.secondsToTime(this.rplayerObj.audioObject.duration) +
                "\n</td>" +
            "\n</tr>" +
            (
                (this.rplayerCfg.album.info.label) ?
                "\n<tr>" +
                    "\n<th style='text-align: left'>" +
                        "\n" + this.rplayerCfg.app.localization.phrases["downloadsLabel"] + ":&nbsp;" +
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
                        "\n" + this.rplayerCfg.app.localization.phrases["downloadsCopyright"] + ":&nbsp;" +
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
        "\n<h2>" + this.rplayerCfg.app.localization.phrases["downloadsTracklist"] + "</h2>\n" +
        this.getTracklist() +
        "\n<h2>" + this.rplayerCfg.app.localization.phrases["downloadsArtUrls"] + "</h2>\n" +
        this.getUrls();

        return this.getHtmlBody(this.rplayerCfg.app.localization.phrases["downloadsAlbumInfoHead"],html);
    }

    getUrls() {
        var html = "<ul>";

        for (const [key, value] of Object.entries(this.rplayerCfg.album.info.miniIcons)) {
            html +=
            "<li>" +
                "[<a href=\"" + value.url + "\" target=\"" + value.target + "\">" + value.name + "</a>]" +
            "</li>";
        }
        html += "</ul>";

        return html;
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

        html += "\n<div style=\"width: 100%; overflow: auto;\">"
        html += "\n<table class='nowrap' cellspacing='0' cellpadding='0'>";
        for (var key in this.tnames) {
            if (key == 0) {
                tDuration = that.rplayerObj.secondsToTime(that.splits[parseInt(key) + 1]);
            } else if (key < that.tnames.length - 1) {
                tDuration = that.rplayerObj.secondsToTime(that.splits[parseInt(key) + 1] - that.splits[parseInt(key)]);
            } else {
                tDuration = that.rplayerObj.secondsToTime(that.rplayerObj.audioObject.duration - that.splits[parseInt(key)]);
            }

            html +=
            "\n<tr>" +
            "\n<th style='text-align: left;'>" +
            this.tnames[key] +
            "\n&nbsp;\n</th>\n<td>(" +
            tDuration +
            ")\n</td>" +
            // info, lyrics
            (
                (
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].words ||
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info
                ) ?
                    "\n<td>" +
                    (
                        (
                            this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info
                        ) ? 
                        "&nbsp;[<a href='tracks/" + this.tnames[key] + ".htm'>" + this.rplayerCfg.app.localization.phrases["downloadsInformation"] + "</a>]" : 
                        ""
                    ) +
                    (
                        (
                            this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].words
                        ) ? 
                        "&nbsp;[<a href='lyrics/" + this.tnames[key] + ".htm'>" + this.rplayerCfg.app.localization.phrases["downloadsLyrics"] + "</a>]" : 
                        ""
                    ) +
                    "\n</td>"
                : "\n<td>\n</td>"
            ) +
            // ISRC codes
            (
                (
                    this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info.isrc
                )
                ? "\n<td>&nbsp;" + this.rplayerCfg.app.localization.phrases["downloadsIsrcCode"] + ": " + this.rplayerObj.obj2array(this.rplayerCfg.album.tracks)[key][1].info.isrc + "</td>"
                : ""
            ) +
            "\n</tr>";
        }
        html += '\n</table>';
        html += "\n</div>";

        return html;
    }

    putID3(song) {
        var song;
        const writer = new ID3Writer(song.data);
        
        var COMM = song.comment;
        var TIT2 = song.mediaName
        var TPE1 = [song.composer]
        var TALB = this.rplayerCfg.album.info.name
        var TPE2 = this.rplayerCfg.album.info.composer
        var TCON = song.genres
        var TPUB = song.label
        var TCOP = song.copyright
        var TLAN = song.lang
        var TBPM = song.bpm
        var TSRC = song.isrc
        var TYER = this.rplayerCfg.album.info.year

        writer
            .setFrame('TRCK', song.trackNumber)
            .setFrame('COMM', COMM)
            .setFrame('TIT2', TIT2)
            .setFrame('TPE1', TPE1)
            .setFrame('TALB', TALB)
            .setFrame('TPE2', TPE2)
            .setFrame('TCON', TCON)
            .setFrame('TPUB', TPUB)
            .setFrame('TCOP', TCOP)
            .setFrame('TLAN', TLAN)
            .setFrame('TBPM', TBPM)
            .setFrame('TSRC', TSRC)
            .setFrame('TYER', TYER)

        if ($("#rplayerCheckboxDownloadBundleOptions_ImagesToMp3").is(":checked")) {
            writer.setFrame('APIC', {
                type: 3,
                data: song.imgData,
                description: ''
            });
        }

        // Images to separate files
        if ($("#rplayerCheckboxDownloadBundleOptions_TracksImages").is(":checked")) {
            var i = this.justZipIt.length;
            this.justZipIt[i] = {};

            this.justZipIt[i].fileName = song.mediaName + "." + this.getFileExtension(song.srcImgFile);
            this.justZipIt[i].folder = "images";
            this.justZipIt[i].data = song.imgData;
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
}

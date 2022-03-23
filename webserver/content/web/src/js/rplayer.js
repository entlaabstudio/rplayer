/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.modules/rplayer.conf.js";
import RPlayer     from "./rplayer.modules/rplayer.core.js";
import QrCode      from './foreign/qrcode-generator-es6/qrcode.js';

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg,QrCode);

// optional modules

import RPlayerVisual    from "./rplayer.modules/rplayer.visual.js";
import RPlayerInfo      from "./rplayer.modules/rplayer.info.js";
import RPlayerSlideshow from "./rplayer.modules/rplayer.slideshow.js";
import RPlayerDownloads from "./rplayer.modules/rplayer.downloads.js";

new RPlayerVisual(RPObj,QrCode);
new RPlayerInfo(RPObj,QrCode);
new RPlayerSlideshow(RPObj);
new RPlayerDownloads(RPObj,QrCode);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

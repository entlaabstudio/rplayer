/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.modules/rplayer.conf.js?v=01934-YATSU-2202120128";
import RPlayer     from "./rplayer.modules/rplayer.core.js?v=01934-YATSU-2202120128";
import QrCode      from './foreign/qrcode-generator-es6/qrcode.js?v=01934-YATSU-2202120128';

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg);
var QrCod = new QrCode(0,'H');

// optional modules

import RPlayerVisual    from "./rplayer.modules/rplayer.visual.js?v=01934-YATSU-2202120128";
import RPlayerInfo      from "./rplayer.modules/rplayer.info.js?v=01934-YATSU-2202120128";
import RPlayerSlideshow from "./rplayer.modules/rplayer.slideshow.js?v=01934-YATSU-2202120128";

new RPlayerVisual(RPObj,QrCod);
new RPlayerInfo(RPObj);
new RPlayerSlideshow(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

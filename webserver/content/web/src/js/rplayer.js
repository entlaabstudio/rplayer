/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.modules/rplayer.conf.js?v=12439-YATSU-2202120128";
import RPlayer     from "./rplayer.modules/rplayer.core.js?v=12439-YATSU-2202120128";
import QrCode      from './foreign/qrcode-generator-es6/qrcode.js?v=12439-YATSU-2202120128';

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg,QrCode);

// optional modules

import RPlayerVisual    from "./rplayer.modules/rplayer.visual.js?v=12439-YATSU-2202120128";
import RPlayerInfo      from "./rplayer.modules/rplayer.info.js?v=12439-YATSU-2202120128";
import RPlayerSlideshow from "./rplayer.modules/rplayer.slideshow.js?v=12439-YATSU-2202120128";

new RPlayerVisual(RPObj,QrCode);
new RPlayerInfo(RPObj,QrCode);
new RPlayerSlideshow(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

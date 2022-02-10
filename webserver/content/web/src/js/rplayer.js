/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.modules/rplayer.conf.js?v=01528";
import RPlayer     from "./rplayer.modules/rplayer.core.js?v=01528";

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg);

// optional modules

import RPlayerVisual    from "./rplayer.modules/rplayer.visual.js?v=01528";
import RPlayerInfo      from "./rplayer.modules/rplayer.info.js?v=01528";
import RPlayerSlideshow from "./rplayer.modules/rplayer.slideshow.js?v=01528";

new RPlayerVisual(RPObj);
new RPlayerInfo(RPObj);
new RPlayerSlideshow(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

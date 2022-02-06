/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.modules/rplayer.conf.js?v=01326";
import RPlayer     from "./rplayer.modules/rplayer.core.js?v=01326";

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg);

// optional modules

import RPlayerVisual from "./rplayer.modules/rplayer.visual.js?v=01326";
import RPlayerInfo   from "./rplayer.modules/rplayer.info.js?v=01326";

new RPlayerVisual(RPObj);
new RPlayerInfo(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

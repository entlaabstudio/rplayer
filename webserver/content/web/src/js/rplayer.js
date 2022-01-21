/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.conf.js";
import RPlayer     from "./rplayer.core.js";

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg);

// optional modules

import RPlayerVisual from "./rplayer.visual.js";

new RPlayerVisual(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

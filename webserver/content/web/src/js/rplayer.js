/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

// mandatory modules

import RPlayerConf from "./rplayer.conf.js?v=01024";
import RPlayer     from "./rplayer.core.js?v=01024";

var RPCfg = new RPlayerConf();
var RPObj = new RPlayer(RPCfg);

// optional modules

import RPlayerVisual from "./rplayer.visual.js?v=01024";
import RPlayerInfo   from "./rplayer.info.js?v=01024";

new RPlayerVisual(RPObj);
new RPlayerInfo(RPObj);

console.log("------------------------------------");
console.log("This is RPlayer");
console.log("Version: " + RPCfg.conf.app.version + " (" + RPCfg.conf.app.date + ")");
console.log("Programming: Robert Rajs (rajs.info)");
console.log("------------------------------------");

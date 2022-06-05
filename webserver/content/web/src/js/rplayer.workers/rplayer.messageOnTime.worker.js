// importScripts('./../../../src/js/rplayer.workers/rplayer.messageOnTime.worker.slave.js');

onmessage = function(e) {
    console.log('Message received from main script',e.data);
}

setInterval(function() {
    postMessage("ahoj");
},3000);

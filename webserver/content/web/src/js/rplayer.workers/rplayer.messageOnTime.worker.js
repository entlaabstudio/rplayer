// importScripts('./../../../src/js/rplayer.workers/rplayer.messageOnTime.worker.slave.js');

onmessage = function(e) {
    console.log('Message received from main script',e.data);
}


const request = indexedDB.open("RPlayerDB");
let db;

request.onupgradeneeded = function() {
    const db = request.result;
    const store = db.createObjectStore("audioObject", {keyPath: "var"/*, autoIncrement: true*/});
};

request.onsuccess = function() {
    setInterval(function() {
        db = request.result;

        const tx = db.transaction("audioObject", "readwrite");
        const store = tx.objectStore("audioObject");

        postMessage("ahoj");
        console.log(store.get("curTime"));
    },3000);
}

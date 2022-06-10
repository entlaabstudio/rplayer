onmessage = function(e) {
    if (e.data.branch !== undefined) {
        cssSelector = e.data.branch.cssSelector;
        commands = e.data.branch.commands;
    }
    if (e.data.currentTime !== undefined) {
        currentTime = e.data.currentTime * 1000;
    }
}

initInterval = setInterval(function() {
    if (
        typeof cssSelector !== "undefined" &&
        typeof commands !== "undefined" &&
        typeof currentTime !== "undefined"
    ) {
        run();
        clearInterval(initInterval);
    }
}, 100);

function run() {
    setInterval(function() {
        getKeys();
        console.log("momentální čas:",currentTime,"klíč:");
    },2000);
}

function getKeys() {
    var wasSet = false;
    for (const [key, value] of Object.entries(commands)) {
        if (value.time <= currentTime) {
            keyNow = parseInt(key);
            timeNow = commands[keyNow].time;
            wasSet = true;
        } else {
            break;
        }
    }

    console.log(wasSet);
    if (wasSet === false) {
        delete keyNow;
        delete keyFuture;
        delete timeNow;
        delete timeFuture;
        console.log("DELETE");
    } else {
        if (typeof commands[keyNow + 1] !== "undefined") {
            keyFuture = keyNow + 1;
            timeFuture = commands[keyFuture].time;
        } else {
            delete keyFuture;
        }
    }
    
    console.log("keyNow", keyNow);
    console.log("keyFuture", keyFuture);
    console.log("timeNow", timeNow);
    console.log("timeFuture", timeFuture);
}


const request = indexedDB.open("RPlayerDB");
let db;

request.onupgradeneeded = function() {
    const db = request.result;
    const store = db.createObjectStore("audioObject", {keyPath: "var"/*, autoIncrement: true*/});
};

request.onsuccess = function() {
    // setInterval(function() {
    //     db = request.result;

    //     const tx = db.transaction("audioObject", "readwrite");
    //     const store = tx.objectStore("audioObject");

    //     postMessage("ahoj");
    //     console.log(store.get("curTime"));
    // },3000);
}

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
        console.log(
            "momentální čas:",
            currentTime,
            "klíč nyní:",
            getKeyNow(),
            "klíč potom:",
            getKeyFuture()
        );
    },2000);
}

function getKeyNow() {
    var keyNow = -1;
    var arrayLength = commands.length;
    for (var i = 0; i < arrayLength; i++) {
        if (commands[i].time <= currentTime) {
            keyNow = i;
        } else {
            break;
        }
    }
    return {
        keyNow: keyNow,
        timeNow: ((keyNow > -1) ? commands[keyNow].time : null)
    };
}

function getKeyFuture() {
    var keyFuture = -1;
    var keyNow = getKeyNow().keyNow;
    if (commands[keyNow + 1] !== undefined) {
        keyFuture = keyNow + 1;
    }
    return {
        keyFuture: keyFuture,
        timeFuture: ((keyFuture > -1) ? commands[keyFuture].time : null)
    };
}


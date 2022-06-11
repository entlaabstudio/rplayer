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
        lastKeyNow = {
            keyNow: -1,
            timeNow: null
        };

        lastKeyOffset1 =
        lastKeyOffset2 = {
            keyOffset: -1,
            timeOffset: null
        };
        run();
        clearInterval(initInterval);
    }
}, 100);

function run() {
    setInterval(function() {
        if (
            lastKeyOffset1.keyOffset < 0 ||
            currentTime > lastKeyOffset2.timeOffset ||
            currentTime < lastKeyNow.timeNow
        ) {
            lastKeyNow = getKeyNow();
            lastKeyOffset1 = getKeyOffset(1);
            lastKeyOffset2 = getKeyOffset(2);
            returnMessage();
        } else {
            if (
                currentTime > lastKeyOffset1.timeOffset
            ) {
                next();
                returnMessage();
            }
        }
    }, 1);
}

function returnMessage() {
    if (lastKeyNow.keyNow != -1) {
        postMessage({
            cssSelector: cssSelector,
            command: commands[lastKeyNow.keyNow].css
        });
    } else {
        postMessage({
            cssSelector: cssSelector,
            command: commands[0].css
        });
    }
}

function next() {
    lastKeyNow = {
        keyNow: lastKeyOffset1.keyOffset,
        timeNow: lastKeyOffset1.timeOffset,
    };
    lastKeyOffset1 = {
        keyOffset: ((lastKeyOffset1.keyOffset + 1 > commands.length - 1) ? Infinity : lastKeyOffset1.keyOffset + 1),
        timeOffset: ((lastKeyOffset1.keyOffset + 1 > commands.length - 1) ? Infinity : commands[lastKeyOffset1.keyOffset + 1].time)
    }
    lastKeyOffset2 = {
        keyOffset: ((lastKeyOffset2.keyOffset + 1 > commands.length - 1) ? Infinity : lastKeyOffset2.keyOffset + 1),
        timeOffset: ((lastKeyOffset2.keyOffset + 1 > commands.length - 1) ? Infinity : commands[lastKeyOffset2.keyOffset + 1].time)
    }
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

function getKeyOffset(offset) {
    var keyOffset = Infinity;
    var keyNow = getKeyNow().keyNow;
    if (commands[keyNow + offset] !== undefined) {
        keyOffset = keyNow + offset;
    }
    return {
        keyOffset: keyOffset,
        timeOffset: ((keyOffset < Infinity) ? commands[keyOffset].time : Infinity)
    };
}

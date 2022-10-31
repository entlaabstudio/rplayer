/**
 * @file Message on time worker for RPlayer web application
 * @version 1
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

wasInit = false;
onmessage = function(e) {
    if (e.data.branch !== undefined) {
        target = e.data.branch.target;
        commands = e.data.branch.commands;
    }
    if (e.data.currentTime !== undefined) {
        currentTime = e.data.currentTime * 1000;
    }
    run();
}

initInterval = setInterval(function() {
    if (
        typeof target !== "undefined" &&
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
        wasInit = true;
        clearInterval(initInterval);
    }
}, 100);

function run() {
    if (wasInit) {
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
            }
        }
    }
}

function returnMessage() {
    if (lastKeyNow.keyNow != -1) {
        postMessage({
            target: target,
            command: commands[lastKeyNow.keyNow]
        });
    } else {
        postMessage({
            target: target,
            command: commands[0]
        });
    }
}

function next() {
    lastKeyNow = {
        keyNow: lastKeyOffset1.keyOffset,
        timeNow: lastKeyOffset1.timeOffset,
    };
    lastKeyOffset1 = {
        keyOffset: ((lastKeyOffset1.keyOffset + 1 > Object.keys(commands).length - 1) ? Infinity : lastKeyOffset1.keyOffset + 1),
        timeOffset: ((lastKeyOffset1.keyOffset + 1 > Object.keys(commands).length - 1) ? Infinity : commands[lastKeyOffset1.keyOffset + 1].time)
    }
    lastKeyOffset2 = {
        keyOffset: ((lastKeyOffset2.keyOffset + 1 > Object.keys(commands).length - 1) ? Infinity : lastKeyOffset2.keyOffset + 1),
        timeOffset: ((lastKeyOffset2.keyOffset + 1 > Object.keys(commands).length - 1) ? Infinity : commands[lastKeyOffset2.keyOffset + 1].time)
    }
    returnMessage();
}

function getKeyNow() {
    var keyNow = -1;
    for (const [key, value] of Object.entries(commands)) {
        if (value.time <= currentTime) {
            keyNow = key;
        } else {
            break;
        }
    }
    return {
        keyNow: parseInt(keyNow),
        timeNow: ((parseInt(keyNow) > -1) ? parseInt(commands[keyNow].time) : null)
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

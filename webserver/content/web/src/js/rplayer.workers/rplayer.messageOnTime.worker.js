importScripts('./../../../src/js/rplayer.workers/rplayer.messageOnTime.worker.slave.js');

onmessage = function(e) {
    console.log('Message received from main script',e.data);
}

function createBinaryTree() {
    console.log("Binární strom");
    binaryTree = {};
}

connect = function(e) {
    console.log("CONNECT");
}

setInterval(function() {
    postMessage("ahoj");
},3000);









// var BST = new BinarySearchTree({16: "ahoj",90: "nazdar",50: "čus"});
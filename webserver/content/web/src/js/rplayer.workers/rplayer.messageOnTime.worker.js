importScripts('./../../../src/js/rplayer.workers/rplayer.messageOnTime.worker.slave.js');

onmessage = function(e) {
    console.log('Message received from main script',e);
    if (e.data.command == "pushData") {
        messagesData = e.data.messagesOnTime;
        console.log("[RPlayerWorker:messagesOnTime]","Messages data has been passed.",messagesData);
    }
    // var workerResult = 'Result: ' + (e.data);
    // console.log('Posting message back to main script');
    // postMessage(workerResult);
}

postMessage("ahoj");
const request = indexedDB.open("RPlayerDB");
let db;

console.log(request);
    
request.onsuccess = function(event) {
    
    
    setInterval(function() {
        db = request.result;
        var keyRangeValue = IDBKeyRange.upperBound(1000);
        const tx = db.transaction("rplayerCssTimeModifyer", "readonly");
        const objectStore = tx.objectStore('rplayerCssTimeModifyer');
        var objectStoreRequest = objectStore.getAll();
        objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
            var cursor = event.target.result;
            // report the success of our request
            // console.log(event);
        
            var myRecord = objectStoreRequest.result;
            console.log(cursor,objectStore,myRecord);
        };
        // const cursor = event.target.result;
        // console.log(cursor,tx);
        // console.log(cursor.value);
    }, 2000);

}

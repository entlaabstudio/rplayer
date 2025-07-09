/*! FileSaver.js (modernized)
 *  A saveAs() FileSaver implementation without deprecated FileSystem API.
 *  Original by Eli Grey, modernized by RPlayer project
 *  License: X11/MIT
 */

var saveAs = saveAs
  || (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  || (function(view) {
    "use strict";

    if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
      return;
    }

    var doc = view.document;
    var URL = view.URL || view.webkitURL || view;

    var dispatch = function(filesaver, event_types, event) {
      event_types = [].concat(event_types);
      for (var i = 0; i < event_types.length; i++) {
        var listener = filesaver["on" + event_types[i]];
        if (typeof listener === "function") {
          try {
            listener.call(filesaver, event || filesaver);
          } catch (ex) {
            (view.setImmediate || view.setTimeout)(function() {
              throw ex;
            }, 0);
          }
        }
      }
    };

    var FileSaver = function(blob, name) {
      var filesaver = this;
      var type = blob.type;
      var object_url;

      filesaver.readyState = filesaver.INIT;

      if (!name) name = "download";

      object_url = URL.createObjectURL(blob);

      var a = doc.createElement("a");
      a.href = object_url;
      a.download = name;
      a.style.display = "none";
      doc.body.appendChild(a);
      a.click();

      setTimeout(function() {
        URL.revokeObjectURL(object_url);
        doc.body.removeChild(a);
      }, 100);

      filesaver.readyState = filesaver.DONE;
      dispatch(filesaver, ["writestart", "progress", "write", "writeend"]);
    };

    var FS_proto = FileSaver.prototype;

    FS_proto.abort = function() {
      this.readyState = this.DONE;
      dispatch(this, "abort");
    };

    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;

    FS_proto.error =
    FS_proto.onwritestart =
    FS_proto.onprogress =
    FS_proto.onwrite =
    FS_proto.onabort =
    FS_proto.onerror =
    FS_proto.onwriteend =
      null;

    return function(blob, name) {
      return new FileSaver(blob, name);
    };

  }(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content));

if (typeof module !== "undefined") module.exports = saveAs;

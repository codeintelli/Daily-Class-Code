const fs = require("fs");
const EventEmitter = require("events");
const events = new EventEmitter();
const demo = require("./demo");
fs.readFile("./../2.FS_MODULES/1. SYNC/Sync.txt", "UTF-8", (err, data) => {
  if (err) {
    events.emit("error");
    console.log(err);
  } else {
    events.emit("open");
    console.log(data);
  }
  events.emit("close");
  console.log("hello world");
});

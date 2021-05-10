const EventEmitter = require("events");
const events = new EventEmitter();

events.on("open", () => {
  console.log("ur file is open");
});
events.on("close", () => {
  console.log("ur file is closed");
});
events.on("error", () => {
  console.log("ur file got error");
});

events.emit("open");
events.emit("close");
events.emit("error");

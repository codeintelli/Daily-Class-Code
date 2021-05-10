const EventEmitter = require("events");
const e = new EventEmitter();
// define the events before its register
e.on("sayHello", () => {
  console.log("we are printing this event on console.");
});
e.on("sayHello", () => {
  console.log("we are printing this alter ");
});
e.on("sayHello", () => {
  console.log("we are printing ");
});

// parameterized events
e.on("checkpage", (sc, msg) => {
  console.log(`your page code is ${sc} and this page will ${msg}`);
});

// register the events
e.emit("sayHello");

e.emit("checkpage", 200, "ok");

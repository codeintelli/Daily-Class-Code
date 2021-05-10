const e = require("events");
const events = new e();
// var events = require("events");
// var eventEmitter = new events.EventEmitter();
// console.log("before the event");

// // listing the event
// events.on("sayHello", () => {
//   // here you can see this the event will arise first after the another function or method will be called
//   console.log("Hello every one");
// });
// console.log("after listing the event");

// // creating a event
// events.emit("sayHello");

// console.log("after the event");

// if we are calling any event after declaring or creating then it will not display output
// the concept is quite simple emitter object emit named events that cause previously registered to be called so an emitter object besically has two main features name events and registered and unregistered listen function

// 2nd way
// more then one events of same name
events.on("sayHello", () => {
  console.log("your name is shiva");
});
events.on("sayHello", () => {
  console.log("opening popup");
});
events.on("sayHello", () => {
  console.log("printing alert");
});
events.emit("sayHello");

// 3rd example
// parameterized events
events.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});
events.emit("checkPage", 200, "ok");
events.emit("checkPage", 404, "error");



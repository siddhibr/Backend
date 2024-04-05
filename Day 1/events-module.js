const EventEmitter = require("events");

const event = new EventEmitter();

const handlerFunction = () => {
  console.log("hello");
};

const byeEventhandlerFunction = () => {
  console.log("bye");
};

event.on("HelloEvent", handlerFunction);
event.on("ByeEvent", byeEventhandlerFunction);

event.emit("HelloEvent");
event.emit("ByeEvent");
const EventEmitter = require("events");

const emitter = new EventEmitter();

// 1. Define an Event Listener 
emitter.on("GREET" , ()=>{
    console.log("Hello World")
})

// 2. Trigger ( emit)

emitter.emit("GREET")
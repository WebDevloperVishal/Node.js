const EventEmitter = require("events");
const fs = require("fs")
const emitter = new EventEmitter();

const eventCounts = {
    login:0
}

const logFile = "eventLogs.json"

if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile , "utf-8")
    Object.assign(eventCounts , JSON.parse(data))
    console.log(data)
}


function saveCounts(){
    fs.writeFileSync(logFile , JSON.stringify(eventCounts , null , 2))
}

// 1. login
emitter.on("LOGIN" , (username)=>{
    eventCounts.login++;
    console.log(`${username} logged in successfully✅`)
    saveCounts()
})

// 2. logout

// 3. purchase

// 4. profileupdate

emitter.emit("LOGIN" , "vishal")

console.log(eventCounts)

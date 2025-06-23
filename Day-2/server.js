const http = require("http");

const server = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.end("Hello from homepage")
    }

    else if(req.url === "/about"){
        res.end("Hello from about page")
    }

    else{
        console.log("No url found")
    }
    
})

server.listen(8000 , ()=>{
    console.log("Server is running on port 8000")
})
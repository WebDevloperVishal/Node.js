const fs = require("fs")

console.log("Hello from top level code")//1

setTimeout(()=>console.log("Hello from timer-1") , 0); //3

setImmediate(()=>console.log("Hello from setImmediate")) //4

fs.readFile("sample.txt" , "utf-8" , ()=>{
    console.log("IO polling")
}) //5

console.log("Hello from top level code 2") //2
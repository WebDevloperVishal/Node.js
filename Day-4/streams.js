// const {Readable , Writable} = require("stream");

// const readableStream = new Readable({
//     highWaterMark:2,
//     read(){}
// });

// readableStream.on("data" , (chunk)=>{
//     console.log('Data is coming' , chunk.toString())
//     writableStream.write(chunk)
// })

// console.log(readableStream.push("H"))

// const writableStream = new Writable({
//     write(s){
//         console.log("Writing" , s.toString())
//     }
// })
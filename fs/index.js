const fs = require("fs")
// async - non blocking
// sync - blocking 

//* read
// fs.readFile("sample.txt" , "utf-8" , (err , data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data)
// })

//* write
// fs.writeFileSync("sample.txt" , "Hello world this is sample content")

// fs.writeFile("sample.txt" , "Hello world this is updated content" , (err)=>{
//     console.log(err)
// })


// update
fs.appendFile("sample.txt" , "\n I am new line" , (err)=>{
    console.log(err)
})

// delete

fs.unlink("sample.txt" , (err)=>{
    console.log(err)
}) 
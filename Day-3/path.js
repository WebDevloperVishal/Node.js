const path = require("path");

// console.log(__dirname)
// console.log(__filename)

// 1. Join()

const filePath = path.join(__dirname ,"data" , "students" , "data.txt");
// console.log(filePath)

// 1. parse()
// console.log(path.parse(filePath))
// 

// console.log(path.resolve(filePath))

console.log(path.extname(filePath))

console.log(path.basename(filePath))

console.log(path.dirname(filePath))
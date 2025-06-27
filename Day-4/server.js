const http = require("http");
const fs = require("fs");
const {Transform , pipeline} = require("stream");
const { error } = require("console");
const server = http.createServer((req, res) => {
  //
  if (req.url !== "/") {
    return res.end();
  }

  // Downloading big file wrong way
  // const file = fs.readFileSync("./sample2.txt")
  // return res.end(file)

  // Downloading big files in right way
  // const readableStream = fs.createReadStream("./sample2.txt");

  // // readable stream ---> writeable stream
  // readableStream.pipe(res);

  // Copy big files using bad way
  //   const file = fs.readFileSync("./sample2.txt");

  //   fs.writeFileSync("./output.txt");

  // const readstream = fs.createReadStream("./sample2.txt");

  // const writestream = fs.createWriteStream("./output.txt");

  // readstream.on("data" , (chunk)=>{
  //     console.log("Chunk:" , chunk.toString())
  //     writestream.write(chunk.toString())
  // })

  // String Processing
  const sampleFileStream = fs.createReadStream("./easy.txt");
  const outputWritableStream = fs.createWriteStream("./output_easy.txt");

  const transformStream = new Transform({
    transform(chunk , encoding , callback){
      console.log("chunk" , chunk.toString())
          const uppercaseString = chunk.toString().toUpperCase();
    const finalString = uppercaseString.replaceAll(/suraj/gi, "sigma");

    callback(null , finalString)
    }
  })

  // sampleFileStream.on("data", (chunk) => {
  //   console.log("data received", chunk.toString());

  //   const uppercaseString = chunk.toString().toUpperCase();
  //   const finalString = uppercaseString.replaceAll(/suraj/gi, "sigma");

  //   outputWritableStream.write(finalString);
  // });

  sampleFileStream.pipe(transformStream).pipe(outputWritableStream)

  pipeline(sampleFileStream , transformStream , outputWritableStream , (error)=>{
    console.log(error)
  })

  res.end();
});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
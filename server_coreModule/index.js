const path = require('path')
const os = require('os')
const fs = require('fs')
const myPath = 'E:/Web/Vanila-Node-js/server_coreModule/index.js'
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// console.log(os.platform());
// console.log(os.cpus());

// fs.writeFileSync('myFile.txt', 'Hello World')
// fs.appendFileSync('myFile.txt', ' How are you')

// const data = fs.readFileSync('myFile.txt')
//when we read a sync file we get a buffer, this is a problem, if wee solve this problem we use "toString" methosd
// console.log("Buffer Data: ", data);
// console.log("Normal Data: ", data.toString());

fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
})



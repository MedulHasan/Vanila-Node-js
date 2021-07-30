const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/bufferData.txt`);
const ourWriteData = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteData.write(chunk)
// })

ourReadStream.pipe(ourWriteData)
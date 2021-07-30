const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/bufferData.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
})
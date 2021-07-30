const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const readData = fs.createReadStream(__dirname + '/bufferData.txt', 'utf8');
    readData.pipe(res);
})
server.listen(3000);
console.log('Server is running on port 3000');
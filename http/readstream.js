const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("<html><head><title>Form</title><head>");
        res.write('<body><form method="post" action="/process"><input name="message"/></form></body></html>');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
})

server.listen(3000);
console.log('Server is running on port 3000');
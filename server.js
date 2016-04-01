var http = require('http');
http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sou um servidor criado pelo Node.js!\n');

    
}).listen(process.env.PORT, process.env.IP);
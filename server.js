var http = require('http');
var app = require("./config/express");

http.createServer(app).listen(  process.env.PORT , process.env.IPs, function (){
    
    console.log("Server Express no ar !!")
});

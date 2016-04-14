var http = require('http');
var app = require("./config/express");

http.createServer(app).listen(  3000 , "127.0.0.1", function (){
    
    console.log("Server Express no ar !!")
});
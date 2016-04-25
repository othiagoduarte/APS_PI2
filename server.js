var http = require('http');
var app = require('./config/express')();



http.createServer(app).listen(app.get('port'),app.get('host'),function()	
{
	console.log('Express running in port: ' + app.get('port'));


});
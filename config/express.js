
var express = require("express");

module.exports = function (){

    var app = express.app();

    app.use(express.static('./aps_pi2/public'));
    
    return app;
};


module.exports =function(app){

	var controller = app.controllers.home;
    
    app.get('/',controller.index);
    app.get('/home',controller.index);
    app.get('/index',controller.index);
}
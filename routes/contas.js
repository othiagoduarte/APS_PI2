module.exports =function(app){

	var controller = app.controllers.contas;
    
    app.get('/contas',controller.index);
	app.get('/contas/listar',controller.index);
    app.get('/contas/nova',controller.nova);
}
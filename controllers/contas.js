module.exports = function()
{
    var controller = {};
        
    controller.index = function(req,res)
    {
        res.render('contas/listar',{nome:'Express'});
    }
        
    controller.nova = function(req,res)
    {
        res.render('contas/nova',{nome:'Express'});
    }
    
    return controller;
}
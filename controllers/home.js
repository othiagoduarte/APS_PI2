module.exports = function()
{
    var controller = {};
    
    controller.index = function(req,res)
    {
        res.render('home',{nome:'Express'});
    }
    
    controller.home = function(req,res)
    {
        res.render('home',{nome:'Express'});
    }
    
    controller.localizacao = function(req,res)
    {
        res.render('localizacao',{nome:'Express'});
    }
    
    return controller;
}
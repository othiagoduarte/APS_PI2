angular.module('noexcell')

.controller('listarcontroller', function($scope, $http, $log) 
{	
    firebase_atualizar_lista_contas($scope);
    
});


var firebase_atualizar_lista_contas = function(escopo){
	
    var lista=[];

	var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//");
	   
	fireBaseNoexcell.child("contas").on("value", function(snapshot) {
        
        escopo.contas =snapshot.val();
       // escopo.contas.splice(0,1)
	    escopo.$apply();
          
	});
	
};





angular.module('noexcell')

.controller('listarController', function($scope, $http, $log) 
{	
    $scope.carregamentoTotal = 50;
    
    $scope.descricao = "teste";
    atualizar_lista_contas_firebase($scope);
    


});

var atualizar_lista_contas_firebase = function(escopo){
	
    var lista=[];

	var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//");
	   
	fireBaseNoexcell.child("contas").on("value", function(snapshot,lista) {
        
        escopo.contas =snapshot.val();
        escopo.contas.splice(0,1)
	    escopo.$apply();
          
	});
	
};



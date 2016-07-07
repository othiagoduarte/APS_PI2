angular.module('noexcell')

.controller('listarcontroller', function($scope, $http, $log) 
{	
    firebase_atualizar_lista_contas($scope);
    $scope.aberto = 0; 
    $scope.total = 0;
    $scope.total = 0;  
        
    
});


var firebase_atualizar_lista_contas = function(escopo){
	
    escopo.contas =[];

	var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//");
	   
	fireBaseNoexcell.child("contas").on("value", function(snapshot) {
        
      snapshot.forEach(function(childSnapshot) {
                
                var conta = childSnapshot.val();
                
                conta.vencimento = new Date(conta.vencimento);
                
                if (conta.pago != null & ! conta.pago  ){
                    escopo.aberto+= conta.valor;   
                }  
                  
                escopo.total+= conta.valor;
                escopo.contas.push(conta); 
                escopo.$apply();          
            });    
        
	
    });
	
};





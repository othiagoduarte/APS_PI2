angular.module('noexcell')

.controller('novacontroller', function($scope, $http, $log) 
{	
	$log.info("acessando novaController");
    
    $scope.categorias = [] 
    $scope.selected ="1"
	
	  $scope.salvar = salvar;
	  $scope.cancelar = cancelar;
    
    $scope.atualizarCategoria = firebase_atualizar_lista_categorias;
    
});
var salvar = function($scope){
	    
    var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//contas");
    var newMessageRef = fireBaseNoexcell.push();
    
    newMessageRef.set({ nome: "TESTE" , categoria: "1" ,datavencimento: "01/01/2016" ,pago:"s"});
    
    
    console.log("salvar");
	    
};

var cancelar =  function($scope){
	    console.log("cancelar");
};

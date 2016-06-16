angular.module('noexcell')

.controller('novacontroller', function($scope,  $log) 
{		
    //Propriedades
    $scope.novaConta = novaContaLimparDados();
    $scope.categorias = listarCategorias();
    
    //Functions
    $scope.salvar = salvar;
	$scope.cancelar = cancelar;  
      
    $log.info("acessando novaController");
    
});

var salvar = function(){
	
    $scope = this;
    
    console.log($scope.novaConta);
    
    if ($scope.novaConta != null) {
        
        var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//contas");
        var newMessageRef = fireBaseNoexcell.push();

        newMessageRef.set($scope.novaConta); 
        console.log("Conta cadastrada com sucesso");      
        $scope.novaConta = novaContaLimparDados();
    }
};

var cancelar =  function(){
    
    $scope = this;
    
    console.log($scope.novaConta);
    
    $('#novaconta').closeModal();
};

var novaContaLimparDados = function(){
    return {   nome:"Conta"
             , categoria : { id:0,nome:"Categoria"} 
             , valor : 999
             , datapagamento : "01/01/2000"
             , datavencimento : "01/01/2000"
             , pago : false    
          };
}

var cancelarFB =  function($scope){
	    console.log("cancelar Firebase");
};

var listarCategorias = function(){
  
  return [   {id:1,nome:"Moradia"}
            ,{id:2,nome:"Transporte"}
            ,{id:3,nome:"Educação"}
            ,{id:4,nome:"Compras"}
            ,{id:5,nome:"Despesas"}
            ,{id:6,nome:"Cartão de crédito"}
        ];
};
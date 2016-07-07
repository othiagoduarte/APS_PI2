angular.module('noexcell')

.controller('novacontroller', function($scope,  $log) 
{		
    $scope.novaConta = null;
    $scope.categorias = listarCategorias();
    
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
        var conta = {
            nome : $scope.novaConta.nome,
            valor : $scope.novaConta.valor,
            categoria :{ id: $scope.novaConta.categoria.id, nome: $scope.novaConta.categoria.nome },
            vencimento :$scope.novaConta.vencimento.getTime()
        }
        
        newMessageRef.set(conta); 
        cancelar();
    }
};

var cancelar =  function(){
    
    $scope = this;
    $scope.novaConta = null ;
    $('#novaconta').closeModal();
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
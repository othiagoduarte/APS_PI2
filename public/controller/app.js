angular.module('noexcell', []);
	
var firebase_atualizar_lista_categorias = function($scope){

  var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//");
  var list = []; 
    fireBaseNoexcell.child("contas//categorias").on("value", function(snapshot) {


    list = snapshot.val();
    
    $scope.categorias = list
    $scope.$apply();
    
    
    console.log("lista de categoria atualizada");
      
    });

};
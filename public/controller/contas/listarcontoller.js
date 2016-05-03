angular.module('noexcell')

.controller('listarController', function($scope, $http, $log) 
{	
	var fireBaseNoexcell = new Firebase("https://noexcell.firebaseio.com//");
	
	fireBaseNoexcell.child("contas").on("value", function(snapshot) {
        
        $scope.contas =  snapshot.val();
        $scope.$apply();
    
	    
	});
    	
});
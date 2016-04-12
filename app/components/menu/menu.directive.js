
app.directive("menu",['menuService',function(menuService){
		return {
			restrict: 'AE',
			controller: function($scope){
				$scope.teas = menuService;
			},
			templateUrl: "app/components/menu/menu.view.html"
		};
}]);
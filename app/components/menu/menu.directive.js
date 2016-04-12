
app.directive("menu",['menuService',function(menuService){
		return {
			restrict: 'AE',
			controller: function($scope){
				$scope.teas = menuService;
				console.log($scope.teas);
				console.log('Hello World');
			},
			templateUrl: "app/components/menu/menu.view.html"
			// link: function(scope, element, attrs){

			// }
		};
}]);
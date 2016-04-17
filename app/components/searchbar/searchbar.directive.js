
app.directive("searchbar",['searchbarService', 'menuService',function(searchbarService, menuService){
		return {
			restrict: 'AE',
			scope: false,
			controller: function($scope){
				$scope.categories = searchbarService;
				console.log($scope.categories);
			},
			templateUrl: "app/components/searchbar/searchbar.view.html"
		};
}]);


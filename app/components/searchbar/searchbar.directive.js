
app.directive("searchbar",['searchbarService', 'menuService',function(searchbarService, menuService){
		return {
			restrict: 'AE',
			scope: false,
			controller: function($scope){
				var teas = menuService;
				var categoriesArray = [];
					for(var i=0; i<teas.length; i++){
						categoriesArray.push(teas[i].categories);
					}
				var categoriesRepeated = categoriesArray.reduce(function(a,b){
						return a.concat(b);
				});
				$scope.categories = 
						categoriesRepeated.filter(function(element, position){
								return categoriesRepeated.indexOf(element) == position;
						});

				$scope.checkoutPage = function(){
					
				};


				console.log($scope.categories);

				// $scope.orderOption = 'price';
				// $scope.reverse = true;
				// $scope.order = function(string) {
				//   $scope.reverse = ($scope.orderOption === string) ? !$scope.reverse : false;
				//   $scope.orderOption = string;
				// };
		
			},
			templateUrl: "app/components/searchbar/searchbar.view.html"
		};
}]);


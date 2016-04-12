
app.directive("navbar",['navbarService',function(navbarService){
		return {
			restrict: 'AE',
			controller: function($scope){
				console.log('Hello navbar');
			},
			templateUrl: "app/components/navbar/navbar.view.html"
			// link: function(scope, element, attrs){

			// }
		};
}]);
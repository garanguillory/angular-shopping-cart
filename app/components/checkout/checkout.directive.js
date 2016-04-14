
app.directive("checkout",['checkoutService',function(checkoutService){
		return {
			restrict: 'AE',
			controller: function($scope){
				console.log("Hello checkout");
				
			},
			templateUrl: "app/components/checkout/checkout.view.html"
		};
}]);
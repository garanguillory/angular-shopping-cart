
app.directive("menu",['menuService',function(menuService){
		return {
			restrict: 'AE',
			controller: function($scope){

				$scope.teas = menuService;
				$scope.order = [];
				$scope.orderTotal = 0;

				// need to sum subTotals of individual items 

				$scope.addToBag = function(amount){
					// console.log(this.tea);
					var order = $scope.order;
					var position = order.indexOf(this.tea);
					if(order.includes(this.tea)){
							if(amount){
								order[position].quantity += amount;
								order[position].subTotal += (order[position].price * amount);
								$scope.orderTotal += (order[position].price * amount);
							} else {
								++ order[position].quantity;
								order[position].subTotal += order[position].price;
								$scope.orderTotal += order[position].price;
							}	
					} else {
							order.push(this.tea);
							var currentItem = order[order.length-1];
								if(amount){
									currentItem.quantity = amount;
									currentItem.subTotal = (amount * currentItem.price);
									$scope.orderTotal += currentItem.subTotal;
								} else {
									currentItem.quantity = 1;
									currentItem.subTotal = currentItem.price;
									$scope.orderTotal += currentItem.price;
								}
					}
					console.log($scope.order);
					console.log($scope.orderTotal);
					
				};

			},
			templateUrl: "app/components/menu/menu.view.html"
		};
}]);
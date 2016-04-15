
app.directive("menu",['menuService',function(menuService){
		return {
			restrict: 'AE',
			controller: function($scope){

				$scope.teas = menuService;
				$scope.order = [];
				$scope.orderTotal = 0;
				$scope.editQuantity = false;

				$scope.addToBag = function(amount){
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
				};
			// need to add 'Edit' and 'Remove' functions to corresponding buttons
			// put these functions in 'menuService'
			// put remove and edit functions in 'checkoutService' then into the checkout directive

			$scope.edit = function(){
				$scope.editQuantity = true;
			};

			$scope.save = function(){
				$scope.editQuantity = false;
				$scope.orderTotal -= this.tea.subTotal;
				this.tea.subTotal = 0;
				$scope.orderTotal += (this.tea.quantity * this.tea.price);
				this.tea.subTotal = (this.tea.quantity * this.tea.price);
			};

			$scope.remove = function(){
				$scope.orderTotal -= this.tea.subTotal;
				$scope.order.splice($scope.order.indexOf(this.tea), 1);
			};

			},
			templateUrl: "app/components/menu/menu.view.html"
		};
}]);

$scope.orderTotal = 0;



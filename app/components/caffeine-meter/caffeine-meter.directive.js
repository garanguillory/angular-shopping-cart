
app.directive("caffeine",['caffeineService', 'menuService',function(caffeineService, menuService){
		return {
			restrict: 'AE',
			controller: function($scope){
				console.log("Hello caffeine-meter");
			// 	setInterval(function() {
			// 	  var newVal = Math.floor((Math.random() * 179) + 1);

			// 	  $('.gauge--3 .semi-circle--mask').attr({
			// 	    style: '-webkit-transform: rotate(' + newVal + 'deg);' +
			// 	    '-moz-transform: rotate(' + newVal + 'deg);' +
			// 	    'transform: rotate(' + newVal + 'deg);'
			// 	   });				
			// 	}, 1000);
				
			},
			templateUrl: "app/components/caffeine-meter/caffeine-meter.view.html"
		};
}]);


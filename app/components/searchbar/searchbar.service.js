
app.service('searchbarService',[ 'menuService', function(menuService){
	var teas = menuService.teas;
	var categoriesArray = [];
			for(var i=0; i<teas.length; i++){
				categoriesArray.push(teas[i].categories);
			}
	var categoriesRepeated = categoriesArray.reduce(function(a,b){
			return a.concat(b);
	});
	var categories = 
			categoriesRepeated.filter(function(element, position){
					return categoriesRepeated.indexOf(element) == position;
			});
	return categories;
}]);
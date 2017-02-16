'use strict';

 MyApp.factory('BeerService', ['$http', function($http) {

 	return {
		getBeers: function(data) {
		 	$http.get('js/beers.json').success(data);
		}
	}
 }]);
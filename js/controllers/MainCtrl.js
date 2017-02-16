'use strict';
	
 MyApp.controller('MainCtrl', ['$scope', 'BeerService', function($scope, BeerService){
 	$scope.beers = [];
	
	BeerService.getBeers(function(results){
		$scope.beers = results;
	});

 }]);
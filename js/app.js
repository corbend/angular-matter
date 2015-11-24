var mainApp = angular.module('parklon', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'ui.grid'])

mainApp.controller('mainCtrl', function($scope, $http, uiGridConstants) {
	$scope.test = "1";
	$scope.gridOptions = {
		data: [{name: 'A'}, {name: 'B'}, {name: 'C'}],
		fastWatch: true,

		columnDefs: [
			{width: 120, name: 'A', field: 'name'},
			{width: 120, name: 'B', field: 'name'},
			{width: 120, name: 'C', field: 'name'},
			{width: 120, name: 'D', field: 'name'}
		]
	}
})

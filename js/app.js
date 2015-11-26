var mainApp = angular.module('parklon', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'ui.grid'])

mainApp.controller('mainCtrl', function($scope, $http, uiGridConstants, $mdDialog) {
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

	$scope.breadcrumbs = {
		crumbs: [
			'Home', 'Products', 'Details'
		]
	}

	$scope.showConfirm = function($event) {

		var dialog = {
			title: 'Удаление записи',
			content: 'Вы уверены что хотите удалить запись?',
			ok: 'Yes',
			cancel: 'No'
		}
		$mdDialog.show(
            $mdDialog.confirm()
            .title(dialog.title)
            .content(dialog.content)
            .ok(dialog.ok)
            .cancel(dialog.cancel)
            .targetEvent($event)
        );
	}
})

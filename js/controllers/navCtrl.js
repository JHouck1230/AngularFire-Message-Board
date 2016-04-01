'use strict';

var app = angular.module('forumApp');

app.controller('navCtrl', function($scope, $authObj, UserService) {
	$scope.authObj = $authObj;

	$scope.$watch(UserService.authData, newAuthData => {
		$scope.authData = UserService.authData;
		console.log('navCtrl watch: ', $scope.authData);
	});

	$scope.logout = () => {
		$scope.authObj.$unauth();
		$scope.authData = null;
	}

});
'use strict';

var app = angular.module('forumApp');

app.controller('forumCtrl', function($scope, UserService, ForumFactory) {

	$scope.postImages = [];

	$scope.$watch(UserService.authDatas, newAuthData => {
		$scope.authData = UserService.authData;
		console.log('forumCtrl watch: ', $scope.authData);
	});

	$scope.addPost = function(user) {
		$scope.postImages.push($scope.authData.password.profileImageURL);
		$scope.forum = ForumFactory.addPost($scope.authData, $scope.user.newPost)
	};

});
'use strict';

var app = angular.module('forumApp');

app.controller('authCtrl', function($scope, $state, $authObj, ProfileFactory, UserService) {
	$scope.state = $state.current.name;
	$scope.authObj = $authObj;

	$scope.authObj.$onAuth(authData => {
		$scope.authData = authData;
		$scope.profile = ProfileFactory(authData);
		UserService.set(authData);
	});

  $scope.submit = function(user) {
    if($scope.state === 'register') {
      if(user.password !== user.password2) {
        $scope.user.password = $scope.user.password2 = '';
        alert("Passwords don't match");
      } else {
      	$scope.authObj.$createUser(user)
      	.then(userData => $scope.authObj.$authWithPassword(user))
      	.then(authData => {
      		$scope.authData = authData
      		$scope.user = {};
      		$state.go('forum');
      	})
      	.catch(err => console.error(err));
      }
    } else {
    	$scope.authObj.$authWithPassword(user)
    	.then(authData => {
    		$scope.authData = authData;
    		$scope.user = {};
    		$state.go('forum');
	    })
    	.catch(err => console.error(err));
    };
	};
});
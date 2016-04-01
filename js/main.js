'use strict';

var app = angular.module('forumApp', ['firebase', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: '/html/auth.html',
		controller: 'authCtrl'
	})
	.state('register', {
		url: '/register',
		templateUrl: '/html/auth.html',
		controller: 'authCtrl'
	})
	.state('forum', {
		url: '/',
		templateUrl: '/html/forum.html',
		controller: 'forumCtrl'
	})

	$urlRouterProvider.otherwise('/');
});

app.constant('FB_URL', 'https://fire-forum-app.firebaseio.com/');

app.filter('titlecase', function() {
	return function(input) {
		return input[0].toUpperCase() + input.slice(1).toLowerCase();
	};
});
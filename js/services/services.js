'use strict';

var app = angular.module('forumApp');

app.service('UserService', function($rootScope) {
	this.set = (authData) => this.authData = authData;
	this.get = () => this.authData;
});

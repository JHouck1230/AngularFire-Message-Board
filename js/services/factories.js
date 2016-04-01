'use strict';

var app = angular.module('forumApp');

app.factory('$authObj', function($firebaseAuth, FB_URL) {
	var ref = new Firebase(FB_URL);
	return $firebaseAuth(ref);
});

app.factory('ProfileFactory', function($firebaseArray, FB_URL) {
	return function(authData) {
		if(!authData) return {};
		var profilesRef = new Firebase(FB_URL + 'profiles');
		var forumsRef = profilesRef.child('forums');
		var userRef = profilesRef.child(authData.uid);
		return $firebaseArray(userRef);
	};
});

app.factory('ForumFactory', function($firebaseArray, FB_URL) {
	var addPost = function(authData, post) {
		if(!authData) return {};
		var userPost = {
			image: authData.password.profileImageURL,
			post: post
		}
		var profilesRef = new Firebase(FB_URL + 'profiles');
		var forumsRef = profilesRef.child('forums');
		var postsRef = forumsRef.child('posts');
		postsRef.push(userPost);
		return $firebaseArray(postsRef);
	}
	return {
		addPost: addPost
	}
})
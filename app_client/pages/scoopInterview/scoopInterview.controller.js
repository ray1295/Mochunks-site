var app = angular.module('wevativeApp');

app.controller('ScoopInterviewController', function ($rootScope) {
	var vm = this;

	vm.articleSection = 'realscoop';

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;


});

var app = angular.module('wevativeApp');

app.controller('RealTalkRelationshipController', function ($rootScope) {
	var vm = this;

	vm.articleSection = 'realtalkrelationship';

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;


});

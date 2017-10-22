var app = angular.module('wevativeApp');

app.controller('BeingChunksController', function ($rootScope) {
	var vm = this;

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;
	
	vm.articleSection = 'beingmochunks';
});

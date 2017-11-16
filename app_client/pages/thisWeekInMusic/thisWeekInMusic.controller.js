var app = angular.module('wevativeApp');

app.controller('ThisWeekInMusicController', function ($rootScope) {
	var vm = this;

	vm.articleSection = 'weekmusic';

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;
});

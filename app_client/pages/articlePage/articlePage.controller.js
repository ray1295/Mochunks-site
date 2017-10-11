var app = angular.module('wevativeApp');

app.controller('ArticlePageCtrl', function (ArticlesService, $window, $routeParams, $rootScope) {
	var vm = this;

	// Hide Navigation bar on mobile once page is loaded
	// TODO: Look for efficient solution to close the navigation bar on each page
	$rootScope.showMenu = false;

	window.scrollTo(0, 0);

	ArticlesService.getSingleArticleByID($routeParams.articleID)
		.then(function (response) {
			vm.article = response.data;
		})
		.catch(function (err) {
			alert('This article could not be loaded, please try again');
		});
});



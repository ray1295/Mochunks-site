var app = angular.module('mochunksApp');

app.controller('ArticlePageCtrl', function(ArticlesService, $window, $routeParams){
	var vm = this;

	ArticlesService.getSingleArticleByID($routeParams.articleID).then(function(response){
		vm.article = response.data;
	}).catch(function(err){
		alert('This article could not be loaded, please try again');
	})
});




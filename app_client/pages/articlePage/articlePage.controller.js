var app = angular.module('wevativeApp');

app.controller('ArticlePageCtrl', function(ArticlesService, $window, $routeParams){
	var vm = this;

	window.scrollTo( 0, 0 );

	ArticlesService.getSingleArticleByID($routeParams.articleID).then(function(response){
		vm.article = response.data;
	}).catch(function(err){
		alert('This article could not be loaded, please try again');
	})
	

});



var app = angular.module('mochunksApp');

app.controller('TrendingController', function (ArticlesService) {
	var vm = this;

	ArticlesService.getArticlesBySection('trending').then(function (response) {
		vm.articles = response.data;
	}).catch(function (err) {
		alert("Could not load articles");
	});
	vm.fullArticle = function () {

	};
});


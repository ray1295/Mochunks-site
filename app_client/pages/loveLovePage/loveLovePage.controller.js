var app = angular.module('wevativeApp');

app.controller('LoveLoveController', function (ArticlesService) {
	var vm = this;

	ArticlesService.getArticlesBySection('wdwll').then(function (response) {
		vm.articles = response.data;
	}).catch(function (err) {
		alert("Could not load articles");
	});
	vm.fullArticle = function () {

	};
});




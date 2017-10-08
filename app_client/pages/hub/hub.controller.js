var app = angular.module('wevativeApp');

app.controller('HubController', function (ArticlesService) {
	var vm = this;

	ArticlesService.getArticlesBySection('hub').then(function (response) {
		vm.articles = response.data.results;
		console.log(vm.articles)
	}).catch(function (err) {
		alert("Could not load articles");
	});

});

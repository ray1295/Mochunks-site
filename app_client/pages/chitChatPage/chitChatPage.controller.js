var app = angular.module('mochunksApp');

app.controller('ChitChatController', function (ArticlesService) {
	var vm = this;

	ArticlesService.getArticlesBySection('chitchat').then(function (response) {
		vm.articles = response.data;
	}).catch(function (err) {
		alert("Could not load articles");
	});
	
});




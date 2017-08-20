var app = angular.module('mochunksApp');

app.controller('ChitChatController', function(ArticlesService){
	var vm = this;
	
	ArticlesService.getAllArticles().then(function(response) {
		console.log(response)
	}).catch(function(err) {
		console.log(err);
	});
	ArticlesService.getArticlesBySection('chitchat').then(function(response){
		vm.articles = response.data;
		console.log(vm.articles);
	}).catch(function(err){
		alert("Could not load articles");
		console.log("Could not load articles");
	});
});




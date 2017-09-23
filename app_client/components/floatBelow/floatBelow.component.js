var app = angular.module('mochunksApp');

function floatBelowController(ArticlesService, $q) {
	var vm = this;

	// Get latest articles for section
	var getLatestArticleArray = [ArticlesService.getLatestArticleForSection('chitchat'), ArticlesService.getLatestArticleForSection('trending'), ArticlesService.getLatestArticleForSection('wdwll'), ArticlesService.getLatestArticleForSection('askchunks')];

	$q.all(getLatestArticleArray).then(function (response) {
		vm.latestArticles = [];
		console.log(response);
		response.forEach(function (article) {
			if (article.data && article.data !== "undefined") vm.latestArticles.push(article.data);
		});
		console.log(vm.latestArticles);
	}).catch(function () {

	});
}

app.component('mochunksFloatBelow', {
	templateUrl: 'components/floatBelow/floatBelow.component.html',
	controller: floatBelowController,
	controllerAs: 'vm'
});


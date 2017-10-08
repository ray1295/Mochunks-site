var app = angular.module('wevativeApp');

function subArticleListController (ArticlesService, $q) {
	var vm = this;

	// Get latest articles for section
	var getLatestArticleArray = [ArticlesService.getLatestArticleForSection('chitchat'), ArticlesService.getLatestArticleForSection('trending'), ArticlesService.getLatestArticleForSection('wdwll'), ArticlesService.getLatestArticleForSection('askchunks')];

	$q.all(getLatestArticleArray).then(function (response) {
		vm.latestArticles = [];
		response.forEach(function (article) {
			if (article.data && article.data !== 'undefined') vm.latestArticles.push(article.data);
		});
	}).catch(function () {

	});
}

app.component('subArticleList', {
	templateUrl: 'components/sub-article-list/sub-article-list.component.html',
	controller: subArticleListController,
	controllerAs: 'vm',
	css: 'components/sub-article-list/sub-article-list.component.css'
});


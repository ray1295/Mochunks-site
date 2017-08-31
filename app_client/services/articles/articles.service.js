var app = angular.module('mochunksApp');

app.service('ArticlesService', function ($http) {
	var getAllArticles = function () {
		return $http.get('/articles');
	};

	var getArticlesBySection = function (section) {
		return $http.get('articles/' + section);
	};

	var getSingleArticleByID = function (articleID) {
		return $http.get('article/' + articleID);
	};
	
	var getRecommendedArticles = function() {
		return $http.get('articles/view/recommended');
	};

	return {
		getAllArticles: getAllArticles,
		getArticlesBySection: getArticlesBySection,
		getSingleArticleByID: getSingleArticleByID,
		getRecommendedArticles: getRecommendedArticles
	}
});


var app = angular.module('wevativeApp');

app.service('ArticlesService', function ($http) {
	var getAllArticles = function (page) {
		return $http.get('/articles/' + page);
	};

	var getArticlesBySection = function (section, page) {
		return $http.get('articles/' + section + '/' + page);
	};

	var getSingleArticleByID = function (articleID) {
		return $http.get('article/' + articleID);
	};

	var getRecommendedArticles = function () {
		return $http.get('articles/view/recommended');
	};

	var getLatestArticleForSection = function (section) {
		return $http.get('/article/view/latest/' + section);
	};

	return {
		getAllArticles: getAllArticles,
		getArticlesBySection: getArticlesBySection,
		getSingleArticleByID: getSingleArticleByID,
		getRecommendedArticles: getRecommendedArticles,
		getLatestArticleForSection: getLatestArticleForSection
	}
});


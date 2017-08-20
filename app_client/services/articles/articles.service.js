var app = angular.module('mochunksApp');

app.service('ArticlesService', function($http) {
	var getAllArticles = function(){
		return $http.get('/articles');
	};
	
	var getArticlesBySection =  function(section){
		return $http.get('articles/' + section)
	};
	
	return {
		getAllArticles: getAllArticles,
		getArticlesBySection: getArticlesBySection
	}
});


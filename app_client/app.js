var app = angular.module("mochunksApp", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<mochunks-home></mochunks-home>'
			})
			.when('/landingPage', {
				templateUrl: 'pages/landingPage/landingPage.view.html'
			})
			.when('/aboutPage', {
				templateUrl: 'pages/aboutPage/aboutPage.view.html'
			})
			.when('/articlePage', {
				templateUrl: 'pages/articlePage/articlePage.view.html'
			})
			.when('/chitChatPage', {
				templateUrl: 'pages/chitChatPage/chitChatPage.view.html',
				controller: 'ChitChatController',
				controllerAs: 'vm'
			})
			.when('/askChunksPage', {
				templateUrl: 'pages/askChunksPage/askChunksPage.view.html'
			})
			.when('/beingChunksPage', {
				templateUrl: 'pages/beingChunksPage/beingChunksPage.view.html'
			})
			.when('/contactPage', {
				templateUrl: 'pages/contactPage/contactPage.view.html'
			})
			.when('/entertainmentPage', {
				templateUrl: 'pages/entertainmentPage/entertainmentPage.view.html'
			})
			.when('/fashionPage', {
				templateUrl: 'pages/fashionPage/fashionPage.view.html'
			})
			.when('/inStylePage', {
				templateUrl: 'pages/inStylePage/inStylePage.view.html'
			})
			.when('/lifestylePage', {
				templateUrl: 'pages/lifestylePage/lifestylePage.view.html'
			})
			.when('/lookBookPage', {
				templateUrl: 'pages/lookBookPage/lookBookPage.view.html'
			})
			.when('/loveLovePage', {
				templateUrl: 'pages/loveLovePage/loveLovePage.view.html'
			})
			.when('/musicPage', {
				templateUrl: 'pages/musicPage/musicPage.view.html'
			})
			.when('/relationshipPage', {
				templateUrl: 'pages/relationshipPage/relationshipPage.view.html'
			})
			.when('/trendingPage', {
				templateUrl: 'pages/trendingPage/trendingPage.view.html'
			})
			.when('/article/view/:articleID', {
				templateUrl: 'pages/articlePage/articlePage.view.html',
				controllerAs: 'vm',
				controller: 'ArticlePageCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

app.controller("mainCtrl", function () {
	var vm = this;
});

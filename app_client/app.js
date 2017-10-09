var app = angular.module('wevativeApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angularCSS'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<home></home>'
			})
			.when('/landingPage', {
				templateUrl: 'pages/landingPage/landingPage.view.html'
			})
			.when('/aboutPage', {
				templateUrl: 'pages/aboutPage/about.view.html'
			})
			.when('/celebReview', {
				templateUrl: 'pages/celebReview/celebReview.view.html',
				controller: 'CelebReviewController',
				controllerAs: 'vm'
			})
			.when('/event', {
				templateUrl: 'pages/event/event.view.html',
				controller: 'EventController',
				controllerAs: 'vm'
			})
			.when('/hub', {
				templateUrl: 'pages/hub/hub.view.html',
				controller: 'HubController',
				controllerAs: 'vm'
			})
			.when('/gallery', {
				templateUrl: 'pages/gallery/gallery.view.html',
				controller: 'GalleryController',
				controllerAs: 'vm'
			})
			.when('/realTalk', {
				templateUrl: 'pages/realTalk/realTalk.view.html',
				controller: 'RealTalkController',
				controllerAs: 'vm'
			})
			.when('/scoopInterview', {
				templateUrl: 'pages/scoopInterview/scoopInterview.view.html',
				controller: 'ScoopInterviewController',
				controllerAs: 'vm'
			})
			.when('/askChunksPage', {
				templateUrl: 'pages/askChunksPage/askChunksPage.view.html',
				controller: 'AskChunksController',
				controllerAs: 'vm'
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
				templateUrl: 'pages/inStylePage/inStylePage.view.html',
				controller: 'InStyleController',
				controllerAs: 'vm'
			})
			.when('/lifestylePage', {
				templateUrl: 'pages/lifestylePage/lifestylePage.view.html'
			})
			.when('/lookBookPage', {
				templateUrl: 'pages/lookBookPage/lookBookPage.view.html',
				controller: 'LookBookCtrl',
				controllerAs: 'vm'
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


app.controller('mainCtrl', function () {
	var vm = this;
});



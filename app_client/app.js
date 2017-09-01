var app = angular.module("mochunksApp", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<mochunks-home></mochunks-home>'
			})
			.when('/landingPage', {
				templateUrl: 'pages/landingPage/landingPage.view.html'
			})
			.when('/aboutPage', {
				templateUrl: 'pages/aboutPage/about.view.html'
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
				templateUrl: 'pages/inStylePage/inStylePage.view.html',
				controller: 'InStyleController',
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
			.when('/lookImage', {
				templateUrl: 'pages/lookImage/lookImage.view.html'
			})
			.when('/lookVideo', {
				templateUrl: 'pages/lookVideo/lookVideo.view.html'
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
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
		document.getElementById("go-top").style.display = "block";
	}
	else {
		document.getElementById("go-top").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
vm.topFunction = function() {
	document.body.scrollTop = 0; // For Chrome, Safari and Opera 
	document.documentElement.scrollTop = 0; // For IE and Firefox

};

app.controller("mainCtrl", function () {
	var vm = this;
});



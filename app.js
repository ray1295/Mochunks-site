var app = angular.module("mochunksApp", []);

app.config($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/landingPage/landingpage.view.html', //
            controller: 'landingPageCtrl',
            controllerAs: 'vm',
        })
        .when('/dashboard', {
            templateUrl: 'pages/articlePage/articlePage.view.html',
            controller: 'dashboardCtrl',
            controllerAs: 'vm'
        })
        .when('/resultpage', {
            templateUrl: 'pages/resultPage/resultpage.view.html',
            controller: 'resultPageSingleURL',
            controllerAs: 'vm'
        })
        .when('/eventpage', {
            template: '<event-page></event-page>',
        })
        .when('/about', {
            templateUrl: 'pages/aboutPage/about.view.html',
            controller: 'aboutCtrl',
            controllerAs: 'vm'
        })
        .when('/accountSettings', {
            templateUrl: 'pages/accountSettings/accountsetting.view.html',
            controller: 'accountSettingCtrl',
            controllerAs: 'vm'
        })
        .when('/privacyUrl', {
            templateUrl: 'pages/privacyUrlPage/privacyUrl.view.html'
        })
        .when('/alpha', {
            templateUrl: 'pages/alphaTestPage.view.html'
        })
        .when('/admin', {
            templateUrl: 'pages/adminPage/admin.view.html',
            controller: 'adminCtrl',
            controllerAs: 'Admin'
        })
        .when('/adminEditEvent', {
            templateUrl: 'pages/adminViewEventPage/adminViewEventPage.view.html',
            controller: 'adminViewEventPageCtrl',
            controllerAs: 'Admin'
        })
        .when('/forgotPassword', {
            template: '<forgot-password></forgot-password>'
        })
        .when('/reset-password/:verification_link', {
            template: '<reset-password></reset-password>'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode({
        requireBase: false,
        enabled: true
    });
}


app.controller("mainCtrl", function() {
    var vm = this;
});

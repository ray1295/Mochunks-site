var app = angular.module('wevativeApp');

function navigationController($rootScope) {
	var vm = this;
}

app.component('navigation', {
	templateUrl: 'components/navigation/navigation.component.html',
	controller: navigationController,
	controllerAs: 'vm',
	css: 'components/navigation/navigation.component.css'
});

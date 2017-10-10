var app = angular.module('wevativeApp');

function menuXSController() {
	var vm = this;
}

app.component('menuXS', {
	templateUrl: 'components/menuXS/menuXS.component.html',
	controller: menuXSController,
	controllerAs: 'vm',
	css: 'components/menuXS/menuXS.component.css'
});

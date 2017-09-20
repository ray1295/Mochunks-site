var app = angular.module('mochunksApp');

function menuXSController() {
	var vm = this;
}

app.component('mochunksMenuXS', {
	templateUrl: 'components/menuXS/menuXS.component.html',
	controller: menuXSController,
	controllerAs: 'vm'
});


var app = angular.module('wevativeApp');

function hubController() {
	var vm = this;
}

app.component('hub', {
	templateUrl: 'components/hub/hub.component.html',
	controller: hubController,
	controllerAs: 'vm',
	css: 'components/hub/hub.component.css'
});

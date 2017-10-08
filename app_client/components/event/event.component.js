var app = angular.module('wevativeApp');

function eventController() {
	var vm = this;
}

app.component('event', {
	templateUrl: 'components/event/event.component.html',
	controller: eventController,
	controllerAs: 'vm',
	css: 'components/event/event.component.css'
});

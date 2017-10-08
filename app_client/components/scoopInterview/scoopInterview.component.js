var app = angular.module('wevativeApp');

function scoopInterviewController() {
	var vm = this;
}

app.component('scoopInterview', {
	templateUrl: 'components/scoopInterview/scoopInterview.component.html',
	controller: scoopInterviewController,
	controllerAs: 'vm',
	css: 'components/scoopInterview/scoopInterview.component.css'
});

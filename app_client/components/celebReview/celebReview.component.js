var app = angular.module('wevativeApp');

function celebReviewController() {
	var vm = this;
}

app.component('celebReview', {
	templateUrl: 'components/celebReview/celebReview.component.html',
	controller: celebReviewController,
	controllerAs: 'vm',
	css: 'components/celebReview/celebReview.component.css'
});

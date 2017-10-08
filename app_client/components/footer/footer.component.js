var app = angular.module('wevativeApp');

function footerController() {
    var vm = this;
}

app.component('footer', {
    templateUrl: 'components/footer/footer.component.html',
    controller: footerController,
    controllerAs: 'vm',
	css:'components/footer/footer.component.css'
});


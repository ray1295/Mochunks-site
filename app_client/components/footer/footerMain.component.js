var app = angular.module('wevativeApp');

function footerMainController() {
    var vm = this;
}

app.component('footerMain', {
    templateUrl: 'components/footer/footerMain.component.html',
    controller: footerMainController,
    controllerAs: 'vm',
	css:'components/footer/footerMain.component.css'
});


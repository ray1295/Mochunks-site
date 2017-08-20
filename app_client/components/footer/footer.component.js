var app = angular.module('mochunksApp');

function footerController() {
    var vm = this;
}

app.component('mochunksFooter', {
    templateUrl: 'components/footer/footer.component.html',
    controller: footerController,
    controllerAs: 'vm'
});


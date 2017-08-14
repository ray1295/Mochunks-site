var app = angular.module('mochunksApp');

function homeController() {
    var vm = this;
}

app.component('mochunksHome', {
    templateUrl: 'components/home/home.component.html',
    controller: homeController,
    controllerAs: 'vm'
});

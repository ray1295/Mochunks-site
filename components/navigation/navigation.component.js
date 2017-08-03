(function () {

    angular.module('navigationModule', [])
        .component('navigation', {
            templateUrl: '../navigation/navigation.html',
            controller: function() {
                this.name = 'hello world'
            },

        });


})();

angular.module('app', ['ng', 'ngRoute'])
    .config(['$locationProvider', ($locationProvider: ng.ILocationProvider) => {
        $locationProvider.hashPrefix('!');
    }])
    .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider.when('/view1', {
            templateUrl: './assets/templates/view1.html',
        }).when('/view2', {
            templateUrl: './assets/templates/view2.html',
        });
    }]);

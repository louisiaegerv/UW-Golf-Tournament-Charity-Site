(function () {
    //Angular
    var app = angular.module("app-event", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'Controller'
        }).
        when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        }).
        when('/team', {
            templateUrl: 'partials/team.html'
        }).
        when('/done', {
            templateUrl: 'partials/done.html'
        });
    });

    app.controller("Controller", ["$scope", "$http", Controller]);
    app.controller("RegisterController", ["$scope", "$http", "$location", RegisterController]);
}());

var rout = angular.module("myApp", ['ngRoute']);

rout.config(function ($routeProvider) {
    $routeProvider.when('/', {
        //template: "Welcome user!"
        templateUrl : "Routes.html"
    })
    .when('/anotherPage', {
        template: "Welcome user, another page!"
    })
        .when('/homePage', {
            templateUrl:'Home.html'
        })
        .when('/helloPage', {
            templateUrl: 'Hello.html'
        })
    .otherwise({
        redirectTo:'/'
    });
});
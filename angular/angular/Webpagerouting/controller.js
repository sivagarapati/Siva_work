var app = angular.modular('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        template: "helloWorld!"
    })
    .when('/firstPage',{
        template: "firstPage.html"
    })
});
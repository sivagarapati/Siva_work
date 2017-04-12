


var myapp=angular.module("myApp",['ngRoute']);

myapp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateurl: "Index.html"
        })
        .when("/Home", {
            templateurl: "Views/Home.html", controller: "HomeCtrl", title: "Home"
        })
        .when("/Services",
        { templateurl: "Views/Services.html", controller: "ServicesCtrl", title: "Services" })
        .when("/Contact",
        { templateurl: "Views/Contact.html", controller: "ContactCtrl", title: "Contact" })
        .when("/About",
        { templateurl: "Views/About.html", controller: "AboutCtrl", title: "About" })
        .otherwise("/", { templateurl: "Index.html" });
});


myapp.controller("HomeCtrl", function ($scope) {

});

myapp.controller("ServicesCtrl", function ($scope) {

});

myapp.controller("ContactCtrl", function ($scope) {
});

myapp.controller("AboutCtrl", function ($scope) {

});
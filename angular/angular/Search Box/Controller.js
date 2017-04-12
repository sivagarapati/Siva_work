var app = angular.module('myApp', []);



app.controller("people", function($scope, $http) {
    var self = this;
    //$http.get("http://127.0.0.1/../data.json")
    $http.get("http://localhost:3000/records")
        .then(function(response) {
            $scope.persons = response.data;
        });
});
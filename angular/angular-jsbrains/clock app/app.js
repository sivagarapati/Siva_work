var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
    var CurrentDate = new Date();
    $scope.timestring = CurrentDate.toTimeString();
    $scope.updateTime=function(){
        var CurrentDate = new Date();
    $scope.timestring = CurrentDate.toTimeString();
    }
});
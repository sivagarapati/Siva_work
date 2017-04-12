var app = angular.module("myApp", []);

app.provider("date", function() {
    var greet;
    return {
        setGreeting: function(value) {
            greet = value;
        },
        $get: function() {
            return {
                showDate: function() {
                    var date = new Date();
                    return greet + " Its " + date.getHours();
                },
                devshowDate: function() {
                    var date = new Date();
                    return date.getHours();
                }
            }
        }
    }
});


app.config(function(dateProvider) {
    var time = dataProvider.$get().devshowDate();
    if (time > 0 && tme < 12) {
        dataProvider.setGreeting("Good Morning!");
    } else if (time > 12 && time < 17) {
        dataProvider.setGreeting("Good day!");
    } else if (time > 17 && time < 21) {
        dateProvider.setGreeting("Good Evening!");
    } else {
        dateProvider.setGreeting("Good Night!");
    }
});
//$route
//$routeProvider for dataProvider in config

app.controller("providerCtrl", function($scope, date) {
    $scope.greetMessage = date.showDate();
});
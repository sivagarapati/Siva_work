var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/dashboard', {
            //conditional routing
            resolve: {
                "check": function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function() {
        //$rootScope attaches all of the objects to global objects
        //$rootScope.thisName = 'something';

        //var uname = $scope.username;
        //var password = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            //window.location.hash= '#/dashboard';
            //$rootScope.uname = $scope.username;
            //$rootScope.password = $scope.password;
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        } else {
            alert('wrong stuff');
        }
    };
});
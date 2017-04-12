var app = angular.module("myApp", []);

app.controller("scopeCtrl", scopeCtrl);
app.controller("digestCtrl", digestCtrl);

function scopeCtrl($scope) {
    $scope.counter = 0;
    $scope.$watch('myText', function() {
        $scope.counter++;

    });

}

function digestCtrl($scope) {
    $scope.myRandomNumber = math.random();
    document.querySelector('input').addEventListener('click', function() {
        console.log('button clicked');
        $scope.myRandomNumber = Math.random();
        $scope.$digest();
    }, false);
}
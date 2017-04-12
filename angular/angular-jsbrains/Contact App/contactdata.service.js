(function () {
    var app = angular.module("contactApp");

    app.service("contactDataSrv", function ($http) {

        var self = this;
//to activate the json file enter json-server filename.json in terminal
        self.getcontacts = function () {
            var promise1 = $http.get("http://localhost:3000/contacts");
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }
        self.saveUser = function (userData) {
            return $http.put("http://localhost:3000/contacts/" + userData.id, userData)
                .then(function (response) {
                    console.log(response);
                })
        }
    });

})();
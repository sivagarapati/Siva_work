
//service in services
(function () {
    var app = angular.module("contactApp");

    app.service("AppServiceSrv", function (AppValueSrv) {

        this.name = AppValueSrv; //constructor mode
        this.author = "siva";
        this.version = "1.0";
        this.bulitDate = new Date().toDateString()
    });

})();

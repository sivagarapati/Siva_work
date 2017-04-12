var app = angular.module("contactApp", []);



app.controller("HeaderCtrl", HeaderCtrl);
app.controller("FooterCtrl", FooterCtrl);

//value services api
// we can also use objects in value services
// value is also used to share functions
app.value("AppDataSrv", {
    "name": "contact app",
    "author": "siva",
    "lang": "javscript",
    "version": "1.0"
});


//constant service and value service are very similar
//only difference is constant service in config the application

function perpareAppConfig(AppValueSrv) {
    var value = {};

    value.name = AppValueSrv;
    value.author = "siva";
    value.version = "1.0";
    value.bulitDate = new Date().toDateString();

    return value;
}

//Factory service
app.factory("appFactorySrv", perpareAppConfig);





function HeaderCtrl(AppDataSrv, appFactorySrv) {
    this.appName = AppDataSrv.name;
    this.appValue=appFactorySrv.name
    this.appTitle = "header controller";
}

function FooterCtrl(AppDataSrv, appFactorySrv,AppServiceSrv) {
    this.appTitle = "Footer controller";
    this.appName = AppDataSrv.version;
    this.author=AppServiceSrv.author;
    this.bulidDate = appFactorySrv.bulitDate;
}
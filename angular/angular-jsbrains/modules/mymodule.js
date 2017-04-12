var myNewModuleApp=angular.module("myNewModuleApp",[]);

app.controller("helloCtrl",helloCtrl);

function helloCtrl(){
    this.hello="hello world! from mymodule.js";
}
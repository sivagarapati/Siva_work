var module = angular.module("myApp", []);
module.controller("Ctrl1",Ctrl1)
module.controller("Ctrl2",Ctrl2) 

function Ctrl1() {
    this.test="for Ctrl1";
}

function Ctrl2(){
    this.test="for Ctrl2";
}
var app=angular.module("myApp", [])

app.controller("moreDir", moreDirectivesCtrl);

function moreDirectivesCtrl() {
    this.myList= [1,2,3,4,5,'Hello'];
    this.record=[
        {'Name':"name1" ,'age':1},
        {'Name': "name2",'age':2},
        {'Name':"name3" ,'age':3},
        {'Name': "name4",'age':4}
    ];
}

var ToDoApp=angular.module("ToDoApp",[]);
ToDoApp.controller("ToDoCtrl",ToDoCtrl);

function ToDoCtrl(){
    this.editMode=false;
    this.todolist=[
        "hello todo-1",
        "todo-2 angular",
        "todo-3 angular"
    ];
//add new todos to list
    this.addNewToDo =function (){
        this.todolist.push(this.newToDo);
        this.newToDo="";
    }
//used for edit/done and editinput for ng-show and ng-hide
    this.triggerEditMode=function (){
        this.editMode = !this.editMode;
    }
//deletethe todos
    this.deleteToDo=function (index){
        this.todolist.splice(index,1);
    }
}

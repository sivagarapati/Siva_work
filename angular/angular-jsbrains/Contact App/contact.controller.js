
(function () {
    var app = angular.module("contactApp");

    app.controller("contactCtrl", contactCtrl);


    function contactCtrl(contactDataSrv) {
        var self = this;
        self.editMode = false;
        contactDataSrv.getcontacts()
            .then(function (data) {
                self.contacts = data;
            });


        //self.contacts=response.data;

        //this.contacts = contactDataSrv.contacts;

        //this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            self.successMessage = undefined;
            self.errorMessage=undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;

            contactDataSrv.saveUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Updated";
                },
                function(){
                    self.errorMessage= "There is an Error.. Please try agian";
                }
                );
        }

        this.addContact=function(){
            this.selectContact={
                "id":new Date().toDateString()
            };
            this.editMode=true;
        }
    }

})();
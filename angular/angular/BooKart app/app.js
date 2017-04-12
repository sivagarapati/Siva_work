var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.controller("headerCtrl", function($scope, $location) {
    $scope.appName = {};
    $scope.appName.title = "BookART";
    $scope.appName.tagLine = "we have over 1 million Books";

    $scope.nav = {};
    $scope.nav.isActive = function(path) {
        if (path === $location.path()) {
            return true;
        }
        return false;
    }

});



app.config(function($routeProvider) {
    $routeProvider.when("/books", {
            templateUrl: "View/book-list.html",
            controller: "booklistCtrl"
        })
        .when("/kart", {
            templateUrl: "View/kart-list.html",
            controller: "kartlistCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});

app.factory("bookService", function() {
    //$http.get('/data/books.json').then(function(data) {
    //  $scope.books = data;

    //$http.get("http://localhost:3000/books")
    //   .then(function(response) {
    //     return response.data;
    // });
    var books = [{
            "id": "978-0641723445",
            "cat": ["book", "hardcover"],
            "name": "The Lightning Thief",
            "author": "Rick Riordan",
            "series_t": "Percy Jackson and the Olympians",
            "sequence_i": 1,
            "genre_s": "fantasy",
            "inStock": true,
            "price": 12.50,
            "pages_i": 384
        },
        {
            "id": "978-1423103349",
            "cat": ["book", "paperback"],
            "name": "The Sea of Monsters",
            "author": "Rick Riordan",
            "series_t": "Percy Jackson and the Olympians",
            "sequence_i": 2,
            "genre_s": "fantasy",
            "inStock": true,
            "price": 6.49,
            "pages_i": 304
        },
        {
            "id": "978-1857995879",
            "cat": ["book", "paperback"],
            "name": "Sophie's World : The Greek Philosophers",
            "author": "Jostein Gaarder",
            "sequence_i": 1,
            "genre_s": "fantasy",
            "inStock": true,
            "price": 3.07,
            "pages_i": 64
        },
        {
            "id": "978-1933988177",
            "cat": ["book", "paperback"],
            "name": "Lucene in Action, Second Edition",
            "author": "Michael McCandless",
            "sequence_i": 1,
            "genre_s": "IT",
            "inStock": true,
            "price": 30.50,
            "pages_i": 475
        }
    ];

    return {
        getBooks: function() {
            return books;
        }
    };
});

app.controller("booklistCtrl", function($scope, bookService, kartService) {

    $scope.books = bookService.getBooks();

    $scope.addToKart = function(book) {
        kartService.addToKart(book);
    };
});

app.factory("kartService", function() {
    var kart = [];
    return {
        getkart: function() {
            return kart;
        },
        addToKart: function(book) {
            kart.push(book);
        },
        buy: function(book) {
            alert("thanks for buying : ", book.name);
        }
    }
});

app.controller("kartlistCtrl", function($scope, kartService) {
    $scope.kart = kartService.getkart();
    $scope.buy = function(book) {
        kartService.buy(book);
    }
})
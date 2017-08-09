

//var appGCard = angular.module("appcard", ["ngRoute", "ngAnimate", "ui.bootstrap"]);



appGCard.controller("galleryCtrl", function ($scope, $http, $location, $routeParams, cardService) {

    function Card(galleryObject) {
        this.cardTitle = galleryObject.cardTitle;
        this.img = galleryObject.img;
        this.imgGallery = galleryObject.imgGallery;
        this.url = galleryObject.url;
        this.id = galleryObject.id;
        this.isSelected = false;


    }


    // Making sure that we are only loading once
    if (cardService.getAll().length === 0) {
        $scope.cards = [];
        $http.get("app/cards/gallery.json").then(function (response) {
            cardService.load(response.data);
            $scope.cards = cardService.getAll();
        });
    } else {
        $scope.cards = cardService.getAll();
    }

    $scope.openDetails = function (index) {
        $location.path("/cards/" + index)
    }

});






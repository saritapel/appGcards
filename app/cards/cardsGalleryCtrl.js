

//var appGCard = angular.module("appcard", ["ngRoute", "ngAnimate", "ui.bootstrap"]);



appcard.controller("galleryCtrl", function ($scope, $http, $location, cards, $routeParams, card) {

    function Card(galleryObject) {
        this.cardTitle = galleryObject.cardTitle;
        this.img = galleryObject.img;
        this.url = galleryObject.url;
        this.id = galleryObject.id;
         this.isSelected = false;
   
  
 }



 $http.get("app/cards/gallery.json").then(function(response) {
    $scope.cards = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.cards.push(new Card(response.data[i]))
    }
  }, function(response) {
    console.log("Error!!! " + response.statusText);
  }

   $scope.openDetails = function(index) {
        $location.path("/card/" + index)
    });


////////////////////////////////////////////////////////////


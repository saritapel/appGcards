appGCard = angular.module("appcard", ["ngRoute", "ngAnimate", "ui.bootstrap"]);



appGCard.controller("galleryCtrl", function ($scope, $http) {

    function GCgallery(galleryObject) {
        this.cardTitle = galleryObject.cardTitle;
        this.img = galleryObject.img;
        this.url = galleryObject.url;
         this.isSelected = false;
    }

 // $http.get("data/galleryCards.json").then(function (response) {
  //     $scope.GCgallery = response.data;


 // });


 $http.get("data/galleryCards.json").then(function(response) {
    $scope.GCgallery = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.GCgallery.push(new GCgallery(response.data[i]))
    }
  }, function(response) {
    console.log("Error!!! " + response.statusText);
  });

 
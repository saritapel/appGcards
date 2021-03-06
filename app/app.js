var appGCard = angular.module("appcard", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

appGCard.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/cards/cardsGallery.html",
            controller: "galleryCtrl"
        })
   
         .when("/cards/:cardIndex", {
            templateUrl: "app/cards/cardDetails.html",
            controller: "cardDetailsCtrl"
        })
});

appGCard.controller("galleryCtrl", function ($scope, $http) {

    function Card(galleryObject) {
        this.cardTitle = galleryObject.cardTitle;
        this.img = galleryObject.img;
        this.url = galleryObject.url;
         this.isSelected = false;
    }

 $http.get("app/cards/gallery.json").then(function(response) {
    $scope.cards = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.cards.push(new Card(response.data[i]))
    }
  }, function(response) {
    console.log("Error!!! " + response.statusText);
  });
/*

*/













 /////////////////////////////////////////////////////////////////////////////////////////////////



  $scope.filterBycardTitle = function(card) {

    if (!$scope.filterText) {
      return true;
    } else if (card.cardTitle.toLowerCase().indexOf($scope.filterText.toLowerCase()) != -1) {
      return true;
    } else {
      return false;
    }
  };


  $scope.liClicked = function(card) {
    // loop through actors to reset them to false
    for (var i = 0; i < $scope.card.length; i++) {
      $scope.card[i].isSelected = false;
    }

    cards.isSelected = true;
    var arr = document.getElementsByClassName("img-selected");
    for (var i = 0; i < arr.length; i++) {
      arr[i].className = "galleryImg";
    }
    $event.currentTarget.className = "img-selected";
  };

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
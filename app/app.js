appGCard = angular.module( "appcard", ["ngRoute", "ngAnimate", "ui.bootstrap"]);



appGCard.controller( "cardCtrl", function($scope, $http) {
    $http.get("data/cards.json").then(function (response) {
        $scope.cards = response.data;
    });

});
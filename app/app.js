appCardG = angular.module( "appcard", []);

appCardG.controller( "cardCtrl", function($scope, $http) {
    $http.get("data/cards.json").then(function (response) {
        $scope.cards = response.data;
    });

});
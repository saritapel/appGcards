appcard.controller("cardDetailsCtrl", function ($scope, $location, cards,   $routeParams, card) {


      // Creating a copy of the card object so changes won't be reflected on the array
    $scope.card = new Card(cards.get($routeParams.cardIndex));

    $scope.cancel = function() {
        $location.path("/cards");
    }

    $scope.update = function() {
        recipes.update($routeParams.cardIndex, $scope.card);
        $location.path("/cards");
    }

    $scope.remove = function() {
        recipes.remove($routeParams.cardIndex);
        $location.path("/cards");
    }
    
})

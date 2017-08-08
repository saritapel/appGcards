appGCard.controller("cardDetailsCtrl", function ($scope, $location,   $routeParams ,cardService, Card ) {


      // Creating a copy of the card object so changes won't be reflected on the array
    $scope.card = new Card(cardService.get($routeParams.cardIndex));

    $scope.back = function() {
        $location.path("/");
    }

    $scope.update = function() {
        recipes.update($routeParams.cardIndex );
        $location.path("/cards");
    }

    $scope.remove = function() {
        recipes.remove($routeParams.cardIndex);
        $location.path("/cards");
    }
  
    $scope.sendMail = function(a){
    console.log(a.toEmail);
    }
})


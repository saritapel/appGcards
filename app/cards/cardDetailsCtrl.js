appGCard.controller("cardDetailsCtrl", function ($scope, $location, $routeParams, cardService, Card, myCanvas) {


    // Creating a copy of the card object so changes won't be reflected on the array
    $scope.card = new Card(cardService.get($routeParams.cardIndex));

    $scope.back = function () {
        $location.path("/");
    }

    $scope.update = function () {
        recipes.update($routeParams.cardIndex);
        $location.path("/cards");
    }

    $scope.remove = function () {
        recipes.remove($routeParams.cardIndex);
        $location.path("/cards");
    }

    $scope.sendMail = function (a) {
        console.log(a.toEmail);
    }
})




/*
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("name", 50, 50);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("name2", 50, 250);

}*/
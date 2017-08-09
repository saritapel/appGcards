appGCard.controller("cardDetailsCtrl", function ($scope, $location, $routeParams, cardService, Card) {

    $scope.download = function() {
        var downloadBtn = document.getElementById("downloadButton");
        downloadBtn.href = document.getElementById("myCanvas").toDataURL();
        downloadBtn.download = "test.png";
    }


    $scope.imageLoaded = function() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("pic");
        ctx.drawImage(img, 0, 0, 400, 400);
    }


    // Creating a copy of the card object so changes won't be reflected on the array
    $scope.card = new Card(cardService.get($routeParams.cardIndex));

    $scope.back = function () {
        $location.path("/");
    }

    $scope.update = function () {
        cardService.update($routeParams.cardIndex);
        $location.path("/cards");
    }


    $scope.sendMail = function (a) {
        console.log(a.toEmail);
    }

    $scope.updateCanvas = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        if ($scope.card.name) {
            ctx.font = "30px Arial";
            var img = document.getElementById("pic");
            ctx.drawImage(img, 0, 0, 400, 400);            
            ctx.fillText($scope.card.name, 50, 50);
            if ($scope.card.sender)
                ctx.fillText($scope.card.sender, 50, 50);

        }

        if ($scope.card.sender) {
            ctx.font = "30px Arial";
            var img = document.getElementById("pic");
            ctx.drawImage(img, 0, 0, 400, 400);
            ctx.fillText($scope.card.sender, 50, 250);
            if ($scope.card.name)
                ctx.fillText($scope.card.name, 50, 50);

        }

    }
})

appGCard.directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    //call the function that was passed
                    scope.$apply(attrs.imageonload);
                });
            }
        };
    })

/*
 myCanvas();
 
 


  function myCanvas() {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById(cardIndex);
      ctx.drawImage(img, 10, 10);

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.font = "30px Arial";
      ctx.fillText("name", 50, 50);

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.font = "30px Arial";
      ctx.fillText("name2", 50, 250);

    }
    */

/*
  function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
      var img = document.getElementById("pic");
    ctx.drawImage(img, 10, 10);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("name", 50, 50);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("name2", 50, 250);

}
*/
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
        ctx.drawImage(img, 0, 0, 450, 450);
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
            ctx.font = "20px Arial";
            var img = document.getElementById("pic");
            ctx.drawImage(img, 0, 0, 450, 450);            
            ctx.fillText($scope.card.name, 300, 160);
            if ($scope.card.sender)
                ctx.fillText($scope.card.sender, 310, 340);

        }

        if ($scope.card.sender) {
            ctx.font = "20px Arial";
            var img = document.getElementById("pic");
            ctx.drawImage(img, 0, 0, 450, 450);
            ctx.fillText($scope.card.sender, 310, 340);
            if ($scope.card.name)
                ctx.fillText($scope.card.name, 300, 160);

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


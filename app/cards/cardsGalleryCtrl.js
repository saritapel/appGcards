recipeApp.controller("RecipeGalleryCtrl", function ($scope, $http, $location,, cards) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().firstName;

    // Making sure that we are only loading once
    if (cards.getAll().length === 0) {
        $scope.cardsArr = [];
        $http.get(activeUser.get().data).then(function(response) {
          cards.load(response.data);
            $scope.cardsArr = cards.getAll();
        });
    } else {
        $scope.cardsArr = cards.getAll();
    }

    $scope.openDetails = function(index) {
        $location.path("/cards/" + index)
    }
});

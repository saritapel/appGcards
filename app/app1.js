var recipeApp = angular.module("RecipeApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

recipeApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/recipes", {
            templateUrl: "app/recipe/recipeGallery.html",
            controller: "RecipeGalleryCtrl"
        })
        .when("/recipes/:recipeIndex", {
            templateUrl: "app/recipe/recipeDetails.html",
            controller: "RecipeDetailsCtrl"
        }).when("/new", {
            templateUrl: "app/recipe/newRecipe.html",
            controller: "NewRecipeCtrl"            
        })

});






// TODO: Delete this TESTINGGGGGGGGGG
recipeApp.controller("TestCtrl", function ($scope, User, activeUser, Recipe, recipes) {
    var plainUser = {
        "email": "nir@nir.com",
        "password": "nir123",
        "firstName": "Nir",
        "lastName": "Channes",
        "data": "nir-recipes.json"
    }

    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());


  
    var recipe = new Recipe(plainRecipe);
    console.log(JSON.stringify(recipe));

    recipes.add(plainRecipe);
    recipes.add(plainRecipe);
    console.log(JSON.stringify(recipes.getAll()));
    recipes.removeAll();
    console.log(JSON.stringify(recipes.getAll()));
});
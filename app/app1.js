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


    var plainRecipe = {
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Oil",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.37.1080.1080/17438558_192469144582319_1152478392830918656_n.jpg?ig_cache_key=MTQ3NTg0MDMxNjE4ODA0ODY4NA%3D%3D.2.c"
    }

    var recipe = new Recipe(plainRecipe);
    console.log(JSON.stringify(recipe));

    recipes.add(plainRecipe);
    recipes.add(plainRecipe);
    console.log(JSON.stringify(recipes.getAll()));
    recipes.removeAll();
    console.log(JSON.stringify(recipes.getAll()));
});
// Shared Card Constructor
appGCard.factory("Card", function(){
    function Card(galleryObject) {
        this.cardTitle = galleryObject.cardTitle;
        this.img = galleryObject.img;
        this.url = galleryObject.url;
         this.isSelected = false;
    }

    return Card;
});



appGCard.factory("cardService", function(Card) {
    var cardArr = [];

    var add = function(card) {
        cardArr.push(card);
    }

    var update = function(index, card) {
        cardArr[index] = card;
    }

    var remove = function(index) {
        cardArr.splice(index, 1);
    }

    var load = function(cardgalleryObjectArr) {
        for (var i = 0; i < cardgalleryObjectArr.length; i++) {
            cardArr.push(new Card(cardgalleryObjectArr[i]));
        }
    }

    var getAll = function() {
        return cardArr;
    }

    var get = function(index) {
        console.log(cardArr);
        return cardArr[index];
    }

    var removeAll = function() {
        cardArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})
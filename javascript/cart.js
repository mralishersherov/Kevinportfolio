function displayFavoriteCard() {
    card_favorite.innerHTML = "";
    products.forEach((el) => {
        card_favorite.innerHTML += getCard(el);
    })
}
displayFavoriteCard();
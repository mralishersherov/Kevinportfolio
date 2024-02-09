let card_favorite = document.querySelector('.cards_row');
let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProductsCards = JSON.parse(favoriteProductsJson) || [];
function getCard(item) {
    let { id, image, description, discount, rating, price,isNew} = item;
    let isFavorite = favoriteProductsCards.find((el) => el.id === id);
    return `
    <div class="card item  list-item">
    <div class="card_head">
    <label class="like">
  <input ${isFavorite ? "checked" : ""} type="checkbox" onClick=" addToFavorite(${id})">
  <div class="checkmark">
    <svg viewBox="0 0 256 256">
    <rect fill="none" height="256" width="256"></rect>
    <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#FFF" fill="none"></path></svg>
  </div>
</label>
        <img src=${image} alt="">
        
        <div class="akciya">-50%</div>
    </div>
    <div class="card_footer">
        <div class="summa">
            <div class="fee_with_card">
                <h3> ${price} ₽</h3>
                <p>С картой</p>
                </div>
                <div class="new__product">
                <h3>${isNew?"NEW":''}</h3>
                </div>
            <div class="payment_in_cash">
                <h4>${discount}₽</h4>
                <p>Обычная</p>
            </div>
        </div>
        <p>${description}</p>
        <div class="reiting">
            ${getRating(rating)}
        </div>
        <button onclick="addToCart(${id})">В корзину</button>
    </div>
</div>`
};
function displayFavoriteCard() {
    card_favorite.innerHTML = "";
    products.forEach((el) => {
        card_favorite.innerHTML += getCard(el);
    })
}
displayFavoriteCard();
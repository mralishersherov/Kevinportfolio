let product__row = document.querySelector('.product__row');
const new_product_row = document.querySelector('.new_product__row');
const filter_product = document.querySelector('.filter__product');
const all__product = document.querySelector('.all_product__row');
let productCardsJson = localStorage.getItem(CART);
let productCards = JSON.parse(productCardsJson) || [];

let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProductsCards = JSON.parse(favoriteProductsJson) || [];

function countProduct(){
    product__row.textContent = productCards.lenght
}

 
function addToCart(id){
    let product = products.find((el) => el.id === id);
    let chek = productCards.find((el) => el.id === id);

    if(chek) {
        product.quantity++;
        Toastify({
            text: "This is a toast",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        productCards = getCard.map((el) => {
            return el.id === id ? product : el;
            
        });
    }else{
        product.quantity = 1;
        productCards.push(product);
        Toastify({
            text: "This is a toast",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    localStorage.setItem(CART, JSON.stringify(productCards))  
}
function addToFavorite(id){
    let product = products.find((el) => el.id === id)
    let chek = favoriteProductsCards.find((el) => el.id === id)
    if(chek){
        favoriteProductsCards = favoriteProductsCards.filter((el) => el.id !== id)
    }else{
        favoriteProductsCards.push(product)
        localStorage.setItem(FAVORITE, JSON.stringify(favoriteProductsCards))
    }
   getLikeCount()
}


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
        <img src= ${image} alt="">
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

function displayCard() {
    product__row.innerHTML = "";
    products.forEach((el) => {
        product__row.innerHTML += getCard(el);
    })
}
displayCard();

function displayNewCards(){
    new_product_row.innerHTML = '';
    products.filter((el)=> {
        el.isNew = true
        new_product_row.innerHTML += getCard(el)
    })
}
displayNewCards()

function displayFilterCards(){
    filter_product.innerHTML = '';
    products.filter((el)=> {
        el.rating = 5
        filter_product.innerHTML += getCard(el)
    })
}
displayFilterCards()

function displayAllCard() {
    product__row.innerHTML = "";
    products.forEach((el) => {
        product__row.innerHTML += getCard(el);
    })
}
displayAllCard();





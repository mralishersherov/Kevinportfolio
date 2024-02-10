const data = localStorage.getItem(CART);
const cartData = JSON.parse(data);
const productRow = document.querySelector('.cart__product__row')
console.log(cartData)
function getCartProduct (item) {
  const {id, image, price, name, quantity, description } = item;
  return (
    `<div class="item">
    <div class="items">
      <img src="${image}" alt="">
      <div class="text">
      <p class="korzina_name">
        ${name}
      </p>
      <p class="price">${price} ₽ <span>за шт.</span></p>
      </div>
    </div>
    <div class="item_right">
      <button class="join_btn">
        -
      </button>
      <button class="join_btn">
        ${quantity}
      </button>
      <button class="join_btn">
        +
      </button>
    </div>
  </div>`
  )
}

function displayCard () {
  productRow.innerHTML = '';
  cartData.forEach((el)=> (
    productRow.innerHTML += getCartProduct(el)
  ))
}
displayCard()

function deleteAll(){
  localStorage.removeItem(CART);
  productRow.innerHTML ='';
}
const data = localStorage.getItem(CART);
const cartData = JSON.parse(data);
const productRow = document.querySelector('.cart__product__row')
console.log(cartData)
function getCartProduct (item) {
  const {id, image, price, name, quantity, description } = item;
  return (
    `<img src="${image}" alt="">
    <div class="start_card">
    <p class="korzina_name">
      ${name}
    </p>
    <p class="price"><span>за шт.</span></p>
    <div class="card_btn">
      <button class="join_btn">-</button>
      <button class="join_btn">${quantity}</button>
      <button class="join_btn">+</button>
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
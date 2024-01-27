let product__row = document.querySelector('.product__row');

function getCard (item){
    let { image, description, discount, rating, price, category} = item;
    return `<div class="card item">
    <div class="card_head">
        <i class="fa-regular fa-heart"></i>
        <img src= ${image} alt="">
        <div class="akciya">-50%</div>
    </div>
    <div class="card_footer">
        <div class="summa">
            <div class="fee_with_card">
                <h3> ${price} ₽</h3>
                <p>С картой</p>
            </div>
            <div class="payment_in_cash">
                <h4>${discount}₽</h4>
                <p>Обычная</p>
            </div>
        </div>
        <p>${description}</p>
        <div class="reiting" data-total-value='3'>
            <p class="reiting_star" data-item-value="1">⚝</p>
            <p class="reiting_star" data-item-value="2">⚝</p>
            <p class="reiting_star" data-item-value="3">⚝</p>
            <p class="reiting_star" data-item-value="4">⚝</p>
            <p class="reiting_star" data-item-value="5">⚝</p>
        </div>
        <button>В корзину</button>
    </div>
</div>`
};

function displayCard() {
    product__row.innerHTML = "";
    products.forEach((el)=> {    
        product__row.innerHTML += getCard(el);
    })
}
displayCard();

const reitingList = document.querySelectorAll(".reaiting_star");
const reitingListArray = Array.prototype.slice.call(reitingList);
reitingListArray.forEach(item =>{
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset;
  item.parentNode.dataset.totalValue = itemValue
  })
})

function getRating(rating){
  let res = "";
  let star = 0;
  let ful_star = parseInt(rating);
  let res_star = rating - full_star;
  star = ful_star;
  res = Array(ful_star)
  .fill("<img src='./img/card_img/full_star.svg'>")
  .join("");
  if(0.25 <= res_star && res_star <= 0.5){
  star++;
  res += "<img src='./img/card_img/half_star.svg'>"
  }
  if(0.5 < res_star){
    star++;
    res =+ "<img src='./img/card_img/full.svg'>" 
  }
  free_star = 5 - star;
  res += Array(free_star)
  .fill("<img src='./img/card_img/empty_star.svg'>")
  .join("");
  return res;
}




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoplayHoverPause: true,
    autoWidth: true,
    smartSpeed: 200,
    responsive: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
let product__row = document.querySelector('.product__row');



function getCard(item) {
    let { image, description, discount, rating, price, } = item;
    return `
    <div class="card item">
    <div class="card_head">
        <i>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
        </i>
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
        <div class="reiting">
            ${rating}
        </div>
        <button>В корзину</button>
    </div>
</div>`
};

function displayCard() {
    product__row.innerHTML = "";
    products.forEach((el) => {
        product__row.innerHTML += getCard(el);
    })
    // product__row.fillter((el, i, arr) => {
    //     product__row.innerHTML += getCard(el)
    // })
}
displayCard();

// function getNewproduct(){
//     new_product.innerHTML = "";
//     products.filter((id)=> {
//         new_product.innerHTML += getCard(id);
//     })
// } 

// getNewproduct();

function getRating(rating) {
    let res = "";
    let star = 0;
    let ful_star = parseInt(rating);
    let res_star = rating - full_star;
    star = ful_star;
    res = Array(ful_star)
        .fill("<img src='./img/card_img/full_star.svg'>")
        .join("");
        if (0.25 <= res_star && res_star <= 0.5) {
            star++;
            res += "<img src='./img/card_img/half_star.svg'>"
        }
        if (0.5 < res_star) {
            star++;
            res = + "<img src='./img/card_img/full.svg'>"
        }
        free_star = 5 - star;
        res += Array(free_star)
        .fill("<img src='./img/card_img/empty_star.svg'>")
        .join("");
        return res;
    }
    
    
    
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        autoplayHoverPause: true,
    autoWidth: true,
    smartSpeed: 200,
    responsive: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
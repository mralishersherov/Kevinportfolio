let cardinfo = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    description: "Г/Ц Блинчики с мясом вес, Россия ",
    price: 89,
    rating: 5,
    discount: 0,
    image: "./images/footer__img1.png",
    country: "Uzb",
  },
  {
    id: 2,
    name: "Apple",
    category: "Fruit",
    description: "Г/Ц Блинчики с мясом вес, Россия ",
    price: 89,
    rating: 5,
    discount: 0,
    image: "./images/card_img.png",
    country: "Uzb",
  },
  {
    id: 3,
    name: "Apple",
    category: "Fruit",
    description: "Г/Ц Блинчики с мясом вес, Россия ",
    price: 89,
    rating: 5,
    discount: 0,
    image: "./images/card_img-tree.png",
    country: "Uzb",
  }
]


let setati_row = document.querySelector(".stati__row");


function getStatiCard(item) {
  let { image, description, discound, name, price, id, rating } = item;
  return `  <div class="stati_card">
              <img src="${image}" alt="">
              <p class="card_number"> 05.03.2021</p>
              <h2 class="card_tittle">Режим использования масок и перчаток на территории магазинов</h2>
              <p class="card_text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
              <button class="card_btn">Подробнее</button>
            </div>`
}

function displayStatiCard() {
  setati_row.innerHTML = ("");
  cardinfo.forEach((el) => {
    setati_row.innerHTML += getStatiCard(el);
  })
}
displayStatiCard();
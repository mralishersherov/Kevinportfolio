let banner = [
    {
        id: 1,
        text_head:"Оформите карту «Северяночка»",
        text_footer:"И получайте бонусы при покупке в магазинах и на сайте",
        img:"./images/brraner_img/северяночка.png",
        description: "Специальные предложения"
    },
    {
        id: 2,
        text_head:"Покупайте акционные товары",
        text_footer:"И получайте вдвое больше бонусов",
        img:"./images/brraner_img/korzina.png",
        description: ""
    }

]

{/* <h1>${description}</h1> */}
function getBranner(item) {
    let { img, text_footer, text_head, description } = item;
    return `
    <div class="banner_home">
    <div class="banner">
        <div class="text">
            <h2>${text_head}</h2>
            <p>${text_footer}</p>
        </div>
        <img src= ${img} alt="">
    </div>
    </div>`
};





function displayBranner() {
    free.innerHTML = "";
    banner.forEach((el) => {
        free.innerHTML += getBranner(el);
    })
    
}
displayBranner();
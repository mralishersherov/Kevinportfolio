let vacancy__row = document.querySelector('.vacancy');
let vacansy =[
    {
        id: 1,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
    {
        id: 2,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
    {
        id: 3,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
    {
        id: 4,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
    {
        id: 5,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
    {
        id: 6,
        requirements: 'Текст про требования текст про требования текст про требования текст про требования текст про требования',
        responsibilities: 'Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности',
        conditions: 'Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия',
    },
]

function getCard(item) {
    let { id, requirements, responsibilities, conditions} = item;
    return `
    <div class="card">
                        <h2>Должность</h2>
                        <p>Требования</p>
                        <p>${requirements}</p>
                        <p>Обязанности</p>
                        <p>${responsibilities}</p>
                        <p>Условия</p>
                        <p>${conditions}</p>
                        <p>Звоните</p>
                        <div class="number">
                            <img src="../images/number.svg" alt="">
                            <p>+7 904 271 35 90</p>
                        </div>
                    </div>`
};

function displayCard() {
    vacancy__row.innerHTML = "";
    vacansy.forEach((el) => {
        vacancy__row.innerHTML += getCard(el);
    })
}
displayCard()

const foods = [
    {
        name: "Бешбармак",
        price: 350,
        description: "Улуттук кыргыз тамагы"
    },
    {
        name: "Манты",
        price: 250,
        description: "Даамдуу эттүү манты"
    },
    {
        name: "Плов",
        price: 280,
        description: "Чыгыштын даамдуу тамагы"
    },
    {
        name: "Лагман",
        price: 300,
        description: "Үйдө жасалган лагман"
    },
    {
        name: "Шорпо",
        price: 200,
        description: "Ысык жана даамдуу шорпо"
    },
    {
        name: "Самсы",
        price: 100,
        description: "Эттүү ысык самсы"
    }
];

const menuGrid = document.getElementById("menuGrid");

function showMenu() {
    menuGrid.innerHTML = foods.map((food, index) => `
        <div class="menu-card">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            <p class="price">${food.price} сом</p>
            <button class="btn" onclick="orderFood(${index})">
                Заказ берүү
            </button>
        </div>
    `).join("");
}

function orderFood(index) {
    const food = foods[index];

    const message = `Саламатсызбы! Ала-Тоо кафесинен ${food.name} заказ кылгым келет. Баасы: ${food.price} сом.`;

    const url = "https://wa.me/996508301109?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

showMenu();

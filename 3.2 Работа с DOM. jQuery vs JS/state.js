let requestURL = 'http://localhost:3000/items';
let request = new XMLHttpRequest();
let counter = 1;
let cart = [];
let idProductInCart = 1;
let chooseItem = 0; // id выбранного товара в каталоге
let btnCounterUp = document.getElementById("plus"),
    btnCounterDown = document.getElementById("minus"),
    btnShowPopup = document.querySelector(".header-cart"),
    btnHidePopup = document.querySelector(".btn-popUp"),
    btnAdd = document.querySelector(".product-add");
const UPDATE = setInterval(throwMyEvent, 200);

function getData() {
    return {
        id: 1,
        img: "url//",
        name: "Xeon 3000over",
        country: "Russia",
        year_of_issue: 1970,
        blade: "iron",
        description: "normalnormalnormalnormallnormal",
        priceForOne: 300,
        count: 10,
        allPrice: 0
    };
}

console.log(getData().name);
document.querySelector('.product-name').innerText = getData().name;
document.querySelector('.product-name').innerText = getData().name;
document.querySelector('.product-country').innerText = getData().country;
document.querySelector('.product-year').innerText = getData().year_of_issue;
document.querySelector('.product-blade').innerText = getData().blade;
document.querySelector('.product-description').innerText = getData().description;
document.querySelector('.product-price').innerText = getData().priceForOne;

// скрытие порзины
btnHidePopup.onclick = function () {
    document.querySelector(".b-popup").style.display = "none";
}
// показ корзины
btnShowPopup.onclick = function () {
    document.querySelector(".b-popup").style.display = "block";
}
// увеличение кол-во эллементов items
btnCounterUp.onclick = function () {
    if (counter < 10)
        counter++;
    UPDATE;
};
// уменьшение кол-во эллементов items
btnCounterDown.onclick = function () {
    if (counter > 1)
        counter = counter - 1;
    UPDATE;
};

function updateCounter() {
    //вывод кол-во эллементов в корзине
    document.querySelector('.header-cart__count').innerText = cart.length;
    // вывод кол-во выбранного товара
    document.querySelector('.count-product').innerText = counter;
    UPDATE;
}

//очистка массива данных коризны
function clearCart() {
    //arr.splice(0,arr.length);
}

function throwMyEvent() {
    document.querySelector('.container').dispatchEvent(new Event('myNewEvent', {
        bubbles: true
    }));
}

let click = 0;
btnAdd.onclick = function () {
    // counter = 1;
    // for (let i = 0; i < cart.length; i++) {
    //     if (cart[i].id === getData().id) {
    //         alert("zz");
    //     }
    //     else {
    if (cart.length > 0) {
        cart[0].count += counter;
    } else {
        cart.push({
            id: getData().id,
            name: getData().name,
            country: getData().country,
            year_of_issue: getData().year_of_issue,
            blade: getData().blade,
            description: getData().description,
            priceForOne: getData().priceForOne,
            count: counter,
        })
    }
    console.log(cart);

    if (click < 1) {
        click++;
        let element = document.querySelector(".popup-container");
        let id = document.createElement('div');
        id.classList.add("cart-id");
        id.innerHTML = cart[0].id;
        element.appendChild(id);
        idProductInCart++;
        let name = document.createElement('div');
        name.classList.add("cart-name")
        name.innerHTML = `Name: ${cart[0].name}`;
        element.appendChild(name);
        let count = document.createElement('div');
        count.classList.add("cart-count")
        count.innerHTML = `Count: ${cart[0].count}`;
        element.appendChild(count);
        let price = document.createElement('div');
        price.classList.add("cart-price");
        price.innerHTML = `Price: ${cart[0].priceForOne * cart[0].count}`;

        element.appendChild(price);

    }
    document.querySelector('.cart-count').innerText = cart[0].count;
    document.querySelector('.cart-price').innerText = cart[0].priceForOne * cart[0].count;

    return cart;
}


// хмм, времени мало , так что я запушу в массив , вместо POST в db, протите мою лень ... и да , я никогда не делал POST///
document.body.addEventListener('myNewEvent', updateCounter)

// setInterval(throwMyEvent, 200)
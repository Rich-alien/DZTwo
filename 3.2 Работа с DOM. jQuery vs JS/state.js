let requestURL = 'http://localhost:3000/items';
let request = new XMLHttpRequest();
let counter = 1;
let cart = [];
let click = 0
let chooseItem = 0; // id выбранного товара в каталоге
let btnCounterUp = document.getElementById("plus"),
    btnShowPopup = document.querySelector(".header-cart"),
    btnHidePopup = document.querySelector(".btn-popUp"),
    btnCounterDown = document.getElementById("minus"),
    btnAdd = document.querySelector(".product-add");
const UPDATE = setInterval(throwMyEvent, 200);
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let items = request.response;
    createObj(items, chooseItem);
    var cart = dropInCart(items[chooseItem]); // пришлось , чтобы выводить кол-во эллементов в корзине
    updateCounter();
}


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

// btnCart.onclick = function () {
//     document.querySelector(".b-popup").style.display = "block";
//     //временное решение
//     if (click < 1) {
//         for (let i = 0; i < cart.length; i++) {
//             let element = document.querySelector(".popup-container");
//             let id = document.createElement('div');
//             id.classList.add("cart-id")
//             id.innerHTML = i;
//             element.appendChild(id);
//             let name = document.createElement('div');
//             name.classList.add("cart-name")
//             name.innerHTML = `Name: ${cart[i].name}`;
//             element.appendChild(name);
//             let count = document.createElement('div');
//             count.classList.add("cart-count")
//             count.innerHTML = `Count: ${cart[i].count}`;
//             element.appendChild(count);
//             let price = document.createElement('div');
//             price.classList.add("cart-price");
//             price.innerHTML = `Price: ${cart[i].priceForOne * cart[i].count}`;
//             element.appendChild(price);
//         }
//
//     }
//     click++
//
// }
function dropInCart(obj) {
    btnAdd.onclick = function () {
        counter = 1;
        cart.push({
            name: obj.name,
            country: obj.country,
            year_of_issue: obj.year_of_issue,
            blade: obj.blade,
            description: obj.description,
            priceForOne: obj.priceForOne,
            count: counter,
        })
        return cart;
        UPDATE;
    }
}

let createObj = (obj, id) => {
    let showInPage = obj[id];
    let name = document.createElement("div");
    name.className = "someClass";
    let text = document.createTextNode(showInPage.name);
    name.appendChild(text);
    //вывод информации о товаре из db
    // тут можно и через цикл , для начала создать массив их свойств и крутануть...
    document.querySelector('.product-name').innerText = obj[id].name;
    document.querySelector('.product-country').innerText = obj[id].country;
    document.querySelector('.product-year').innerText = obj[id].year_of_issue;
    document.querySelector('.product-blade').innerText = obj[id].blade;
    document.querySelector('.product-description').innerText = obj[id].description;
    document.querySelector('.product-price').innerText = obj[id].priceForOne;
}
// хмм, времени мало , так что я запушу в массив , вместо POST в db, протите мою лень ... и да , я никогда не делал POST///
document.body.addEventListener('myNewEvent', updateCounter)
// setInterval(throwMyEvent, 200)
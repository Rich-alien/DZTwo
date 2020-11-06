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
 function getData () {
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

    btnAdd.onclick = function () {
        // counter = 1;
        cart.push({
            name: getData().name,
            country: getData().country,
            year_of_issue: getData().year_of_issue,
            blade: getData().blade,
            description: getData().description,
            priceForOne: getData().priceForOne,
            count: counter,
        })
        let element = document.querySelector(".popup-container");
        let id = document.createElement('div');
        id.classList.add("cart-id");
        id.innerHTML = idProductInCart;
        element.appendChild(id);
        idProductInCart++;
        let name = document.createElement('div');
        name.classList.add("cart-name")
        name.innerHTML = `Name: ${getData().name}`;
        element.appendChild(name);
        let count = document.createElement('div');
        count.classList.add("cart-count")
        count.innerHTML = `Count: ${counter}`;
        element.appendChild(count);
        let price = document.createElement('div');
        price.classList.add("cart-price");
        price.innerHTML = `Price: ${getData().priceForOne * counter}`;
        element.appendChild(price);
        console.log(cart);
        UPDATE;
        return cart;
}




// хмм, времени мало , так что я запушу в массив , вместо POST в db, протите мою лень ... и да , я никогда не делал POST///
document.body.addEventListener('myNewEvent', updateCounter)

// setInterval(throwMyEvent, 200)
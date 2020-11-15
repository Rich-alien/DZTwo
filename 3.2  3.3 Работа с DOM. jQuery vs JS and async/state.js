let counter = 1;
let cart = [];
let idProductInCart = 1;
let btnCounterUp = document.getElementById("plus"),
    btnCounterDown = document.getElementById("minus"),
    btnShowPopup = document.querySelector(".header-cart"),
    btnHidePopup = document.querySelector(".btn-popUp"),
    btnAdd = document.querySelector(".product-add"),
    btnBurgerShow = document.querySelector(".header-burger-menu__svg-show");
    btnBurgerClose = document.querySelector(".header-burger-menu__svg-close");
    btnBack = document.querySelector(".header-back");

function getData() {
    return {
        id: 1,
        img: "url//",
        name: "Xeon 3000over",
        country: "Russia",
        year_of_issue: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        priceForOne: 300,
        count: 10,
        allPrice: 0
    };
}

document.querySelector('.product-name').innerText = getData().name;
document.querySelector('.product-name').innerText = getData().name;
document.querySelector('.product-country').innerText = getData().country;
document.querySelector('.product-year').innerText = getData().year_of_issue;
document.querySelector('.product-blade').innerText = getData().blade;
document.querySelector('.product-description').innerText = getData().description;
document.querySelector('.product-price').innerText = getData().priceForOne;

btnBurgerShow.onclick = function () {
    document.querySelector(".header-burger-menu").style.display = "flex";
    // document.querySelector(".header").style.overflow = "hide";
    btnBurgerShow.style.display = "none";

}
btnBurgerClose.onclick =function (){
    document.querySelector(".header-burger-menu").style.display = "none";
    // document.querySelector(".header").style.overflow = "hide";
    btnBurgerShow.style.display = "flex";
}
// скрытие корзины
btnHidePopup.onclick = function () {
    document.querySelector(".b-popup").style.display = "none";
}
// показ корзины
btnShowPopup.onclick = function () {
    document.querySelector(".loader").style.display = "flex";

    function loader() {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".b-popup").style.display = "block";

    }

    setTimeout(loader, 1000)


}
// увеличение кол-во эллементов items
btnCounterUp.onclick = function () {
    if (counter < 10)
        counter++;

};
// уменьшение кол-во эллементов items
btnCounterDown.onclick = function () {
    if (counter > 1)
        counter = counter - 1;

};
const UPDATE = setInterval(throwMyEvent, 200);

function updateCounter() {
    //вывод кол-во эллементов в корзине
    document.querySelector('.header-cart__count').innerText = cart.length;
    // вывод кол-во выбранного товара
    document.querySelector('.count-product').innerText = counter;


}

function throwMyEvent() {
    document.querySelector('.container').dispatchEvent(new Event('myNewEvent', {
        bubbles: true
    }));
}

document.body.addEventListener('myNewEvent', updateCounter);
let click = 0;
btnAdd.onclick = function () {

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
    if (click < 1) {
        click++;
        let element = document.querySelector(".popup-container__product");
        let id = document.createElement('div');
        id.classList.add("cart-id");
        id.innerHTML = cart[0].id;
        element.append(id);
        idProductInCart++;
        let name = document.createElement('div');
        name.classList.add("cart-name")
        name.innerHTML = `${cart[0].name}`;
        element.appendChild(name);
        let count = document.createElement('div');
        count.classList.add("cart-count")
        count.innerHTML = `${cart[0].count}`;
        element.appendChild(count);
        let price = document.createElement('div');
        price.classList.add("cart-price");
        price.innerHTML = `${cart[0].priceForOne * cart[0].count}`;
        element.appendChild(price);
    }
    document.querySelector('.cart-count').innerText = `${cart[0].count}`;
    document.querySelector('.cart-price').innerText = `${cart[0].priceForOne * cart[0].count}`;
    return cart;
}


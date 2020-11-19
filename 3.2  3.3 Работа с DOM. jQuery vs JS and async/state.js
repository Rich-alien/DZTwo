let counter = 1;
let cart = new Map;
let idProductInCart = 1;
let btnBurgerShow = document.querySelector(".header-burger-menu__svg-show");
btnBurgerClose = document.querySelector(".header-burger-menu__svg-close");
let click = 0;
btnBack = document.querySelector(".header-back");

let getData = () => {
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

let showBurger = () => {
    document.querySelector(".header-burger-menu").style.display = "flex";
    btnBurgerShow.style.display = "none";

}
let closeBurger = () => {
    document.querySelector(".header-burger-menu").style.display = "none";
    btnBurgerShow.style.display = "flex";
}
// скрытие корзины
let closePopup = () => {
    document.querySelector(".b-popup").style.display = "none";
}
// показ корзины
let showPopup = () => {
    document.querySelector(".loader").style.display = "flex";

    function loader() {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".b-popup").style.display = "block";

    }

    setTimeout(loader, 1000)
}
// увеличение кол-во эллементов items
let countUp = () => {
    if (counter < 10)
        document.querySelector('.count-product').innerText = counter++;
};
// уменьшение кол-во эллементов items
let countDown = () => {
    if (counter > 1)
        document.querySelector('.count-product').innerText = counter-=1;
};
let setCart = () => {

}
// document.querySelector('.count-product').innerText = counter;
// let setCart = () => {
//     console.log("click")
//     if (cart.length > 0) {
//         cart[0].count += counter;
//     } else {
//         cart.push({
//             id: getData().id,
//             name: getData().name,
//             country: getData().country,
//             year_of_issue: getData().year_of_issue,
//             blade: getData().blade,
//             description: getData().description,
//             priceForOne: getData().priceForOne,
//             count: counter,
//         })
//
//     }
//     if (click < 1) {
//         click++;
//         let element = document.querySelector(".popup-container__product");
//         let id = document.createElement('div');
//         id.classList.add("cart-id");
//         id.innerHTML = cart[0].id;
//         element.append(id);
//         idProductInCart++;
//         let name = document.createElement('div');
//         name.classList.add("cart-name")
//         name.innerHTML = `${cart[0].name}`;
//         element.appendChild(name);
//         let count = document.createElement('div');
//         count.classList.add("cart-count")
//         count.innerHTML = `${cart[0].count}`;
//         element.appendChild(count);
//         let price = document.createElement('div');
//         price.classList.add("cart-price");
//         price.innerHTML = `${cart[0].priceForOne * cart[0].count}`;
//         element.appendChild(price);
//     }
//     console.log(cart);
//     document.querySelector('.cart-count').innerText = `${cart[0].count}`;
//     document.querySelector('.cart-price').innerText = `${cart[0].priceForOne * cart[0].count}`;
//     return cart;
// }


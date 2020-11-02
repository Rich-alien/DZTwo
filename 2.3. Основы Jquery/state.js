let requestURL = 'http://localhost:3000/items';
let request = new XMLHttpRequest();
let counter = 1;
let chooseItem = 0; // id выбранного товара в каталоге
let btnPlus = document.getElementById("plus"),
    btnMinus = document.getElementById("minus"),
    IMG = document.querySelector(".product-img"),
    btnAdd = document.querySelector(".product-add");
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let items = request.response;
    createObj(items, chooseItem);
    updateCounter(); // при передаче аргумента item в функцию происходит bug
}

function throwMyEvent(){
    document.querySelector('.container').dispatchEvent(new Event('myNewEvent', {bubbles:true
    }));
}
function updateCounter(){
    btnPlus.onclick = function () {
        if (counter < 10)
            counter++;
    };
    btnMinus.onclick = function () {
        if (counter > 1)
            counter = counter - 1;
    };
    document.querySelector('.count-product').innerText = counter;
}
function addInCart(){

}

let createObj = (obj, id) => {
    let showInPage = obj[id];
    let name = document.createElement("div");
    name.className = "someClass";
    let text = document.createTextNode(showInPage.name);
    name.appendChild(text);
    //вывод информации о товаре из db
    document.querySelector('.product-name').innerText = obj[id].name;
    document.querySelector('.product-country').innerText = obj[id].country;
    document.querySelector('.product-year').innerText = obj[id].year_of_issue;
    document.querySelector('.product-blade').innerText = obj[id].blade;
    document.querySelector('.product-description').innerText = obj[id].description;
    document.querySelector('.product-price').innerText = obj[id].priceForOne;



    console.log(IMG, name);
}
document.body.addEventListener('myNewEvent',updateCounter)
setInterval(throwMyEvent,200)
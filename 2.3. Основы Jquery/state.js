let requestURL = 'http://localhost:3000/items';
let request = new XMLHttpRequest();
let counter = 1;
let chooseItem = 0; // id выбранного товара в каталоге
let CONTAINER = document.getElementById("container"),
    IMG = document.getElementsByClassName("product-img"),
    btnPlus = document.getElementById("plus"),
// btnPlus =  document.getElementsById("btn-plus"),
    btnMinus = document.getElementById("minus"),
    btnAdd = document.getElementsByClassName("btn-add");
// btnPlus =  document.getElementsByClassName("btn-plus"),
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
document.body.addEventListener('myNewEvent',updateCounter)
setInterval(throwMyEvent,200)
let createObj = (obj, id) => {
    let showInPage = obj[id];
    let name = document.createElement("div");
    name.className = "someClass";
    let text = document.createTextNode(showInPage.name);
    name.appendChild(text);
    // CONTAINER.insertBefore(IMG, name);
    console.log(IMG, name);
}

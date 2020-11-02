let requestURL = 'http://localhost:3000/items';
let request = new XMLHttpRequest();
let chooseItem = 0; // id выбранного товара в каталоге
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
   let items = request.response;
    createObj(items,chooseItem);
}
let createObj = (obj,id) => {
   let showInPage = obj[id];
}
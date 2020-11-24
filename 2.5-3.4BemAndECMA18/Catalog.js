//наши товары
const data = [
    {
        id: 0,
        img: "url//",
        name: "Xeon 3000over1",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 1,
        img: "url//",
        name: "Xeon 3000over2",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 2,
        img: "url//",
        name: "Xeon 3000over3",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 3,
        img: "url//",
        name: "Xeon 3000over4",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 4,
        img: "url//",
        name: "Xeon 3000over5",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 5,
        img: "url//",
        name: "Xeon 3000over6",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 6,
        img: "url//",
        name: "Xeon 3000over7",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 7,
        img: "url//",
        name: "Xeon 3000over8",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 8,
        img: "url//",
        name: "Xeon 3000over9",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 9,
        img: "url//",
        name: "Xeon 3000over10",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 10,
        img: "url//",
        name: "Xeon 3000over11",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },
    {
        id: 11,
        img: "url//",
        name: "Xeon 3000over12",
        country: "Russia",
        year: 1970,
        blade: "iron",
        description: "normalnormalnorallnormal",
        price: 300,
        count: 1,
    },

];
let click = 0;
let cart = new Map;
let count = 0;
let basketCount = $(".basket__counter");
let cartPopup = $(".b-popup");
let containerCart = $('.popup-container__product');
let preBasket = [];

//перенос данных из ужасного bd в мир html
class Container {
    _arr = [];

    set array(arr) {
        this._arr = arr;
    }

    get array() {
        return this._arr;
    }

    setCount = (data) => {
        const counter = new Container(data);
    }

    constructor(array) {

        array.forEach((item, index, arr) => {

            containerCart.append(`
        <div class="basket">
            <p class="basket__name">${arr[index].name}</p> 
            <p class="basket__country">${arr[index].country}</p>
            ${this.setCount(arr[index].count)}
            <p class="basket__price">${arr[index].price * array[index].count}</p>
        </div>
        `)

        })

    }
}

class Counter {
    _count = 0;
    set count(count) {
        this._count = count;
    }

    get count() {
        return this._count
    }

    constructor(count) {
        `<p class="basket__count">${count}</p>`
    }

    increase = () => {
        this._count++;
    }
    decrease = () => {
        this._count--;
    }

}

const createCart = () => {
    const container = new Container(getCart());
    cartPopup.show();
}
const getCart = () => {
    let impregnatedArray = []
    for (let product of cart) {
        for (let i = 0; i < product[1].length; i++) {
            impregnatedArray.push(product[1][i]);
        }
    }
    return impregnatedArray;
}
const createProduct = () => {
    $(".basket__counter").append(cart.size);

    data.forEach((item, index, array) => {

        $('.product-list').append(`
<div class="product-card">
    <div class="product-card__image">
        <img style="width: auto" src="" alt="zzzz">
     </div>
     <div class="product-cart__info">
         <div class="product-card__info-name">Name: <p class="product-card__name">${array[index].name}</p></div>
         <div class="product-card__info-country">country: <p class="product-card__country">${array[index].country}</p></div>
        <div class="product-card__info-year">year: <p class="product-card__year">${array[index].year}</p></div>
        <div class="product-card__info-blade">blade:<p class="product-card__blade">${array[index].blade}</p></div>
        <div class="product-card__info-price">price:<p class="product-card__price">${array[index].price}</p></div>
     </div>
    <div class="product-card__more-info">
         <button onclick="pressBuy(${array[index].id})" class="product-card__button">buy</button>
     </div>
</div>`)
    })
}

const hideCart = () => {
    cartPopup.hide();
    containerCart.empty()
}
//
const setData = (id) => {
    return (
        {
            id: data[id].id,
            name: data[id].name,
            country: data[id].country,
            year: data[id].year,
            blade: data[id].blade,
            description: data[id].description,
            price: data[id].price,
            count: data[id].count,
        }
    )
}
const pressBuy = (id) => {
    //первый эллемент точно будет уникальным в корзине

    if (cart.size === 0) {
        count++;
        preBasket.push(setData(id));
        cart.set(click, preBasket);
        basketCount.empty()
        basketCount.append(count);
    } else if (conflictTest(id, cart)) {
        count++;
        preBasket.push(setData(id));
        basketCount.empty()
        basketCount.append(count);

    } else {

        for (let value of cart) {
            value[1][getID(id, cart)].count++;
        }
    }

}
const getID = (id, cart) => {
    let saveID = [];
    for (let product of cart) {
        for (let i = 0; i < product[1].length; i++) {
            saveID.push(product[1][i].id);
        }
    }
    return saveID.indexOf(id);
}
const conflictTest = (id, basket) => {
    let tester = [];
    for (let product of basket) {
        for (let i = 0; i < product[1].length; i++) {
            tester.push(product[1][i].id !== id);
        }
    }
    if (tester.indexOf(false) === -1) {
        return 1;
    } else {
        return 0;
    }


}

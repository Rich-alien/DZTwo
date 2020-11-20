//наши товары
let getData = [
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
let preBasket = [];
//перенос данных из ужасного bd в мир html
let getCart = () => {
    let impregnatedArray=[]
    for (let product of cart) {
        for (let i = 0; i < product[1].length; i++) {
            impregnatedArray.push(product[1][i]);
        }
    }
    return impregnatedArray;
}
let createProduct = () => {
    $(".basket__counter").append(cart.size);
    getData.forEach((item, index, array) => {
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
let createCart = () => {
    console.log(getCart());
}
//
let setData = (id) => {
    return (
        {
            id: getData[id].id,
            name: getData[id].name,
            country: getData[id].country,
            year: getData[id].year,
            blade: getData[id].blade,
            description: getData[id].description,
            price: getData[id].price,
            count: getData[id].count,
        }
    )
}
let pressBuy = (id) => {
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
            value[1][getID(id, cart)].count += 1;
        }
    }

}
let getID = (id, cart) => {
    let saveID = [];
    for (let product of cart) {
        for (let i = 0; i < product[1].length; i++) {
            saveID.push(product[1][i].id);
        }
    }
    return saveID.indexOf(id);
}
let conflictTest = (id, basket) => {
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
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
let containerPopup = $('.popup-container');
let preBasket = [];
let product = []
//перенос данных из ужасного bd в мир html
// class Container {
//     _data = []
//
//     constructor(data) {
//         this._data = data;
//     }
//
//     set container(data) {
//         this._data = data;
//     }
//     getProduct=()=>{
//         for(let i=0;i<this._data.length;i++){
//             let product =new Product(this._data,i);
//             product.array;
//         }
//
//     }
//     get container() {
//
//         return containerPopup.append(`
//         <div class="popup-container__product">
//             ${this.getProduct()}
//         </div>
//
//         `)
//
//     }
// }
class Container {

}
// class Product {
//     _arr = [];
//     _index = 0;
//
//
//     set array(arr) {
//         this._arr = arr;
//     }
//
//     get array() {
//         return  containerCart.append(`
//         <div class="basket">
//             <p class="basket__name">${this._arr[this._index].name}</p>
//             <p class="basket__country">${this._arr[this._index].country}</p>
// <!--                <div onclick="this.increment()">+</div>-->
//
//                <div>-</div>
//             <p class="basket__price">${this._arr[this._index].price * this._arr[this._index].count}</p>
//         </div>
//         `)
//         // ${this.getCount(this._arr[this._index].count)}
//     }
//
//     getCount(setCount) {
//         debugger;
//         const productCount = new Counter(setCount);
//         return productCount.count;
//     }
//
//
//     constructor(array, index) {
//        this._arr = array;
//        this._index = index;
//     }
//
// }
//
// class Counter {
//     _count = 0;
//
//     constructor(count) {
//         this._count = count;
//     }
//
//     set count(setCount) {
//         this._count = setCount;
//     }
//
//     get count() {
//
//         return `
//                    <div onclick="this.increase()">+</div>
//                 <p class="basket__count">${this._count}</p>
//                 `
//     }
//
//
//     increase() {
//         console.log('hi');
//         return this._count++;
//     }
//
//     decrease = () => {
//         return this._count--;
//     }
//
// }

const createCart = () => {
        const container = new Container();
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
   for (let product of basket) {
       for(let i=0;i<product[i].length;i++){
           if(product[1][i].id===id){
               return false
           }
       }
   }
   return true;
}

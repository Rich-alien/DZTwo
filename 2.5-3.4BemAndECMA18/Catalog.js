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
let product = []

class Product {
    _product;
    wrapper;
    constructor(product,wrapper) {
        this._product = product;
        this.wrapper = wrapper
        console.log(wrapper)
        this.createProduct();
    }

    createProduct() {
        let template = document.createElement("div");
        template.className=("basket")
        template.innerHTML=`
            <p class="basket__name">${this._product.name}</p>
                <p class="basket__country">${this._product.country}</p>
              <p class="basket__price">${this._product.price * this._product.count}</p>
            
           `
        console.log(template);
        // let insert =  this.wrapper.insertBefore(template);
        this.wrapper.append=template;

    }
      // $(".popup-container__product").append(`
      //       <div class="basket">
      //       <p class="basket__name">${this._product.name}</p>
      //           <p class="basket__country">${this._product.country}</p>
      //
      //           <p class="basket__price">${this._product.price * this._product.count}</p>
      //       </div>
      //       `)
      //   }

}

class Count  {
    _count;
    wrapper;
    innerHTML;

    increment() {
        this._count++;
    }
     getInnerHTML(count) { return( `
        <div onclick="this.increment()">+</div>
        <p class="basket__count">${count}</p>
        <div>-</div>
        `);
    }
    constructor(count) {
        this.wrapper = document.createElement("div");
        this.innerHTML =  this.getInnerHTML(count);
        this._count = count;
        this.wrapper.innerHTML = this.innerHTML;
    }

}

class Popup {
        _productData;
        mapProductData (productData){
            basketCount.append(
                productData.forEach(item=>{
                    item.counter = new Product(item,basketCount);
                })
            )
        }
        constructor(productData) {
        this._productData = productData;
        this.mapProductData(this._productData);

    }
}
const createCart = function () {
    const newPopup = new Popup(preBasket);
    cartPopup.show();
}
const initProducts = () => {
    $(".basket__counter").append(cart.size);
    data.forEach(item => {
        $('.product-list').append(`
            <div class="product-card">
                <div class="product-card__image">
                    <img style="width: auto" src="" alt="zzzz">
                </div>
                <div class="product-cart__info">
                    <div class="product-card__info-name">Name: <p class="product-card__name">${item.name}</p></div>
                    <div class="product-card__info-country">country: <p class="product-card__country">${item.country}</p></div>
                    <div class="product-card__info-year">year: <p class="product-card__year">${item.year}</p></div>
                    <div class="product-card__info-blade">blade:<p class="product-card__blade">${item.blade}</p></div>
                    <div class="product-card__info-price">price:<p class="product-card__price">${item.price}</p></div>
                </div>
                <div class="product-card__more-info">
                     <button onclick="pressBuy(${item.id})" class="product-card__button">buy</button>
                 </div>
            </div>`)
    })
}
const hideCart = () => {
    cartPopup.hide();
    containerCart.empty();
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
    } else if (isExistProductById(id, cart)) {
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

const isExistProductById = (id, basket) => {
    for (let product of basket) {
        for (let i = 0; i < product[1].length; i++) {
            if (product[1][i].id === id) {
                return false;
            }
        }
    }
    return true;
}
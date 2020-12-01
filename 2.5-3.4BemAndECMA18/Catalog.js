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
let basketCount = $(".basket__counter");
let preBasket = [];
let product = []

class Product {
    _product;
    wrapper;
    _index;
    _count;
    newCounter;

    constructor(product, wrapper, index) {
        this._product = product;
        this.wrapper = wrapper;
        this._index = index;
        this.createProduct();
    }

    createProduct() {

        let template = document.createElement("div");
        template.className = ("basket");
        template.innerHTML = `<p class="basket__name">${this._product.name}</p>
                <p class="basket__country">${this._product.country}</p>
              <p class="basket__price">${this._product.price * this._product.count}</p>
           `;
        this.newCounter = new Count(this._product.count, template);
        this.wrapper.append(template);
        this.newCounter.updatePrice = (count) => {
            this._count = count;
            this.updateCount(this._count);
            template.querySelector(".basket__price").innerHTML = this._count * this._product.price;
        }
    }
}

class Count {
    _count = 0;
    template;
    inner;
    countElement;

    getInnerHTML(count) {
        return `
        <div class="increment">+</div>
        <p class="product__count">${count}</p>
        <div class="decrement">-</div>
        `;
    }

    constructor(count, template) {
        this.template = template;
        this.inner = this.getInnerHTML(count);
        this._count = count;
        let counterDiv = document.createElement("div");
        counterDiv.className = "container-count";
        counterDiv.innerHTML = this.inner;
        this.template.appendChild(counterDiv);
        counterDiv.querySelector(".increment").addEventListener("click", this.increment);
        counterDiv.querySelector(".decrement").addEventListener("click", this.decrement);
        this.countElement = counterDiv.querySelector(".product__count");
    }

    increment = () => {
        if (this._count < 20) {
            this._count++;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
    decrement = () => {
        if (this._count > 0) {
            this._count--;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
}

class Popup {
    _productData;

    mapProductData(productData) {
        let popupContainer = document.querySelector(".popup-container__product");
        basketCount.append(
            productData.forEach((item, index) => {
                item.counter = new Product(item, popupContainer, index);
                item.counter.updateCount = (count) => {
                    item.count = count;
                };
            })
        )
    }

    constructor(productData) {
        this._productData = productData;
        const template = document.getElementById("popup");
        const content = document.importNode(template.content, true);
        document.querySelector(".basket").addEventListener("click", () => $(".b-popup").show());
        content.querySelector(".button__popup").addEventListener("click", this.hideCart);
        document.querySelector(".header").appendChild(content);
        this.mapProductData(this._productData);
    }

    hideCart = () => {
        $(".b-popup").hide();
        preBasket = [];
        basketCount.empty();
    }
}

const newPopup = new Popup(preBasket);
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
    if (!cart.has(id)) {
        cart.set(id, setData(id));
        newPopup.mapProductData(cart);
        basketCount.empty()
        basketCount.append(cart.size);
    } else {
        cart.get(id).count++;
    }
}


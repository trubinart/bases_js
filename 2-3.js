let product = { name: '', count: 0, price: 0 };
let basket = []

let product_1 = Object.assign({}, product);
product_1.name = 'Mouse';
product_1.count = 2;
product_1.price = 88;

let product_2 = Object.assign({}, product);
product_2.name = 'Laptop';
product_2.count = 3;
product_2.price = 102;

basket.push(product_1, product_2);
console.log(basket);

function countBasketPrice(basketWithProduct) {
    let summ = 0
    for (i of basketWithProduct) {
        summ += i.price;
    };
    return summ
};

console.log(countBasketPrice(basket))

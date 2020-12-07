// БЛОК СОЗДАНИЯ КОРЗИНЫ
function Product(name, article, color, size, text, price) {
    this.name = name;
    this.article = article;
    this.color = color;
    this.size = size;
    this.text = text;
    this.price = price;
}

function Basket() {
    this.list = {};
    this.addOneProduct = function AddProduct(product){
        this.list[product.name] = product;
    }
    this.addSeveralProduct = function AddProduct(product){
        for(let i of product){
            this.list[i.name] = i;
        }
    }
    this.deleteProduct = function DeleteProduct(product){
        delete this.list[product.name];
    }
    this.totalPriceOfProducts = function TotalPriceOfProducts() {
        totalPrice = 0;
        for (var p in  this.list){
            totalPrice += this.list[p].price;
        }
        return totalPrice;
    }

    this.countOfProducts = function () {
        return Object.keys(this.list).length;
    }
}


function Basket() {
    this.list = {};
    this.addOneProduct = function AddProduct(product){
        this.list[product.name] = product;
    }
    this.addSeveralProduct = function AddProduct(product){
        for(let i of product){
            this.list[i.name] = i;
        }
    }
    this.deleteProduct = function DeleteProduct(product){
        delete this.list[product.name];
    }
    this.totalPriceOfProducts = function TotalPriceOfProducts() {
        totalPrice = 0;
        for (var p in  this.list){
            totalPrice += this.list[p].price;
        }
        return totalPrice;
    }

    this.countOfProducts = function () {
        return Object.keys(this.list).length;
    }
}

// БЛОК ГЕНЕРАЦИИ КОРЗИНЫ НА СТРАНИЦЕ
 let mainBlock = document.querySelector('body');
 let basketWindow;

 function addBasketWindow(){
     basketWindow = document.createElement('div');

     if (basket.countOfProducts() === 0){
         basketWindow.innerHTML = '<p>В корзине ничего нет<p>'

     }
     else {
         basketWindow.innerHTML = '<p>' + 'В козине: ' + basket.countOfProducts() +' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '<p>';
     }
     mainBlock.appendChild(basketWindow)
 }


// БЛОК СОЗДАНИЯ ТОВАРОВ

hat = new Product('Шляпа', 9898, 'Красный', '46', 'Описание шляпы', 500);
scarf = new Product('Шарф', 6726, 'Желтый', '12', 'Описание шарфа', 1000);

basket = new Basket();

let catalog = [];
catalog.push(hat, scarf);

let addProductButtom = document.querySelectorAll('.buttom');
for (b of addProductButtom){

    b.addEventListener('click', (e) =>{
        let productName = e.target.parentElement.firstElementChild.innerText;
        for (let i of catalog){
            if (i.name === productName){
                basket.addOneProduct(i)
                alert('В корзину добавлен товар - ' + i.name)
                alert('В корзине ' + basket.countOfProducts() + ' подуктов' + ' на сумму ' + basket.totalPriceOfProducts())
            }
        }
    })

}

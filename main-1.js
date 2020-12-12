// БЛОК СОЗДАНИЯ КОРЗИНЫ
function Product(name, article, color, size, text, price) {
    this.name = name;
    this.article = article;
    this.color = color;
    this.size = size;
    this.text = text;
    this.price = price;
}

hat = new Product('Шляпа', 9898, 'Красный', '46', 'Описание шляпы', 500);
scarf = new Product('Шарф', 6726, 'Желтый', '12', 'Описание шарфа', 1000);

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

basket = new Basket();
basket.addSeveralProduct([hat, scarf]);

function innerProduct(product, name){
    let container = document.querySelector('.list')
    let container2 = document.createElement('div');
    container2.classList.add('productString')
    container2.setAttribute('id', name)
    let text = document.createElement('p');
    let count = document.createElement('input');
    count.setAttribute('type', 'number');
    count.setAttribute('id', 'input'+ name)
    let textTotal = document.createElement('p');
    let summTotal = document.createElement('p');
    summTotal.setAttribute('id', 'summTotal'+ name)
    let button = document.createElement('button');

    text.textContent = product.name;
    count.value = 1;
    textTotal.textContent = 'Итого';
    summTotal.textContent = count.value * product.price;
    summTotal.classList.add('summTotal')
    button.textContent = 'Delete'
    button.setAttribute('id', 'delete')

    container2.appendChild(text);
    container2.appendChild(count);
    container2.appendChild(textTotal);
    container2.appendChild(summTotal);
    container2.appendChild(button);
    container.appendChild(container2)
}


function createProoductList(){

    let mainBlock = document.querySelector('.list');
    mainBlock.innerHTML = ''

    if (basket.countOfProducts() === 0){
        mainBlock.innerHTML = '<p>В корзине ничего нет<p>'
    }
    else{

        let num = 1;
        for (let i in basket.list){
            innerProduct(basket.list[i], basket.list[i].name)
        }

        let finalString = document.createElement('div');
        finalString.classList.add('final')

        finalString.innerHTML = '<p>' + 'В козине: ' + basket.countOfProducts() +' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '<p>'
        mainBlock.appendChild(finalString);
        let buttonNext = document.createElement('button');
        buttonNext.textContent = 'Далее'
        buttonNext.classList.add('next')
        buttonNext.setAttribute('id', 'listNext')
        buttonNext.addEventListener('click', () => changeWindowList())
        mainBlock.appendChild(buttonNext);
    }

}


createProoductList()

function changeWindowList(){
    let list = document.querySelector('.list');
    let delivery = document.querySelector('.delivery');
    list.style.display = 'none';
    delivery.style.display = 'block';
}

function changeDeliveryList(){
    let delivery = document.querySelector('.delivery');
    let comment = document.querySelector('.comment');
    delivery.style.display = 'none';
    comment.style.display = 'block';
}

document.querySelector('#deliveryNext')
.addEventListener('click', () => changeDeliveryList())

function summTotalFinal(){
    let summTotalFinal = document.querySelectorAll('.summTotal')
    let finalSumm = 0

    for (let p of summTotalFinal){
        finalSumm += Number(p.innerHTML);
    }
    return finalSumm
}

function summCountFinal(){
    let inputCount = document.querySelectorAll('input');
    let finalSummCount = 0

    for (let p of inputCount){
        finalSummCount += Number(p.value);
    }
    return finalSummCount
}



let inputCount = document.querySelectorAll('input');
let summTotal = document.querySelector('#summTotal');

for (let i of inputCount){
    i.addEventListener('change', (e) =>{
        let summTotal = document.querySelector('#' + e.target.
        nextElementSibling.nextElementSibling.id);
        summTotal.innerHTML = e.target.value * basket.list[e.target.id.replace('input', '')].price

        let finalString2 = document.querySelector('.final');
        finalString2.innerHTML = ''
        finalString2.innerHTML = '<p>' + 'В козине: ' + summCountFinal() +' товаров на сумму ' + summTotalFinal() + ' рублей' + '<p>'

    })
}

let deleteButtonAll = document.querySelectorAll('#delete');

for (g of deleteButtonAll){
    g.addEventListener('click', (e) => {
       delete basket.list[e.target.parentElement.id]
       createProoductList()
       let inputCount = document.querySelectorAll('input');
let summTotal = document.querySelector('#summTotal');

for (let i of inputCount){
    i.addEventListener('change', (e) =>{
        let summTotal = document.querySelector('#' + e.target.
        nextElementSibling.nextElementSibling.id);
        summTotal.innerHTML = e.target.value * basket.list[e.target.id.replace('input', '')].price

        let finalString2 = document.querySelector('.final');
        finalString2.innerHTML = ''
        finalString2.innerHTML = '<p>' + 'В козине: ' + summCountFinal() +' товаров на сумму ' + summTotalFinal() + ' рублей' + '<p>'

    })
}
    })
}

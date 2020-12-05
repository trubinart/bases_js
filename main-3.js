// БЛОК СОЗДАНИЯ КАТАЛОГА
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

let catalog = [];
catalog.push(hat, scarf);

function printCatalog(list){
    let mainBlock = document.querySelector('body');
    let printProduct = document.createElement('div');
    let prod;
    document.querySelector('body').innerHTML = '<h2>Каталог товаров<h2>';
    printProduct.setAttribute('id', 'catalog')
    mainBlock.appendChild(printProduct);

    for (let i of catalog){
        prod = document.createElement('p');
        prod.innerText = i.name + ' стоимостью ' + i.price;
        printProduct.appendChild(prod);
    }

}

printCatalog(catalog);

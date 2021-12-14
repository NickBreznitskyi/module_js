//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
//Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.createElement("form");
form.setAttribute('name', 'productForm');
document.body.appendChild(form);

let productName = document.createElement("input");
productName.placeholder = 'Product Name';
productName.setAttribute('type', 'text');
productName.style.display = 'block';
productName.style.marginBottom = '20px';

let productNumber = document.createElement("input");
productNumber.placeholder = ' Product Number';
productNumber.setAttribute('type', 'number');
productNumber.style.display = 'block';
productNumber.style.marginBottom = '20px';

let productPrice = document.createElement("input");
productPrice.placeholder = 'Price';
productPrice.setAttribute('type', 'number');
productPrice.style.display = 'block';
productPrice.style.marginBottom = '20px';

let productImg = document.createElement("input");
productImg.placeholder = 'Url of product';
productImg.setAttribute('type', 'text');
productImg.style.display = 'block';
productImg.style.marginBottom = '20px';

let addBtn = document.createElement("button");
addBtn.innerText = 'Add Product';
addBtn.style.cursor = 'pointer';
addBtn.style.marginBottom = '20px';

form.append(productName, productNumber, productPrice, productImg, addBtn);

function Product(name, number, price, img) {
    this.productName = name;
    this.productNumber = number;
    this.productPrice = price;
    this.productImg = img;
    this.productId = new Date().getTime();
}

addBtn.onclick = (ev) => {
    ev.preventDefault();
    if (productName.value !== '' && productNumber.value !== '' && productPrice.value !== '' && productImg.value !== '') {
        if (localStorage.getItem('productList') === null) {
            let productList = [];
            localStorage.setItem('productList', JSON.stringify(productList));
        }
        let newProd = JSON.parse(localStorage.getItem('productList'));
        newProd.push(new Product(productName.value, productNumber.value, productPrice.value, productImg.value));
        localStorage.setItem('productList', JSON.stringify(newProd));
        productName.value = '';
        productNumber.value = '';
        productPrice.value = '';
        productImg.value = '';
    }
}

let aList = document.createElement('a');
aList.setAttribute('href', 'list.html');
aList.innerText = 'Show all products';

document.body.appendChild(aList);
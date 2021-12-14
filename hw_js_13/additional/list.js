let error = document.createElement("h2");
error.innerText = 'Doesnt have any product!!!';
error.style.color = 'red';

if (localStorage.getItem('productList') === null || localStorage.getItem('productList') === '[]') {
    document.body.appendChild(error);
}

let productList = JSON.parse(localStorage.getItem('productList'));

for (const product of productList) {
    let productCard = document.createElement("div");
    productCard.style.border = '1px solid black';
    productCard.style.marginBottom = '20px';
    productCard.style.maxWidth = '400px';
    document.body.appendChild(productCard);

    let idP = document.createElement("p");
    idP.innerText = `${product.productId}`;
    idP.style.textAlign = 'end';


    let img = document.createElement("img");
    img.src = `${product.productImg}`;


    let nameH3 = document.createElement("h3");
    nameH3.innerText = `${product.productName}`;


    let numberP = document.createElement("p");
    numberP.innerText = `${product.productNumber}`;


    let priceH3 = document.createElement("h3");
    priceH3.innerText = `${product.productPrice} $`;


    let delProductBtn = document.createElement("button");
    delProductBtn.setAttribute('id', `${product.productId}`);
    delProductBtn.innerText = 'Delete this product';
    delProductBtn.style.cursor = 'pointer';

    productCard.append(idP, img, nameH3, numberP, priceH3, delProductBtn);


    delProductBtn.onclick = () => {
        productCard.style.display = 'none';
        let parse = JSON.parse(localStorage.getItem('productList'));
        parse.splice(productList.indexOf(product), 1);
        localStorage.setItem('productList', JSON.stringify(parse));
    }
}

let delAllProduct = document.createElement("button");
delAllProduct.innerText = 'Delete all product';
delAllProduct.style.cursor = 'pointer';
document.body.appendChild(delAllProduct);

delAllProduct.onclick = (ev) => {
    ev.preventDefault();
    let allDiv = document.getElementsByTagName('div');
    for (const div of allDiv) {
        div.style.display = 'none';
    }
    let emptyArr = [];
    localStorage.setItem('productList', JSON.stringify(emptyArr));
    delAllProduct.style.display = 'none';
    document.body.appendChild(error);
}
//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let header = document.getElementById('main_header');
header.style.color = 'red';
header.innerText = 'sept-2021-js';

//b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = "400px";
}
console.log(ul);

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let li = document.getElementsByClassName('linkList');
for (const liElement of li) {
    liElement.style.width = "50%"
}

// d) отримує текст який зберігається в елементі з класом listElement2
let liText = document.getElementsByClassName('listElement2');
for (const liTextElement of liText) {
    console.log(liTextElement.innerText);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий
let liColor = document.getElementsByTagName('li');
for (const liColorElement of liColor) {
    liColorElement.style.backgroundColor = 'grey';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aTag = document.getElementsByTagName('a');
for (const aTagElement of aTag) {
    aTagElement.classList.add('anchor');
    if (aTagElement.innerText === "link3") {
        aTagElement.style.fontSize = "40px";
    }
    aTagElement.classList.add(`element_${aTagElement.innerText}`);
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.backgroundColor = prompt('Color');
    if (subHeaderElement.innerText === 'content 2 segment') {
        subHeaderElement.style.color = prompt('Color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
for (const content1Element of content1) {
    content1Element.innerText = prompt('Text');
}

// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerText = 'sep-2021-js'
}
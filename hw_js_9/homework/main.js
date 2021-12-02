//створити блок,
//додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divElement = document.createElement("div");
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
divElement.style.backgroundColor = 'grey';
divElement.style.color = 'red';
divElement.style.fontSize = '30px';
divElement.style.height = '30px';
divElement.innerText = 'hello';
document.body.appendChild(divElement);

let divClone = divElement.cloneNode(true);
document.body.appendChild(divClone);

//Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];

let ulMenu = document.getElementsByClassName('menu')[0];
for (const itemMenu of array) {
    let liElement = document.createElement('li');
    liElement.innerText = itemMenu;
    ulMenu.appendChild(liElement);
}

//Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${item.title} ${item.monthDuration}`
    document.body.appendChild(div);
}

//Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    let divElement = document.createElement("div");
    divElement.classList.add('item');
    let h1Element = document.createElement("h1");
    h1Element.classList.add('heading');
    h1Element.innerText = item.title;
    let pElement = document.createElement("p");
    pElement.classList.add('description');
    pElement.innerText = item.monthDuration;
    document.body.appendChild(divElement);
    divElement.append(h1Element, pElement);
}
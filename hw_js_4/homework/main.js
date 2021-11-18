// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
    return a * b;
}

console.log(areaRectangle(2, 5));
console.log('===================');

//створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.round(Math.PI * r ** 2)
}

console.log(areaCircle(2));
console.log('===================');

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return Math.round(2 * Math.PI * r * (h + r));
}

console.log(areaCylinder(10, 10));
console.log('===================');
//створити функцію яка приймає масив та виводить кожен його елемент

let array = [2, 5, 3, 7, 3, 5];

function arrayOutput(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayOutput(array);
console.log('===================');

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(str) {
    document.write(`<p>${str}</p>`)
}

createParagraph('aetwetw ryeyew wqwtey');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlLi3(str) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${str}</li>`)
    }
    document.write(`</ul>`)
}

createUlLi3('asasdas');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlLiN(str, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${str}</li>`)
    }
    document.write(`</ul>`)
}

createUlLiN('qaz', 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arraySome = [23, 'dfb', 'qfwd', true, 135, 235, false];

function createUlFromArray(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

createUlFromArray(arraySome);


//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayObject = [
    {id: 1, name: 'vasya', age: 23},
    {id: 2, name: 'sanya', age: 25},
    {id: 3, name: 'olya', age: 21}
]


function objectOutput(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

objectOutput(arrayObject);
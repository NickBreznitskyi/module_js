//створити функцію яка обчислює та повертає площу прямокутника висотою
let areaRectangle = (a, b) => a * b;

console.log(areaRectangle(10, 20));
console.log('============');

//створити функцію яка обчислює та повертає площу кола

let areaCircle = (r) => Math.round(Math.PI * r ** 2);

console.log(areaCircle(5));
console.log('============');

//створити функцію яка обчислює та повертає площу циліндру

let areaCylinder = (h, r) => Math.round(2 * Math.PI * r * (h + r))
console.log(areaCylinder(20, 5));
console.log('============');

//створити функцію яка приймає масив та виводить кожен його елемент

let arrayOutput = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayOutput([23, 46, true, 'sdgssg']);
console.log('============');

//створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);

createParagraph('sdgwgwg');


//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUlLi3 = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

createUlLi3('ewwety');

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlLiN = (text, n) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

createUlLiN('rtjskjgg', 5);


//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arraySome = [2323, 'dfbfh', 'qwetdfhwd', false, 1355, 235, false];

let createUlFromArray = (arr) => {
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


let objectOutput = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

objectOutput(arrayObject);

//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrayNumber = [3, 6, 1, 12, 4];
let arrayString = ['qwe', 'asd', 'zxc', 'qwerty', 'asasdas'];
let arrayNSB = [34, true, 'asdfg', false, 12];
console.log(arrayNumber, arrayString, arrayNSB);


//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrayEmpty = [];
arrayEmpty[0] = true;
arrayEmpty[1] = 'qaz';
arrayEmpty[2] = 24;
console.log(arrayEmpty);


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>xxx</div>');
}


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div> www ${i}</div>`);
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>ccc</h1>`)
    i++;
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let index = 0;
while (index < 20) {
    document.write(`<h1>qqq ${index}</h1>`)
    index++;
}

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numberArray = [23, 54, 12, 34, 65, 12, 87, 36, 12, 65];
for (let i = 0; i < 10; i++) {
    console.log(numberArray[i]);
}

console.log('===========')
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringArray = ['asdfg', 'qwr', 'qtrey', 'hkg', 'erutiy', 'adfg', 'upuhjgf', 'xchj', 'pif', 'zxbc']

for (let i = 0; i < 10; i++) {
    console.log(stringArray[i]);
}
console.log('===========')

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let typesArray = [true, false, 'sdggs', 26, false, 4787, 'zgcxg', 12, true, false];
for (let i = 0; i < 10; i++) {
    console.log(typesArray[i]);
}
console.log('===========')

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let i = 0; i < 10; i++) {
    if (typeof (typesArray[i]) === "number") {
        console.log(typesArray[i]);
    }
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log('===========')
for (let i = 0; i < 10; i++) {
    if (typeof (typesArray[i]) === "string") {
        console.log(typesArray[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log('===========')
for (let i = 0; i < 10; i++) {
    if (typeof (typesArray[i]) === "boolean") {
        console.log(typesArray[i]);
    }
}

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('===========')
let emptyArray = [];
emptyArray[0] = 364;
emptyArray[1] = true;
emptyArray[2] = 'wet';
emptyArray[3] = 120;
emptyArray[4] = false;
emptyArray[5] = true;
emptyArray[6] = 'ert';
emptyArray[7] = 97;
emptyArray[8] = 135;
emptyArray[9] = false;
for (let i = 0; i < 10; i++) {
    console.log(emptyArray[i]);
}
console.log('===========');
document.write(`<div></div>`);
//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

console.log('===========');
document.write(`<div>===========</div>`);
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
console.log('===========');
document.write(`<div>==============</div>`);
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
console.log('===========');
document.write(`<div>===============</div>`);
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}

console.log('===========');
document.write(`<div>===============</div>`);
//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}
//1. Створити пустий масив та :
let arrayEmpty = [];

//a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    if (i === 0) {
        arrayEmpty[i] = i + 2;
    } else if (i % 2 === 0) {
        arrayEmpty[i] = i;
    } else if (i % 2 !== 0) {
        arrayEmpty[i] = i + 1;
    }
}
console.log(arrayEmpty);

//b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    if (i === 0 || i % 2 === 0) {
        arrayEmpty[i] = i + 1;
    } else if (i % 2 !== 0) {
        arrayEmpty[i] = i;
    }
}
console.log(arrayEmpty);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arrayEmptyC = []
for (let i = 0; i < 20; i++) {
    arrayEmptyC[i] = Math.floor(Math.random() * i);
}

console.log(arrayEmptyC);

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrayEmptyD = [];
for (let i = 0; i < 20; i++) {
    arrayEmptyD[i] = Math.floor(Math.random() * (732 - 8) + 8);
}

console.log(arrayEmptyD);

//2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arrayEmptyD.length; i += 3) {
    console.log(arrayEmptyD[i]);
}
console.log('===============');

//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arrayEmptyD.length; i += 3) {
    if (arrayEmptyD[i] % 2 === 0) {
        console.log(arrayEmptyD[i]);
    }
}
console.log('===============');

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrayEmptyNew = [];
for (let i = 0; i < arrayEmptyD.length; i++) {
    if (i % 3 === 0 && arrayEmptyD[i] % 2 === 0) {
        console.log(arrayEmptyD[i]);
        arrayEmptyNew.push(arrayEmptyD[i]);
    }
}

console.log('=============');
console.log(arrayEmptyNew);
console.log('==============');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

for (let i = 1; i < arrayEmptyD.length; i++) {
    if (arrayEmptyD[i + 1] % 2 === 0) {
        console.log(arrayEmptyD[i]);
    }
}

console.log('==============');
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrayPrices = [100, 250, 50, 168, 120, 345, 188];
let middle = 0;
for (const arrayPrice of arrayPrices) {
    middle = middle + arrayPrice;
}
middle = middle / arrayPrices.length;
console.log(middle);
console.log('==============');


//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array7 = [];
let array7New = [];
for (let i = 0; i < 10; i++) {
    array7[i] = Math.floor(Math.random() * 100);
    array7New[i] = array7[i] * 5;
}
console.log(array7);
console.log('==============');
console.log(array7New);
console.log('==============');


//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arraySome = [23, 'sdggs', true, {}, 124, 'sdgwwet', 1256];
let arrayNumber = [];
for (let i = 0; i < arraySome.length; i++) {
    if (typeof arraySome[i] == "number") {
        arrayNumber.push(arraySome[i]);
    }
}

console.log(arrayNumber);
console.log('==============');


//Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

citiesWithId = citiesWithId.sort((a, b) => a.user_id - b.user_id);
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    if (usersWithId[i].id === citiesWithId[i].user_id) {
        const newUser = {
            id: usersWithId[i].id,
            name: usersWithId[i].name,
            age: usersWithId[i].age,
            status: usersWithId[i].status,
            address: {
                user_id: citiesWithId[i].user_id,
                country: citiesWithId[i].country,
                city: citiesWithId[i].city
            }
        }
        usersWithCities.push(newUser);
    }
}
console.log(usersWithCities);


//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let array10 = [];
for (let i = 0; i < 10; i++) {
    array10[i] = Math.floor(Math.random() * 100)
    if (array10[i] % 2 === 0) {
        console.log(array10[i]);
    }
}

console.log(array10);
console.log('==============');


//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array10Empty = [];
for (let i = 0; i < array10.length; i++) {
    array10Empty[i] = array10[i];
}
console.log(array10Empty);
console.log('==============');


//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrayABC = ['a', 'b', 'c'];

for (let i = 0; i < arrayABC.length; i++) {

}
let stringFor = '';
for (let i = 0; i < arrayABC.length; i++) {
    stringFor = stringFor + arrayABC[i];
}
console.log(stringFor);

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let stringWhile = '';
let i = 0;
while (i < arrayABC.length) {
    stringWhile = stringWhile + arrayABC[i];
    i++;
}
console.log(stringWhile);

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let stringOf = '';
for (const char of arrayABC) {
    stringOf = stringOf + char;
}

console.log(stringOf);
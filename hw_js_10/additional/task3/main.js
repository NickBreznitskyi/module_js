//-- взять массив пользователей
//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let div = document.createElement("div");

let check1 = document.createElement('input');
check1.setAttribute('type', 'checkbox');
check1.setAttribute('name', 'status');


let check2 = document.createElement('input');
check2.setAttribute('type', 'checkbox');
check1.setAttribute('name', 'age');


let check3 = document.createElement('input');
check3.setAttribute('type', 'checkbox');

let submit = document.createElement('button');
submit.innerText = 'ok';

document.body.appendChild(div);
div.append(check1, check2, check3, submit);

submit.onclick = (ev) => {
    ev.preventDefault();
    let status = check1.checked;
    let age = check2.checked;
    let city = check3.checked;
    let f = [];
    if (status && age && city) {
        f = usersWithAddress.filter(value => value.status !== status && value.age >= 29 && value.address.city === 'Kyiv');
    } else if (status && age) {
        f = usersWithAddress.filter(value => value.status !== status && value.age >= 29);
    } else if (status && city) {
        f = usersWithAddress.filter(value => value.status !== status && value.address.city === 'Kyiv');
    } else if (age && city) {
        f = usersWithAddress.filter(value => value.age >= 29 && value.address.city === 'Kyiv');
    } else if (status) {
        f = usersWithAddress.filter(value => value.status !== status);
    } else if (age) {
        f = usersWithAddress.filter(value => value.age >= 29);
    } else if (city) {
        f = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    }

    let div = document.createElement("div");
    document.body.appendChild(div);

    let ul = document.createElement("ul");
    div.appendChild(ul);

    for (const fElement of f) {
        let li = document.createElement('li');
        for (const fKey in fElement) {
            if (typeof fElement[fKey] == "object") {
                for (const fKeyKey in fElement[fKey]) {
                    li.innerText += fKeyKey + ' ' + fElement[fKey][fKeyKey] + ' ';
                }
            } else {
                li.innerText += fKey + ' ' + fElement[fKey] + ' ';
            }
        }
        ul.appendChild(li);
    }
}
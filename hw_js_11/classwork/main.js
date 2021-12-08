// є масив -
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


if (localStorage.getItem('favouriteList') === null) {
    let favouriteArray = [];
    localStorage.setItem('favouriteList', JSON.stringify(favouriteArray));
}
if (localStorage.getItem('id') === null) {
    let idArray = [];
    localStorage.setItem('id', JSON.stringify(idArray));
}

let count = 1;
for (const user of users) {
    let htmlDivElement = document.createElement("div");
    document.body.appendChild(htmlDivElement);
    for (const userKey in user) {
        htmlDivElement.innerText += ` ${userKey}: ${user[userKey]}`
    }

    let addToFavourite = document.createElement("button");
    addToFavourite.innerText = 'Add to favorite';

    addToFavourite.setAttribute('id', count.toString());
    count++;
    htmlDivElement.appendChild(addToFavourite);

    addToFavourite.onclick = function (ev) {
        ev.preventDefault();
        ev.target.disabled = 'true';

        let item = localStorage.getItem('favouriteList');
        let parse = JSON.parse(item);

        parse.push(user);
        localStorage.setItem('favouriteList', JSON.stringify(parse));

        let id = localStorage.getItem('id');
        let parseId = JSON.parse(id);
        parseId.push(ev.target.id);
        localStorage.setItem('id', JSON.stringify(parseId));
    }

}

window.onload = function () {
    let idList = localStorage.getItem('id');
    let parse = JSON.parse(idList);
    for (const id of parse) {
        let element = document.getElementById(id);
        element.disabled = 'true';
    }
}


let favouriteList = document.createElement('button');
document.body.appendChild(favouriteList);
favouriteList.innerText = 'Favorite List'

favouriteList.onclick = function () {
    location.href = 'favourites.html';
}
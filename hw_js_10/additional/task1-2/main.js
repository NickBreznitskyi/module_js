//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let divA = document.createElement("div");
document.body.appendChild(divA);
divA.style.width = '100px';
divA.style.height = '100px';
divA.style.background = 'grey';
divA.classList.add('qwe', 'asd');

let divB = document.createElement("div");
document.body.appendChild(divB);
divB.style.width = '200px';
divB.style.height = '200px';
divB.style.background = 'red';

addEventListener('click', function (e) {
    console.log(e.target.localName);
    console.log(e.target.classList);
    console.log(e.target.id);
    console.log(e.target.offsetHeight);
    console.log(e.target.offsetWidth);
})

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let Popup = document.createElement("div");
Popup.style.width = '300px';
Popup.style.minHeight = '300px';
Popup.style.background = 'yellow';
Popup.style.overflow = 'hidden';
Popup.style.position = 'fixed'
Popup.style.display = 'none';
Popup.style.top = '30%';
Popup.style.right = '40%';
Popup.style.textAlign = 'center';
document.body.appendChild(Popup);

addEventListener('click', function (e) {
    Popup.innerText += e.target.localName;
    Popup.innerText += '\n' + e.target.classList;
    Popup.innerText += '\n' + e.target.id;
    Popup.innerText += '\n' + e.target.offsetHeight;
    Popup.innerText += '\n' + e.target.offsetWidth;
    Popup.innerText = `${e.target.localName}\n${e.target.id}\n${e.target.offsetHeight}\n${e.target.offsetWidth}\n`
    Popup.style.display = 'block';
})

addEventListener('dblclick', () => {
    Popup.style.display = 'none';
})
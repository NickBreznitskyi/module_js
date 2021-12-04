//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let element = document.createElement("div");
let btn = document.createElement("button");
element.setAttribute('id', 'text');
element.innerText = 'text';
btn.innerText = 'btn';
element.style.fontSize = '40px';
document.body.append(element, btn);
btn.onclick = function () {
    element.hidden = true;
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn1 = document.createElement("button");
btn1.innerText = 'btn1';
document.body.appendChild(btn1);
btn1.onclick = function () {
    btn1.hidden = true;
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inp = document.createElement("input");
inp.setAttribute('type', 'number');
inp.innerText = 'Set age';
let btn2 = document.createElement("button");
btn2.innerText = 'ok';
let p = document.createElement("p");
document.body.append(inp, btn2, p);
btn2.onclick = function () {
    if (inp.value < 18 && inp.value > -1) {
        p.innerText = 'Вік менше 18';
    } else if (inp.value > 18 && inp.value < 120) {
        p.innerText = 'Вік більше 18';
    } else if (inp.value == 18) {
        p.innerText = 'Вік рівний 18';
    } else if (inp.value < -1 || inp.value > 120) {
        p.innerText = 'Error';
    }
}

//- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.createElement("div");
menu.innerText = 'Menu';
menu.style.cursor = 'pointer';

let menuDrop = document.createElement("div");
menuDrop.classList.add('d-none');

let item1 = document.createElement("div");
item1.innerText = 'item1';

let item2 = document.createElement("div");
item2.innerText = 'item2';

let item3 = document.createElement("div");
item3.innerText = 'item3';

document.body.appendChild(menu);
menu.appendChild(menuDrop);
menuDrop.append(item1, item2, item3);

menu.onclick = function () {
    menuDrop.classList.toggle('d-none')
}


//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'gsdgsgds', body: 'dskggsd sdghih'},
    {title: 'fhkg', body: 'sddsg fshjfdgs duhgdsilkg sf df'},
    {title: 'xccjg', body: 'dfhjjidsf fdhughwe fdhg'},
    {title: 'vbmv', body: 'sdasio hgiow weiff iodhfg'},
];

for (const comment of comments) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let btnHidden = document.createElement("button");
    btnHidden.innerText = 'hide';
    h2.innerText = comment.title;
    p.innerText = comment.body;
    btnHidden.onclick = () => {
        p.hidden = true;
    }
    document.body.appendChild(div);
    div.append(h2, p, btnHidden);
}

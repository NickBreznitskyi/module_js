//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrayImg = ["https://ru.js.cx/carousel/1.png", "https://ru.js.cx/carousel/2.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png", "https://ru.js.cx/carousel/3.png"];

let container = document.createElement("div");
document.body.appendChild(container);
container.style.background = 'grey';
container.style.width = '150px';
container.style.position = 'relative';
container.style.overflow = 'hidden';

let ul = document.createElement("ul");
container.appendChild(ul);

for (const arrayImgElement of arrayImg) {
    let li = document.createElement('li');
    ul.appendChild(li);
    ul.style.width = '9999px'
    li.style.position = 'relative';
    let img = document.createElement("img");
    img.setAttribute('src', arrayImgElement);
    li.appendChild(img);
    li.style.display = 'inline-block';
    img.style.display = 'block';
}
let width = 150;
let count = 1;

let prev = document.createElement('button');
prev.innerText = 'prev';

let next = document.createElement('button');
next.innerText = 'next';

document.body.append(prev, next);

let position = 0;

prev.onclick = function () {
    position += width;
    position = Math.min(position, 0)
    ul.style.marginLeft = position + 'px';
}

next.onclick = function () {
    position -= width;
    position = Math.max(position, -width * (arrayImg.length - count));
    ul.style.marginLeft = position + 'px';
}
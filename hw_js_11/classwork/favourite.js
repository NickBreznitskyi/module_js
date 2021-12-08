let favList = localStorage.getItem('favouriteList');

let parse = JSON.parse(favList);

for (const parseElement of parse) {
    let htmlDivElement = document.createElement("div");
    document.body.appendChild(htmlDivElement);
    for (const parseKey in parseElement) {
        htmlDivElement.innerText += ` ${parseKey}: ${parseElement[parseKey]}`
    }

    let btnDel = document.createElement("button");
    btnDel.innerText = 'Del from Fav';
    let i = parse.indexOf(parseElement).toString();
    btnDel.setAttribute('id', i)
    htmlDivElement.appendChild(btnDel);

    btnDel.onclick = function (ev) {
        htmlDivElement.style.display = 'none';
        let idList = localStorage.getItem('id');
        let p = JSON.parse(idList);
        p.splice(parseInt(ev.target.id), 1);
        parse.splice(parseInt(ev.target.id), 1);
        localStorage.setItem('id', JSON.stringify(p));
        localStorage.setItem('favouriteList', JSON.stringify(parse));
    }
}

let buttonElement = document.createElement("button");
document.body.appendChild(buttonElement);
buttonElement.innerText = 'Go Back';

buttonElement.onclick = () => history.back();


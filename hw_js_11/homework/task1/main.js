//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let forms = document.createElement('form');
document.body.appendChild(forms);

let inputName = document.createElement('input');
inputName.placeholder = 'Enter name';

let inputAge = document.createElement('input');
inputAge.setAttribute('type', 'number');
inputAge.placeholder = 'Enter Age';

let submit = document.createElement("button");
submit.innerText = 'ok';

forms.append(inputName, inputAge, submit);

function CreateObj(name, age) {
    this.name = name;
    this.age = age;
}

submit.onclick = function (ev) {
    ev.preventDefault();
    let objStr = JSON.stringify(new CreateObj(inputName.value, inputAge.value))
    localStorage.setItem('user', objStr);
    inputName.value = '';
    inputAge.value = '';
}
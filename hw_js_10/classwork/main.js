//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let div1 = document.createElement("div");
let div2 = document.createElement("div");

let form1 = document.createElement("form");
form1.setAttribute('name', 'form1');

let form2 = document.createElement("form");
form2.setAttribute('name', 'form2');

let input11 = document.createElement("input");
input11.setAttribute('name', 'input11');

let input12 = document.createElement("input");
input12.setAttribute('name', 'input12');

let input21 = document.createElement("input");
input21.setAttribute('name', 'input21');

let input22 = document.createElement("input");
input22.setAttribute('name', 'input22');

let btnForm = document.createElement("button");
btnForm.innerText = 'info';

document.body.append(div1, div2, btnForm);
div1.appendChild(form1);
div2.appendChild(form2);
form1.append(input11, input12);
form2.append(input21, input22);

btnForm.onclick = () => {
    console.log(document.forms.form1.input11.value);
    console.log(document.forms.form1.input12.value);
    console.log(document.forms.form2.input21.value);
    console.log(document.forms.form2.input22.value);
}

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let wrapper = document.createElement("div");
document.body.appendChild(wrapper);

let inputRow = document.createElement("input");
inputRow.setAttribute('type', 'number');

let inputColumn = document.createElement("input");
inputColumn.setAttribute('type', 'number');

let inputContent = document.createElement("input");

let createTable = document.createElement("button");
createTable.innerText = 'createTable';
wrapper.append(inputRow, inputColumn, inputContent, createTable);
createTable.onclick = () => {
    let table = document.createElement('table');
    document.body.appendChild(table);
    let td = inputColumn.value;
    let tr = inputRow.value;
    if (td > 0 && tr > 0) {
        for (let i = 0; i < tr; i++) {
            let tableTr = document.createElement('tr');
            table.appendChild(tableTr);
            for (let j = 0; j < td; j++) {
                let tableTd = document.createElement("td");
                tableTd.innerText = inputContent.value;
                tableTr.appendChild(tableTd);
            }
        }
    }
}

//Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let matuky = ['xxx', 'yyy', 'qwe', 'asd'];

let matInput = document.createElement("input");
matInput.setAttribute('type', 'text');
document.body.appendChild(matInput);
let matBtn = document.createElement("button");

matBtn.innerText = 'matuk or not matuk';
document.body.appendChild(matBtn);

matBtn.onclick = () => {
    if (matuky.includes(matInput.value)) {
        alert('Не матюкайся негіднику');
    } else {
        alert('Хороший хлопчик')
    }
}


//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let mInput = document.createElement("input");
mInput.setAttribute('type', 'text');
document.body.appendChild(mInput);
let mBtn = document.createElement("button");

mBtn.innerText = 'Check matuk in sentence';
document.body.appendChild(mBtn);

mBtn.onclick = () => {
    for (const matuk of matuky) {
        if (mInput.value.includes(matuk)) {
            alert('Не матюкайся негіднику');
        }
    }
}
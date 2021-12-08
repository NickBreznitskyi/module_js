//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let forms = document.createElement('form');
document.body.appendChild(forms);

let inputModel = document.createElement('input');
inputModel.placeholder = 'Enter model';

let inputType = document.createElement('input');
inputType.placeholder = 'Enter type';

let inputVolume = document.createElement('input');
inputVolume.placeholder = 'Enter volume';

let submit = document.createElement("button");
submit.innerText = 'ok';

forms.append(inputModel, inputType, inputVolume, submit);

let CarObj = function (model, type, volume) {
    this.model = model;
    this.type = type;
    this.volume = volume;
}

if (localStorage.getItem('CarArray') === null) {
    let carArray = [];
    localStorage.setItem('CarArray', JSON.stringify(carArray));
}

submit.onclick = function (ev) {
    ev.preventDefault();
    let item = localStorage.getItem('CarArray');
    let parse = JSON.parse(item);
    parse.push(new CarObj(inputModel.value, inputType.value, inputVolume.value));
    console.log(parse);
    localStorage.setItem('CarArray', JSON.stringify(parse));

    inputModel.value = '';
    inputType.value = '';
    inputVolume.value = '';
}
//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let currentElement = document.body;
let counter = 0;
let prev = document.createElement('button');
prev.innerText = 'prev';
prev.addEventListener('click', function () {
    if (currentElement.children.length) {
        if (counter) {
            counter -= 1;
            currentElement = document.body.children[counter];
            console.log(currentElement);
        } else {
            if (counter === 0)
                console.log(currentElement);
            else {
                console.log(currentElement.children[currentElement.children.length - 1]);
                currentElement = currentElement.children[currentElement.children.length - 1];
            }
        }
    } else {
        if (!currentElement.previousElementSibling) {
            currentElement = document.body.children[counter];
            console.log(currentElement);

            if (counter) {
                counter -= 1;
                currentElement = document.body.children[counter];
            }
        } else {
            console.log(currentElement.previousElementSibling);
            currentElement = currentElement.previousElementSibling;
        }
    }
})
;

let next = document.createElement('button')
next.innerText = 'next';
next.addEventListener('click', function () {
    if (currentElement.children.length) {
        console.log(currentElement.children[0]);
        currentElement = currentElement.children[0];
    } else {
        if (!currentElement.nextElementSibling) {
            counter += 1;
            currentElement = document.body.children[counter];
            console.log(currentElement);
        } else {
            console.log(currentElement.nextElementSibling);
            currentElement = currentElement.nextElementSibling;
        }
    }
})
document.body.append(prev, next);
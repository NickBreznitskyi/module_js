//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function recClassName(startElement) {

    if (startElement.classList.length) {
        for (const classElement of startElement.classList) {
            if (!arrClassName.includes(classElement)) {
                arrClassName.push(classElement);
            }
        }
    }
    if (startElement.children.length) {
        for (const element of startElement.children) {
            recClassName(element);
        }
    }
}

let arrClassName = [];
recClassName(document.body)
console.log(arrClassName);
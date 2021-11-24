//Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length, loremIpsum.length, javascriptIsCool.length);
console.log('=============');

//Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let helloWorldUpp = helloWorld.toUpperCase();
console.log(helloWorldUpp);
console.log('=============');
let loremIpsumUpp = loremIpsum.toUpperCase();
console.log(loremIpsumUpp);
console.log('=============');
let javascriptIsCoolUpp = javascriptIsCool.toUpperCase();
console.log(javascriptIsCoolUpp);
console.log('=============');

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   '
console.log(dirtyString.trim());
console.log('=============');

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str) => str.split(' ');

let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr);
console.log(arr);
console.log('=============');

//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.substr(0, length);
document.writeln(delete_characters(str, 7));
console.log(delete_characters(str, 7));
console.log('=============');

//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();

let strHTML = "HTML JavaScript PHP";
document.writeln(insert_dash(strHTML));
console.log(insert_dash(strHTML));
console.log('=============');

//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let uppFirst = (str) => str.replace(str[0], str[0].toUpperCase());

document.write(uppFirst('gkjgdhfd'));
console.log(uppFirst('gkjgdhfd'));
console.log('=============');


//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let arrStr = str.split(' ');
    let arrStrNew = [];
    for (let arrStrElement of arrStr) {
        arrStrElement = arrStrElement.replace(arrStrElement[0], arrStrElement[0].toUpperCase());
        arrStrNew.push(arrStrElement);
    }
    return arrStrNew.toString().replaceAll(',', ' ');
}

console.log(capitalize('sgsg eqet dzg'));
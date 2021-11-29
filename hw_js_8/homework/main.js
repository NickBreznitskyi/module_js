//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"

let contentText = document.getElementById('content')
console.log(contentText.innerText);
console.log('==============');

// отримує текст з блоку з id "rules"

let rulesText = document.getElementById('rules');
console.log(rulesText.innerText);
console.log('==============');

//замініть текст параграфа з id 'content' на будь-який інший
let contentNewText = contentText.innerText = 'qweasdzxc';
console.log(contentNewText);
console.log('==============');

//замініть текст параграфа з id 'rules' на будь-який інший

let rulesNewText = rulesText.innerText = 'asasdas';
console.log(rulesNewText);
console.log('==============');

//змініть кожному елементу колір фону на червоний
//змініть кожному елементу колір тексту на синій

let allTag = document.body.children;
for (const tag of allTag) {
    tag.style.backgroundColor = 'red';
    tag.style.color = 'blue';
}

//отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesClassList = document.getElementById('rules').classList;
console.log(rulesClassList);

//поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red';
}
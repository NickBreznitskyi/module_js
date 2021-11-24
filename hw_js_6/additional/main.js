//Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validation = (str) => {
    let newStr = str.toLowerCase();
    return newStr.indexOf('@') !== 0 && newStr.includes('@') && newStr.indexOf('.') - newStr.indexOf('@') <= 2 && newStr.indexOf('.') > newStr.indexOf('@');
}

console.log(validation('someemail@gmail.com'));
console.log(validation('someeMAIL@gmail.com'));
console.log(validation('someeMAIL@i.ua'));
console.log(validation('some.email@gmail.com'));

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sort = coursesArray.sort((cour1, cour2) => cour2.modules.length - cour1.modules.length);
console.log(sort);

//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let count = 0;
    let pos = str.indexOf(stringsearch);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(stringsearch, pos + 1);
    }
    return count;
}
let symb = "о", str = "Астрономия это наука о небесных объектах";
console.log(count(str, symb));

//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str1 = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    let newArr = str.split(' ');
    return newArr.slice(0, n).toString().replaceAll(',', ' ');
}

console.log(cutString(str1, 5));
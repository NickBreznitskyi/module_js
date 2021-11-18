//створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function concat() {
    if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length > 1) {
        let concat = '';
        for (const argument of arguments) {
            concat += argument
        }
        return concat;
    }
}

console.log(concat(1, 'sdg', 32, 'wq'));
console.log('=================');


//створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let array1 = [1, 2, 3, 4];
let array2 = [2, 3, 4, 5];

function arrayCompilesSameIndex(arr1, arr2) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i];
        result.push(sum);
    }
    return result;
}

console.log(arrayCompilesSameIndex(array1, array2));
console.log('=================');


//Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrayObject = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function objectKeys(arr) {
    let objectKeys = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            objectKeys.push(arrElementKey);
        }
    }
    return objectKeys;
}

console.log(objectKeys(arrayObject));
console.log('=================');
//Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objectValues(arr) {
    let objectValues = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            objectValues.push(arrElement[arrElementKey]);
        }
    }
    return objectValues;
}

console.log(objectValues(arrayObject));
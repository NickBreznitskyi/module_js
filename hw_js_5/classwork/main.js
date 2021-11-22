//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else if (c < a && c < b) {
        return c;
    }
}

console.log(min(3433, 464, 12342));
console.log('==============');

////створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

console.log(max(236, 69543, 14));
console.log('==============');

//створити функцію яка повертає найбільше число з масиву
//створити функцію яка повертає найменьше число з масиву
let arrayNumber = [238, 9436, 567, 122, 965, 8754];

let maxInArray = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let minInArray = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(maxInArray(arrayNumber));
console.log('==============');
console.log(minInArray(arrayNumber));
console.log('==============');


//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arraySum = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(arraySum(arrayNumber));
console.log('==============');

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmeticMean = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return Math.round(sum / arr.length);
}

console.log(arithmeticMean(arrayNumber));
console.log('==============');

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minMax(342, 797, 235, 6993, 32, 653, 904));
console.log('==============');


//створити функцію яка заповнює масив рандомними числами
let emptyArray = [];

let randomArray = (arr, length) => {
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

console.log(randomArray(emptyArray, 5));
console.log('==============');

//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let arrayEmpty = [];

let randomArrayLimit = (arr, length, limit) => {
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}

console.log(randomArrayLimit(emptyArray, 5, 500));
console.log('==============');

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrayReverse = (arr) => {
    let arrayEmptyReverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayEmptyReverse.push(arr[i]);
    }
    return arrayEmptyReverse;
}

console.log(arrayNumber);
console.log('==============');
console.log(arrayReverse(arrayNumber));
//Дано натуральное число n. Выведите все числа от 1 до n.
let outputN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

outputN(10);
console.log('================');

//Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let outputAB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log(a);
    }
}

outputAB(15, 10);
console.log('================');

//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let elementChange = (arr, i) => {
    if (i >= arr.length - 1 || i < 0) {
        return 'error';
    } else {
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                let x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }
    return arr;
}

console.log(elementChange([9, 8, 0, 4], 0));

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let array = [0];

let zeroEnd = (arr) => {
    if (arr.length >= 2 && arr.length <= 100) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[count++] = arr[i];
            }
        }
        while (count < arr.length) {
            arr[count++] = 0;
        }
        return arr;
    } else {
        return 'Error! Array must be from 2 to 100'
    }
}

console.log(zeroEnd(array));
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


//перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

console.log('========');


//перебрати його циклом for
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log('========');


//перебрати циклом while та вивести  числа тільки з непарним індексом
let index = 0;
while (index < array.length) {
    if (index % 2 !== 0) {
        console.log(array[index]);
    }
    index++;
}

console.log('========');


//перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log('========');

//перебрати циклом while та вивести  числа тільки парні  значення
let a = 0;
while (a < array.length) {
    if (a % 2 === 0) {
        console.log(array[a]);
    }
    a++;
}

console.log('========');


//перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

console.log('========');


//замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        //array[i] = 'okten';
    }
    console.log(array[i]);
}


console.log('========');


//вивести масив в зворотньому порядку.
let arrayReverse = [];
for (let i = 0; i < array.length; i++) {
    arrayReverse[i] = array[array.length - i - 1];
}
console.log(arrayReverse);

// або
//console.log(array.reverse()); //щоб не паритись з циклом.
console.log('========');

let arrayIndexRevers = array.length - 1;
while (arrayIndexRevers >= 0) {
    console.log(array[arrayIndexRevers]);
    arrayIndexRevers--
}

console.log('========');

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

console.log('========');


let ind = array.length - 1;
while (ind >= 0) {
    if (ind % 2 !== 0) {
        console.log(array[ind]);
    }
    ind--;
}

console.log('========');

for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log('========');


let indrev = array.length - 1;
while (indrev >= 0) {
    if (array[indrev] % 2 === 0) {
        console.log(array[indrev]);
    }
    indrev--;
}

console.log('========');

for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

console.log('========');


for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
    console.log(array[i]);
}
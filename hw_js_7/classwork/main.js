function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = function () {
        console.log(`Модель - ${this.model}\nВиробник - ${this.producer}\nРік випуску- ${this.year}\nМаксимальна швидкість - ${this.maxSpeed}\nОб'єм двигуна - ${this.engineCapacity}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }

}

let Car1 = new Car('Camry', 'Toyota', '2012', 240, 2.5)
console.log(Car1);
Car1.drive();
Car1.info();
Car1.increaseMaxSpeed(10);
Car1.changeYear('2015');
Car1.addDriver({name: 'vasya', age: 31});
console.log(Car1);

//(Те саме, тільки через клас)
class CarClass {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`Модель - ${this.model}\nВиробник - ${this.producer}\nРік випуску- ${this.year}\nМаксимальна швидкість - ${this.maxSpeed}\nОб'єм двигуна - ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let Car2 = new CarClass('Mustang', 'Ford', '2016', 240, 3);
console.log(Car2);
Car2.drive();
Car2.info();
Car2.increaseMaxSpeed(10);
Car2.changeYear('2015');
Car2.addDriver({name: 'kolya', age: 27});
console.log(Car2);

//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayCinderella = [];
arrayCinderella.push(new Cinderella('1', 23, 36));
arrayCinderella.push(new Cinderella('2', 22, 35));
arrayCinderella.push(new Cinderella('3', 28, 38));
arrayCinderella.push(new Cinderella('4', 21, 40));
arrayCinderella.push(new Cinderella('5', 20, 34));
arrayCinderella.push(new Cinderella('6', 24, 37));
arrayCinderella.push(new Cinderella('7', 22, 39));
arrayCinderella.push(new Cinderella('8', 23, 41));
arrayCinderella.push(new Cinderella('9', 23, 33));
arrayCinderella.push(new Cinderella('10', 27, 42));
console.log(arrayCinderella);

class Prince extends Cinderella {

}

let prince = new Prince('vasya', 25, 34);

for (const cinderella of arrayCinderella) {
    if (cinderella.footSize === prince.footSize) {
        console.log(cinderella)
        console.log(`Prince must be with ${cinderella.name} cinderella`);
    }
}

console.log(arrayCinderella.find((find) => find.footSize === prince.footSize));
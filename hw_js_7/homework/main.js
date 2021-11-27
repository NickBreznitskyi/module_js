//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArray = [];
userArray.push(new User(userArray.length + 1, 'agfafs', 'dsfsf', 'sdgs@sdf.com', '3254324'));
userArray.push(new User(userArray.length + 1, 'sdg', 'dsfsdgssf', 'sddsggs@sdf.com', '3464856'));
userArray.push(new User(userArray.length + 1, 'ssgh', 'khgk', 'asey@sdf.com', '054363'));
userArray.push(new User(userArray.length + 1, 'shsh', 'i565', 'xcgs@sdf.com', '84423'));
userArray.push(new User(userArray.length + 1, 'cxxsadf', 'dsfhddfsf', 'jlu@sdf.com', '874321'));
userArray.push(new User(userArray.length + 1, 'vvdbf', 'ujfsg', 'otrs@sdf.com', '843427'));
userArray.push(new User(userArray.length + 1, 'xcgdh', 'qwetyr', 'cxn@sdf.com', '79765763'));
userArray.push(new User(userArray.length + 1, 'dshck', 'qtigx', 'yyd@sdf.com', '35488'));
userArray.push(new User(userArray.length + 1, 'zdgsi', 'pyu', 'sgt@sdf.com', '46876'));
userArray.push(new User(userArray.length + 1, 'cvh', 'aar', 'tyr@sdf.com', '378977'));
console.log(userArray);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//debugger;
let filter = userArray.filter((param) => param.id % 2 === 0);
console.log(filter);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = userArray.sort((a, b) => a.id - b.id);
console.log(sort);


//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArray = [];
clientArray.push(new Client(clientArray.length + 1, 'agfafs', 'dsfsf', 'sdgs@sdf.com', '3254324', ['sdg', 'rruw']));
clientArray.push(new Client(clientArray.length + 1, 'sdg', 'dsfsdgssf', 'sddsggs@sdf.com', '3464856', ['sdgh', 'xvchh', 'wetru']));
clientArray.push(new Client(clientArray.length + 1, 'ssgh', 'khgk', 'asey@sdf.com', '054363', ['sdg', 'rruw', 'wetru', 'zcxbncg']));
clientArray.push(new Client(clientArray.length + 1, 'shsh', 'i565', 'xcgs@sdf.com', '84423', ['sdgsdsfb', 'rxccbruw']));
clientArray.push(new Client(clientArray.length + 1, 'cxxsadf', 'dsfhddfsf', 'jlu@sdf.com', '874321', ['sfdhfgl', 'zgfj', 'cvndf', 'dsdgash']));
clientArray.push(new Client(clientArray.length + 1, 'vvdbf', 'ujfsg', 'otrs@sdf.com', '843427', ['sdg', 'rrsuw', 'zbfh']));
clientArray.push(new Client(clientArray.length + 1, 'xcgdh', 'qwetyr', 'cxn@sdf.com', '79765763', ['ssdgsgdg']));
clientArray.push(new Client(clientArray.length + 1, 'dshck', 'qtigx', 'yyd@sdf.com', '35488', ['ewhjty', 'xcbng', 'reyu', 'egdhgsc', 'avxvc', 'sdfsfhc']));
clientArray.push(new Client(clientArray.length + 1, 'zdgsi', 'pyu', 'sgt@sdf.com', '46876', ['asf', 'rruw',]));
clientArray.push(new Client(clientArray.length + 1, 'cvh', 'aar', 'tyr@sdf.com', '378977', ['sdg', 'rruw', 'wetru']));
console.log(clientArray);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArray.sort((a, b) => a.order.length - b.order.length));
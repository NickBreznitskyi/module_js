//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            nameCompany,
            catchPhrase,
            bs
        }
    }
}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user);

//Створити функцію конструктор / клас  який описує об'єкт тегу
class DescriptionTag {

    constructor(titleOfTag) {
        this.titleOfTag = titleOfTag;
        if (titleOfTag === 'a') {
            this.action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок';
            this.attrs = [
                {
                    titleOfAttr: 'accesskey',
                    actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
                },
                {
                    titleOfAttr: 'coords',
                    actionOfAttr: 'Устанавливает координаты активной области.'
                }
            ]
        } else if (titleOfTag === 'div') {
            this.action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
            this.attrs = [
                {
                    titleOfAttr: 'align',
                    actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
                },
                {
                    titleOfAttr: 'title',
                    actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
                }
            ]
        } else if (titleOfTag === 'h1') {
            this.action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня';
            this.attrs = [
                {
                    titleOfAttr: 'align',
                    actionOfAttr: 'Определяет выравнивание заголовка.'
                }

            ]
        } else if (titleOfTag === 'span') {
            this.action = 'Тег <span> предназначен для определения строчных элементов документа.';
            this.attrs = [
                {
                    titleOfAttr: 'accesskey',
                    actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
                },
                {
                    titleOfAttr: 'contenteditable',
                    actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'

                }
            ]
        } else if (titleOfTag === 'input') {
            this.action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
            this.attrs = [
                {
                    titleOfAttr: 'accept',
                    actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
                },
                {
                    titleOfAttr: 'autocomplete',
                    actionOfAttr: 'Включает или отключает автозаполнение.'

                }
            ]
        } else if (titleOfTag === 'form') {
            this.action = 'Тег <form> устанавливает форму на веб-странице.';
            this.attrs = [
                {
                    titleOfAttr: 'action',
                    actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
                }
            ]
        } else if (titleOfTag === 'option') {
            this.action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
            this.attrs = [
                {
                    titleOfAttr: 'disabled',
                    actionOfAttr: 'Заблокировать для доступа элемент списка.'
                },
                {
                    titleOfAttr: 'label',
                    actionOfAttr: 'Указание метки пункта списка.'
                }
            ]
        } else if (titleOfTag === 'select') {
            this.action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
            this.attrs = [
                {
                    titleOfAttr: 'accesskey',
                    actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
                },
                {
                    titleOfAttr: 'form',
                    actionOfAttr: 'Связывает список с формой.'
                }
            ]
        } else {
            console.error('We dont find this tag');
        }
    }
}

let a = new DescriptionTag('option');

console.log(a);
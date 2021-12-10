//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.setAttribute('class', 'post');
            divPost.style.margin = '10px';
            divPost.style.border = '1px solid black';
            div.appendChild(divPost);
            for (const postKey in post) {
                let divPostKey = document.createElement('div');
                divPostKey.innerText = `${postKey} - ${post[postKey]};`
                divPost.appendChild(divPostKey);
                divPostKey.style.marginBottom = '5px';

            }
        }
    })
let div = document.createElement("div");
document.body.appendChild(div)
div.style.display = 'grid';
div.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
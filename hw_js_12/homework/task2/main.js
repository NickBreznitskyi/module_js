//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let wrap = document.createElement("div");
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let divComment = document.createElement("div");
            divComment.setAttribute('class', 'comment');
            wrap.appendChild(divComment);
            for (const commentKey in comment) {
                let divKey = document.createElement("div");
                divKey.innerText = `${commentKey} - ${comment[commentKey]}`;
                divComment.appendChild(divKey);
            }
        }
    })
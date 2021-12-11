//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let userWrap = document.createElement("div");
document.body.appendChild(userWrap);

function fn(object, wrap) {
    for (const objectKey in object) {
        let objectKeyElement = document.createElement("div");
        if (typeof object[objectKey] === "object") {
            fn(object[objectKey], objectKeyElement);
        } else {
            objectKeyElement.innerText += `${objectKey}: ${object[objectKey]}`;
        }
        wrap.appendChild(objectKeyElement);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersList => {
        for (const object of usersList) {
            let wrap = document.createElement("div");
            wrap.style.border = '1px solid black';
            userWrap.appendChild(wrap);
            fn(object, wrap);
            let btnUser = document.createElement("button");
            btnUser.innerText = 'Get post of user';
            wrap.appendChild(btnUser);
            btnUser.onclick = () => {
                let postOfUserWrap = document.createElement("div");
                wrap.appendChild(postOfUserWrap);
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(postsList => {
                        let postsUser = postsList.filter(el => el.userId === object.id);
                        for (const postsUserElement of postsUser) {
                            let divPost = document.createElement("div");
                            postOfUserWrap.appendChild(divPost);
                            divPost.style.border = '1px solid red';
                            for (const postKey in postsUserElement) {
                                let divPostKey = document.createElement("div");
                                divPostKey.innerText = `${postKey}: ${postsUserElement[postKey]}`;
                                divPost.appendChild(divPostKey);
                            }
                            let btnPost = document.createElement("button");
                            btnPost.innerText = 'Show all posts of user';
                            divPost.appendChild(btnPost);
                            btnPost.onclick = () => {
                                let wrapAllComments = document.createElement("div");
                                divPost.appendChild(wrapAllComments);
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(response => response.json())
                                    .then(commentsList => {
                                        let filter = commentsList.filter(el => el.postId === postsUserElement.id);
                                        for (const filterElement of filter) {
                                            let divComment = document.createElement("div");
                                            wrapAllComments.appendChild(divComment);
                                            divComment.style.border = '1px solid blue';
                                            for (const filterElementKey in filterElement) {
                                                let divFilterElementKey = document.createElement("div");
                                                divFilterElementKey.innerText = `${filterElementKey}: ${filterElement[filterElementKey]}`;
                                                divComment.appendChild(divFilterElementKey);
                                            }
                                        }
                                    })

                            }
                        }
                    })
            }
        }
    })



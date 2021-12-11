//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let wrap = document.createElement("div");
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement("div");
            wrap.appendChild(divPost);
            divPost.style.border = '1px solid black';
            for (const postKey in post) {
                let divPostKey = document.createElement("div");
                divPostKey.innerText = `${postKey}: ${post[postKey]}`;
                divPost.appendChild(divPostKey);
            }
            let btnComments = document.createElement("button");
            btnComments.setAttribute('class', `${post.userId}`)
            btnComments.innerText = 'Show all posts of user';
            divPost.appendChild(btnComments);
            btnComments.onclick = () => {
                let wrapAllComments = document.createElement("div");
                divPost.appendChild(wrapAllComments);
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(commentsList => {
                        let filter = commentsList.filter(el => el.postId === post.id);
                        for (const filterElement of filter) {
                            let divComment = document.createElement("div");
                            wrapAllComments.appendChild(divComment);
                            divComment.style.border = '1px solid red';
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
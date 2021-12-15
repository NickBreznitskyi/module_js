document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

let userWrap = document.createElement("div");
userWrap.style.border = '1px solid black';
document.body.appendChild(userWrap);

function fn(object, wrap) {
    for (const objectKey in object) {
        let objectKeyElement = document.createElement("div");
        objectKeyElement.style.margin = '20px';
        if (typeof object[objectKey] === "object") {
            objectKeyElement.innerText += `${objectKey}:`;
            fn(object[objectKey], objectKeyElement);
        } else {
            objectKeyElement.innerText += `${objectKey}: ${object[objectKey]}`;
        }
        wrap.appendChild(objectKeyElement);
    }
}

fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('userId')}`)
    .then(response => response.json())
    .then(user => {
        fn(user, userWrap);
    })

let userPostBtn = document.createElement("button");
userPostBtn.innerText = 'Post of current user';
userPostBtn.style.marginTop = '10%';
userPostBtn.style.marginBottom = '10%';
document.body.appendChild(userPostBtn);


userPostBtn.onclick = () => {
    userPostBtn.disabled = true;
    let userPostsWrap = document.createElement("div");
    userPostsWrap.style.display = 'flex';
    userPostsWrap.style.flexWrap = 'wrap';
    userPostsWrap.style.justifyContent = 'space-between';
    document.body.appendChild(userPostsWrap);

    fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('userId')}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let userPost = document.createElement("div");
                userPost.style.border = '1px solid red';
                userPost.style.width = '19%';
                userPost.style.marginBottom = '20px';
                userPost.style.display = 'flex';
                userPost.style.flexDirection = 'column';
                userPost.style.justifyContent = 'space-between';
                userPostsWrap.appendChild(userPost);

                let postP = document.createElement("p");
                postP.innerText = `Title: ${post.title}`;


                let postDetails = document.createElement("button");
                postDetails.innerText = 'Details';

                postDetails.onclick = () => {
                    localStorage.setItem('postId', post.id);
                    location.href = 'post-details.html';
                }

                userPost.append(postP, postDetails);

            }
        })
}
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

let postWrap = document.createElement("div");
postWrap.style.border = '1px solid black';
document.body.appendChild(postWrap);

fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}`)
    .then(response => response.json())
    .then(post => {
        for (const postKey in post) {
            let postElement = document.createElement("div");
            postElement.innerText += `${postKey}: ${post[postKey]}`;
            postWrap.appendChild(postElement);
        }

    })

let postCommentBtn = document.createElement("button");
postCommentBtn.innerText = 'Comments of current post';
postCommentBtn.style.marginTop = '10%';
postCommentBtn.style.marginBottom = '10%';
document.body.appendChild(postCommentBtn);


postCommentBtn.onclick = () => {
    postCommentBtn.disabled = true;
    let postCommentWrap = document.createElement("div");
    postCommentWrap.style.display = 'flex';
    postCommentWrap.style.flexWrap = 'wrap';
    postCommentWrap.style.justifyContent = 'space-between';
    document.body.appendChild(postCommentWrap);

    fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                let commentDiv = document.createElement("div");
                commentDiv.style.border = '1px solid red';
                commentDiv.style.width = '24%';
                commentDiv.style.marginBottom = '20px';
                commentDiv.style.display = 'flex';
                commentDiv.style.flexDirection = 'column';
                commentDiv.style.justifyContent = 'space-between';
                postCommentWrap.appendChild(commentDiv);


                for (const commentKey in comment) {
                    let commentP = document.createElement("p");
                    commentP.innerText = `${commentKey}: ${comment[commentKey]}`;
                    commentDiv.appendChild(commentP);
                }
            }
        })
}
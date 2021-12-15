let usersWrap = document.createElement("div");
usersWrap.style.display = 'flex';
usersWrap.style.flexWrap = 'wrap';
usersWrap.style.justifyContent = 'space-between'
document.body.append(usersWrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement("div");
            userDiv.style.width = '49%';
            userDiv.style.marginBottom = '20px';
            userDiv.style.border = '1px solid black';
            usersWrap.appendChild(userDiv);

            let userId = document.createElement("p");
            userId.innerText = `id: ${user.id}`;

            let userName = document.createElement("p");
            userName.innerText = `name: ${user.name}`;

            let userDetails = document.createElement("button");
            userDetails.innerText = 'Details';

            userDetails.onclick = () => {
                localStorage.setItem('userId', user.id);
                location.href = 'user-details.html';
            }

            userDiv.append(userId, userName, userDetails);
        }
    })
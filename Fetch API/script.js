document.getElementById('getText').addEventListener('click', loadUsers);
document.getElementById('getUsers').addEventListener('click', loadJSON);
document.getElementById('getPosts').addEventListener('click', loadAPI);
document.getElementById('addPost').addEventListener('submit', addPost);

function loadUsers() { // fetch returns a promise(placeholder for the res we get async)
    // fetch('sample.txt')
    // .then(function(res){
    //     return res.text(); // res.text will return the promise
    // })
    // .then(function(data){
    //     console.log(data); // return the actual value in the file
    // }); 

    // But with arrow func
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}
function loadJSON() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach(function(user) {
            output += `
            <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function loadAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post) {
            output += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').nodeValue;
    let body = document.getElementById('body').nodeValue;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        header: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
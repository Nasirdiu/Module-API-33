function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(post) {
    const postContainer=document.getElementById('posts');
//   console.log(post);
  for(const posts of post){
      const div=document.createElement('div');
      div.classList.add('poste');
      div.innerHTML =`
      <h1>${posts.userId}</h1>
      <h2>${posts.id}</h2>
      <h3>${posts.title}</h3>
      <p>${posts.body}</p>
      `
      postContainer.appendChild(div);
  }
}

function newPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title:'Nasir Uddin',
            body:'bar',
            userId:369,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res =>res.json())
    .then(data=> console.log(data));
}

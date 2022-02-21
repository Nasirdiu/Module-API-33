function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
//res and data use korle kaj hba.
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => dataCall(data));
};

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data => console.log(data))
};

//function call system

function dataCall(user){
    const userData=document.getElementById('users');
    // console.log(user);
    for(const data of user){
        const li=document.createElement('li');
        li.innerText=`Name:${data.name} --Email:${data.email}`;
        userData.appendChild(li);
    }
};
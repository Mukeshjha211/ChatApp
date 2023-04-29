window.addEventListener('DOMContentLoaded', ()=>{
   const LoginName = localStorage.getItem('Name');
   console.log(LoginName);

   const logs = document.getElementById('login');
   logs.textContent = `${LoginName}:Joined`

   axios.get('http://localhost:3000/user/get-chat',)
   .then(res=>{
    res
    for(let i = 0; i<res.data.chats.length; i++){
        let key = res.data.chats[i];
        ShowChats(key);
    }
  

   })
   .catch(err=>{
    err

   })

})


const button = document.getElementById('button');
button.addEventListener('click', chatMsg);
// Creating Chats...

function chatMsg(e){
    e.preventDefault();
    const Username = document.getElementById('name').value = localStorage.getItem('Name');
    const msg = document.getElementById('msg').value;

    const message = {
       Username,
       msg
    }
    console.log(message);
  
    axios.post('http://localhost:3000/user/chat', message)
    .then(res=>{
        res
        ShowChats(res.data.Chats)
    })
    .catch(err=>{
        err
    })
}

// Showing Chats...
function ShowChats(message){
    const chats=document.getElementById('chats')
    const li = document.createElement('li');

    li.textContent = message.Username +':'+ message.msg;

    chats.appendChild(li);
}
const  button = document.getElementById('button');

button.addEventListener('click', login);

function login(e){
    e.preventDefault();
    const Email = document.getElementById('email').value
    const Password = document.getElementById('password').value;

    const LoginDetails = {
        Email,
        Password
    }
    console.log(LoginDetails)
    axios.post('http://localhost:3000/user/login', LoginDetails)
    .then(res=>{
        res
        alert("Login Successfully")
        localStorage.setItem('token', res.data.token)
    })
    .catch(err=>{
        err
        console.log(err, "Login Error");
        if(err.status==401){
            alert('User not Authorized')

        }
        else{
           alert('User not found')
        }

    })
}
const button = document.getElementById('button');

button.addEventListener('click', signup);

function signup(e){
e.preventDefault();

const Name = document.getElementById('name').value
const Email  = document.getElementById('email').value
const Number = document.getElementById('phone').value
const  Password= document.getElementById('password').value



const SignupDetails = {
 Name,
 Email,
 Number,
 Password
}
console.log(SignupDetails)
axios.post('http://localhost:3000/user/signup', SignupDetails)
.then(res=>{
    if(res.status==200){
        console.log(res.status);
        console.log('SignupSuccessfuly');
    alert('SignupSuccessfully');
    }
})
.catch(err=>{
    console.log(err.status, err, "Error coming...")
  
})

}
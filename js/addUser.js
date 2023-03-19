 
let emailExists = async (email)=>{
    let uri = 'http://localhost:3000/users?email='
    uri += `${email}`
    const res = await fetch(uri)
    const user = await res.json();
    console.log(res)
    console.log(user)
 
    if(user.length === 0){
        return false
    }
    return true
}

// let error_message = document.getElementById('error_message')
// let title = document.getElementById('form_title')
 
const form = document.getElementById('create_user');
const createUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(form.email.value.match(validRegex)){
        let emExists = await emailExists(form.email.value)
        console.log( 'Hey', emExists)
        if (emExists){
            title.style.marginBottom = '0.5rem'
            error_message.innerText = 'Email already exists, log in'
        }else{
            const doc = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
                role:"user",
            }
            await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(doc),
                headers: { 'Content-Type': 'application/json' }
            });
            user_details = {name: form.name.value,email: form.email.value, password: form.password.value, role: 'user'}
            
            localStorage.setItem('user',JSON.stringify(user_details))
            window.location.replace('dashboard.html');
        
        }
    }else{
        title.style.marginBottom = '0.5rem'
        error_message.innerText = 'Invalid Email'
    }
}
form.addEventListener('submit', createUser);
 
// let password_view = document.getElementById("p-viewer");
// let password_input = document.getElementById('password')
// password_view.addEventListener('click',()=>{
//     if (password_input.type === "password") {
//         password_input.type = "text";
//         password_view.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
//       } else {
//         password_input.type = "password";
//         password_view.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>'
//       }
// })
 

const form = document.getElementById('form1');
const userName = document.getElementById('userName');
const age = document.getElementById('age');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputName = userName.value;
    const inputAge = age.value;
    const inputEmail = email.value;
    const conformation= confirm(`Name:${inputName}\n Age:${inputAge}\n Email:${inputEmail}\n\n confirm inputs?`);
    if(conformation){
        alert("Form Submitted Successfully");
    }else{
        userName.value ='';
        age.value= '';
        email.value ='';
        alert("Please fill all the fields again");
    }
})
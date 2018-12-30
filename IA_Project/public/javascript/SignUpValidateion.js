function valiedLogin() {

    var username = document.getElementById('email');
    var passsword = document.getElementById('pass');

    if(username === "" || passsword === ""){
        alert('email or password is empty');
        return;
    }
}

function validateSignup() {

    var email = document.getElementById('email');
    var passsword = document.getElementById('pass');
    var lname = document.getElementById('lname');
    var fname = document.getElementById('fname');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');
    var pass_confirm = document.getElementById('confirm_pass');

    if(email === "" || passsword === "" || lname === "" || fname === "" || age === ""){
        alert('please complete all fields');
    }

    if(passsword !== pass_confirm){
        alert('re-enter password confirmation!!');
    }

}
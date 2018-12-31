function validateSignup() {

    var email = document.forms['form1']['email'].value;
    var passsword = document.forms['form1']['pass'].value;
    var pass_confirm = document.forms['form1']['pass_confirm'].value;
    var fname = document.forms['form1']['fname'].value;
    var lname = document.forms['form1']['lname'].value;
    var age = document.forms['form1']['age'].value;

    if(email === "" || passsword === "" || lname === "" || fname === "" || age === ""){
        alert('something error!!, try again');
        return false;
    }
    else if(passsword !== pass_confirm) {
        alert('password and password confirmation ara not equals!!');
        return false;
    }

    return true;
}

$(document).ready(function () {
    $('#logbtn').click(function () {

        var user = {
            'email': $('#email').val(),
            'password': $('#pass').val()
        };
        var data = JSON.stringify(user);

        if (user.email === "" || user.password === "") {
            alert("email or password is empty");
            return;
        }

        $.ajax({
            type: "post",
            url: "/login",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {

                if (data.code === 200)
                    window.location.replace(data.success);
                else
                    alert(data.success);
            }
        });
    });

    $('#regbtn').click(function () {

        if(!validateSignup())
            return;

        var new_user = {
            'email': $('#email').val(),
            'password': $('#pass').val(),
            'firstName': $('#fname').val(),
            'lastName': $('#lname').val(),
            'age': $('#age').val(),
            'phoneNumber': $('#phone').val(),
            'cv': $('#cv').val(),
            'type' : $("input[name = 'type']:checked").val()
        };

        var data = JSON.stringify(new_user);

        $.ajax({
            type: 'post',
            url: "/register",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data.code === 200)
                    window.location.replace(data.success);
            }
        });
    });
});
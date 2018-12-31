function validateSignup() {

    var email = document.getElementById('email');
    var passsword = document.getElementById('pass');
    var lname = document.getElementById('lname');
    var fname = document.getElementById('fname');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');

    if(email === "" || passsword === "" || lname === "" || fname === "" || age === ""){
        alert('please complete all fields');
        return
    }

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

        //$('form').submit(false);
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

    $('#form').submit(false);
    $('#regbtn').click(function () {
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

        $.post({
            url: "/register",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert(data.message);
            }
        });
    });
});
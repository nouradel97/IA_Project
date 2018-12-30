$(document).ready(function () {

    $('#btn').click(function () {

        var user = {
            'email': $('#email').val(),
            'password': $('#pass').val()
        };
        var data = JSON.stringify(user);

        $.post({
            url: "login",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {

                if(data.code === 200)
                    window.location.replace(data.success);
                else
                    alert(data.success);
            }
        });
    });

    $('#signUp').click(function () {

        var form = ' <center>\n' +
            '\n' +
            '  <table> <form id="signupForm">\n' +
            '    \n' +
            '    <tr><td>first name: </td><td><input type="text" name="fname" id="fname"></td>\n' +
            '      <td>last name: </td><td><input type="text" name="lname" id="lname"></td></tr>\n' +
            '    \n' +
            '    <tr><td>age: </td><td><input type="text" name="age" id="age"></td>\n' +
            '      <td>phone number: </td><td><input type="text" name="phone" id="phone"></td></tr>\n' +
            '    \n' +
            '    <tr><td>username: </td><td><input type="text" name="username" id="user"></td>\n' +
            '      <td>email: </td><td><input type="text" name="email" id="email"></td></tr>\n' +
            '    \n' +
            '    <tr><td>password: </td><td><input type="password" name="username" id="password"></td>\n' +
            '    <td>  confirm password: </td><td><input type="password" name="confirm_pass" id="confirm_pass"></td></tr>\n' +
            '    \n <tr><td><input type="submit" id="btn_signUp"></td></tr>'+
            '  </form></table></center>';

        $('#form').hide();
        $('#sign').append(form);
        $('#sign').show();

        var new_user = {
            'email': $('#email').val(),
            'password': $('#password').val(),
            'fname': $('#fname'),
            'lname': $('#lname'),
            'age': $('#age'),
            'phoneNumber': $('#phone'),
            'username': $('#username')
        };

        var data = JSON.stringify(new_user);

        $.post({
            url: "register",
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert(data.message);
            }
        });
    });
});
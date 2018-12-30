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

        var form = ' </center>\n' +
            '\n' +
            '  <table>\n' +
            '    \n' +
            '    <tr><td>first name: </td><input type="text" name="fname" id="fname">\n' +
            '      <td>last name: </td><input type="text" name="lname" id="lname"></tr>\n' +
            '    \n' +
            '    <tr><td>age: </td><input type="text" name="age" id="age">\n' +
            '      <td>phone number: </td><input type="text" name="phone" id="phone"></tr></tr>\n' +
            '    \n' +
            '    <tr><td>username: </td><input type="text" name="username" id="user">\n' +
            '      <td>email: </td><input type="text" name="email" id="email"></tr>\n' +
            '    \n' +
            '    <tr><td>password: </td><input type="password" name="username" id="password">\n' +
            '      confirm password: <input type="password" name="confirm_pass" id="confirm_pass"></tr>\n' +
            '    \n' +
            '  </table>';

        form.show();
        var new_user = {
            'email': $('#email').val(),
            'password': $('#pass').val()
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
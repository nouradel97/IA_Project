$(document).ready(function () {
    let da = {HR:'HR1',Application:'application1'};
    $('#myPositions').hide();
    $('#ch1').click(function () {
        alert("choice");
    });
    $.ajax({
        url: "/getInfo",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: (data) => {
                 $('#show').html('<p>' + data.firstName + '<br>'
                 + data.lastName + '<br>' + data.email + '<br>' + data.age +
                 '<br>' + data.phoneNumber + '</p>');
            }
    });

    $.ajax({
        url: "/",/**get positions */
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: /*data*/'',
            success: (data) => {
                let table = "<table class='container'>"
                +"<th>HR</th>"
                +"<th>Application</th>"
                "<th>Register</th>"
                +"<tr>"
                    +"<td>"+da.HR+"</td>"
                    +"<td>"+da.Application+"</td>"
                    +"<td style='text-align: center;'>"
                        +"<button id='ch1'>reg</button>"
                    +"</td>"
                +"</tr>"
            +"</table>";
            }
    });
    // $.ajax({
    //     url: "/",/**check candidate has submissions */
    //         type: "POST",
    //         dataType: 'json',
    //         contentType: 'application/json; charset=utf-8',
    //         data: /*data*/'',
    //         success: (data) => {
    //             $('#myPositions').hide();
    //         }
    // });

    $('#allPositions').click(function () {
        let table = "<table class='container'>"
                +"<th>HR</th>"
                +"<th>Application</th>"
                +"<th>Register</th>"            
                +"<tr>"
                    +"<td>"+da.HR+"</td>"
                    +"<td>"+da.Application+"</td>"
                    +"<td style='text-align: center;'>"
                        +"<button id='ch1'>reg</button>"
                    +"</td>"
                +"</tr>"
            +"</table>";
        $('#allApplications').append(table);
        alert("call applications");
    });
});
$(document).ready(function () {

    $('#ch1').click(function () {
        alert("choice");
    });

    $.ajax({
        url: "/getInfo",
        type: "POST",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: (data) => {

            $('#show').html('<table style="margin: 10px"> ' +
                '<tr><td>' + data.firstName + '</td></tr>'
                +'<tr><td>' + data.lastName + '</td></tr>' +
                '<tr><td>' + data.email + '</td></tr><tr>' +
                '<tr><td>' + data.age + '</td></tr> '+
                '</td></tr><tr><td>' + data.phoneNumber + '</td></tr></table>');
        }
    });

    $('#myRequests').click(function () {

        let table = "<table id='table1' class='container'>"
            + "<th>Application</th>" +
            "<th>Link</th>"
            +"</thead><tbody id='tbodyy'></tbody></table>";

        $.ajax({
            url: "/getSubmissions",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: (data) => {

                console.log(data);
                for (var i in data) {

                    let row = "<tr>"
                        + "<td>" + data[i].positionId.description + "</td>"
                        + "<td>" + data[i].isRejected + "</td>"
                        + "<td><button id='ch1' value='"+data.positionId.id +"'>"+ data[i].isRejected +"</button></td>"
                        + "</tr>";
                    alert(row);
                    $('#tbodyy').append(row);
                }
            }
        });

        $('#allApplications').empty();
        $('#allApplications').append(table);
    });


    $('#allPositions').click(function () {

        let table = "<table id='table1' class='container'>"
            +"<thead>"
            + "<th>HR</th>"
            + "<th>Application</th>" +
            "<th>Register</th>"
            +"</thead><tbody id='tbbody'></tbody></table>";

        $.ajax({
            type: 'post',
            url: "/getAllPositions",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                for (var i = 0; i < data.length; i++) {

                    let row = "<tr>"
                        +"<td>" + data[i].hr + "</td>"
                        +"<td>" + data[i].description + "</td>"
                        + "<td><button id='ch1' value='"+ data[i].id +"'>Request</button></td>"
                        + "</tr>";
                    $('#tbbody').append(row);
                }
            }
        });

        $('#allApplications').empty();
        $('#allApplications').append(table);


        $('#table1  >tbody').on('click', '#ch1', function () {

            var data = $(this).val();
            $.post( "/makeRequest", { id: data});
            $(this).closest('tr').remove();
        });

    });
});
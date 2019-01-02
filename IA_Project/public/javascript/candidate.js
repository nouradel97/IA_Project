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

            $('#show').html('<table class="table1" style="margin: 10px; width=300px;"> ' +
                '<thead><th>User Info</th></thead>'
                +'<tr><td>' + data.firstName + '</td></tr>'
                +'<tr><td>' + data.lastName + '</td></tr>' +
                '<tr><td>' + data.email + '</td></tr><tr>' +
                '<tr><td>' + data.age + '</td></tr> '+
                '</td></tr><tr><td>' + data.phoneNumber + '</td></tr></table>');
        }
    });

    $('#myRequests').click(function () {

        let table = "<table id='table1' class='container'>"
            + "<thead>"
            + "<th>Application</th>"
            + "<th>Link</th>"
            +"</thead><tbody id='tbodyy'></tbody></table>";

        $.ajax({
            url: "/getSubmissions",
            type: "post",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {

                for (var i in data) {

                    let row = "<tr>"
                        + "<td>" + data[i].positionId.description + "</td>";

                    if(data[i].exam !== null)
                        row += "<td><button id='btn' value='"+data[i].exam +"'></button></td>";
                    else if(data[i].isRejected)
                        row += "<td>Rejected !!</td>";
                    else
                        row += "<td>Waiting !!</td>";
                    row += "</tr>";
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
            url: "/getAllHrPositions",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    for (var j =0; j < data[i].position.length; j++) {

                        let row = "<tr>"
                            + "<td>" + data[i].username + "</td>"
                            + "<td>" + data[i].position[j].description + "</td>"
                            + "<td><button id='ch1' value='"
                            +  data[i].position[j].description + "'>Request</button></td>"
                            + "</tr>";
                        $('#tbbody').append(row);
                    }
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
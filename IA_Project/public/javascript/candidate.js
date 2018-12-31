$(document).ready(function () {
    let da = {HR: 'HR1', Application: 'application1'};
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

    $('#myPositions').click(function () {

        let table = "<table id='table1' class='container'>"
            + "<th>HR</th>"
            + "<th>Application</th>" +
            "<th>Link</th>";

        $.ajax({
            url: "/getSubmissions",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: (data) => {

                for (var i = 0; i < data.length; i++) {
                    table += "<tr>"
                        + "<td>" + data[i].HR + "</td>"
                        + "<td>" + data[i].Application + "</td>"
                        + "<td>" + data[i].exam + "</td>"
                        + "<td style='text-align: center;'>"
                        + "<button id='ch1'>reg</button>"
                        + "</td>"
                        + "</tr>";
                }
            }
        });
        table += "</table>";
        $('#AllApplications').html(table);
        $('#myPositions').show();
    });


    $('#allPositions').click(function () {

        let table = "<table id='table1' class='container'>"
            +"<thead>"
            + "<th>HR</th>"
            + "<th>Application</th>" +
            "<th>Register</th>"
            +"</thead><tbody id='tbbody'></tbody></table>";
        $('#allApplications').append(table);
        $.ajax({
            type: 'post',
            url: "/getAllPositions",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: (data) => {

                for (var i = 0; i < data.length; i++) {

                    console.log(data[i]);
                    let row = "<tr>"
                        + "<td>" + data[i].id + "</td>"
                        + "<td>" + data[i].description + "</td>"
                        + "<td style='text-align: center;'>"
                        + "<button id='ch1'>Request</button>"
                        + "</td>"
                        + "</tr>";
                    ('#tbbody').append(row);
                }

            }
        });
        alert(table);
        $('#allApplications').append(table);


        $('#table1  >tbody').on('click', "#ch1", function () {

            var data = $(this).val();
            $.post({
                url: '/makeRequest',
                dataType: 'json',
                data: JSON.stringify(data),
                contentType: 'application/json; charset=utf-8',
            });

            $(this).closest('tr').remove();
        });

    });
});
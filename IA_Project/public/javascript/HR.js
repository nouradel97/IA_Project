$(document).ready(function () {

    $.ajax({
        url: '/getAllRequests',
        type: "post",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {

            $("#ApplicationTBody").empty();
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].length; j++) {

                    let html = "<tr>"
                        + "<td><a href='#' role='button'>" + data[i][j].user.username + "</a></td>"
                        + "<td>" + data[i][j].user.email + "</td>"
                        + "<td><button name='acceptApplication' value='"+data[i][j].user.email
                        + "_" + data[i][j].positionId.description +"'>Approve</button></td>"
                        + "<td><button name='rejectApplication' value='"+data[i][j].user.email
                        + "_" + data[i][j].positionId.description +"'>Reject</button></td>"
                        + "<td> " + data[i][j].positionId.description + "</td>"
                        + "</tr>";
                    $("#ApplicationTBody").append(html);
                }
            }
        }

    });

    $("#ApplicationTBody").delegate("button[name='rejectApplication']", "click", function () {
        $(this).parents("tr").remove();
        let data = $(this).val();
        $.post("/rejectApp",{data: data});
    });

    $("#ApplicationTBody").delegate("a", "click", function () {
        alert(this.id);
        // let cvpath = $(this).val();
        // $.post(""/*URL*/,cvpath,function (data) {
        //
        // });
    });

    $("#ApplicationTBody").delegate("button[name='acceptApplication']", "click", function () {
        //$.post();
        let html = "<table id='examTable' border='1' style=\"width:100%\">\n" +
            " <tr>\n" +
            "<th>Exam</th>\n" +
            "</tr>\n" +
            "<tbody id='examTableBody'>\n" +
            "<tr>\n" +
            "<td>\n" +
            "<select name='exam'>\n" +
            "</select>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</tbody>\n" +
            "<tfoot id='examTableFoot'>\n" +
            "<tr>\n" +
            "<td id='buttonRow'>\n" +
            "<button id='addExam'>add Exam</button>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</tfoot>\n" +
            "</table>";
        $("#mainDiv").html(html);
        $("#mainDiv").append("<button id='send'>Send</button>");
        // $.post("/getExams",function (data) {
        //     exams = data;
        //     updateExamList();
        // });
        updateExamList();
        //$.post("/updateApplication",application);
        $("#addExam").click(() => {
            let row = "<tr>\n" +
                "                    <td>\n" +
                "                        <select name='exam'>\n" +
                "                        </select>\n" +
                "                    </td>\n" +
                "                </tr>";
            $(row).appendTo("#examTableBody");
            updateExamList();
        });

        function updateExamList() {
            let exam;
            for (let i = 0; i < exams.length; i++) {
                exam = exams[i];
                //let option = "<option value='" + exam.id + "'>" + exam.name + "</option>";
                let option = "<option value='" + exam + "'>" + exam + "</option>";
                $('#examTableBody tr:last').find("select[name='exam']").append(option);
            }
        }

        $("#send").click(function () {
            // let exams = [];
            // $("select[name='exam']").each(function () {
            //     exams.push(this.value);
            // });
            // console.log(exams);
            // let dataContent = {candidate: application.candidateID, exams: exams, precedence: precedence};
            // $.post("/addUserExams",dataContent);
        });
        $(this).parents("tr").remove();

    });



    $("#approvedApplications").click(function () {
        $("#ApplicationTable").hide();
        $("#back").show();
        $("#approvedApplications").hide();
        $("#addPosition").show();
        $("#mainDiv").empty();
        let html = "<table id='ApprovedAppTable' border='1' style=\"width:100%\">\n" +
            "            <thead>\n" +
            "                <tr>\n" +
            "                    <th>Application</th>\n" +
            "                    <th>Exams</th>\n" +
            "                </tr>\n" +
            "            </thead>\n" +
            "            <tbody id='ApprovedAppTBody'>\n" +
            "            </tbody>\n" +
            "        </table>";
        $("#mainDiv").append(html);
        test();

        function test() {
            //$.post("URL",function (data) {
            let data = [
                {name: "ahmed", exams: [1, 2, 3]},
                {name: "amr", exams: [4, 5, 6]},
                {name: "ali", exams: [7, 8, 9]},
            ];
            for (let i = 0; i < data.length; i++) {
                $("#ApprovedAppTBody").append("<tr></tr>");
                let html2 = "<td name='applicationCol'><a href='#' role='button' id='" + data[i].name + "'>" + data[i].name + "</a></td>" +
                    "<td name='examCol'></td>";
                $("#ApprovedAppTBody tr:last").append(html2);
                let exams = data[i].exams;
                for (let i = 0; i < exams.length; i++) {
                    let html3 = "<a href='#' role='button' id='" + exams[i] + "'>" + exams[i] + "</a><br>";
                    $("#ApprovedAppTBody tr:last").find("td[name='examCol']").append(html3);
                }
            }
        }

        $("#mainDiv").show();

        $("td[name='applicationCol']").delegate("a", "click", function () {
            alert(this.id);
            //$.post();
        });

        $("td[name='examCol']").delegate("a", "click", function () {
            alert(this.id);
            //$.post();
        });

    });

    $("#addPosition").click(function () {

        $('#hrBody').hide();

        let form = '<tr><td><div id="tdd"></div></td></tr>'
            + '<tr><td><button id="add">Add</button></td></tr>'
            + '<tr><td><button id="back">Back</button></td></tr>';

        $.ajax({
            url: '/getAllPositions',
            type: 'post',
            success: function (data) {

                let row = '';
                for (var i in data) {
                    row = '<tr><td><input type="radio" name="list" value="' + data[i].description + '">'
                        + data[i].description + '</td></tr>';
                    $('#tdd').append(row);
                }
            }
        });

        $('#posTable').html(form);
        $('#posDiv').show();
    });

    $('#posTable').on('click', '#back', function () {
        $('#posDiv').hide();
        $('#hrBody').show();
    });

    $('#posTable').on('click', '#add', function () {

        var data = $("input[name=list]:checked").val();
        alert(data);
        $.post('/addPosition', {data: data}, function (result) {
            if (result.code === 200) {
                alert('you already have this position.');
            } else
                alert('added successfully');
        });
    });
});
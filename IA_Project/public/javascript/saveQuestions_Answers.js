$(document).ready(function () {
    $('#form1 input:radio').click(function () {
        var saveAnswer = {
            'type': $(this).attr("typeExam"),
            'question': $(this).attr("qid"),
            'asnwer': $(this).val()
        };
        var data = JSON.stringify(saveAnswer);

        $.ajax({
            type: 'post',
            url: '/showExam',
            data: data,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    });
});


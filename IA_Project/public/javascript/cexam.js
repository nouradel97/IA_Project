$(document).ready(()=>{
    $('#java').click(()=>{
        $.ajax({
            url: '/exam',
            type: "POST",
            data:  $('#java').val() ,
            dataType: 'json',
            success: (userExam) => {
                alert(JSON.stringify(userExam));
                $('#form1').text(userExam.exam.name);
                userExam.questions.forEach((question) => {
                    $('form').append('<p>${question.description}</p>');
                    question.answers.forEach((answer )=> {
                        let html = '<input type="radio" id="${answer.aId}" value="${answer.aId}"> ' +
                            '<label for="${answer.aId}" id="label">${answer.description}</label>';
                        $('form').append(html);
                    });
                });
            }
        });

    });
});
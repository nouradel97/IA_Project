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
                userExam.questions.forEach((questionDetails) => {
                    $('form').append('<p>${questionDetails.question.name}</p>');
                    questionDetails.answers.forEach(answer => {
                        let html = '<input type="radio" id="${answer.id}" value="${answer.id}"> <label for="${answer.id}" id="lblAns">${answer.name}</label>';
                        $('form').append(html);
                    });
                });
            }
        });

    });
});
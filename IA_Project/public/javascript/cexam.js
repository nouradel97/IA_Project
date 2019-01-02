$(document).ready(() => {
    $('#java').click(() => {
        $.ajax({
            url: '/exam',
            type: "POST",
            data: $('#java').val(),
            dataType: 'json',
            success: (returnData) => {
                alert(JSON.stringify(returnData));
                $('#form1').text(returnData.exam.name);
                returnData.exam.questions.forEach((question) => {
                    $('#form1').append('<p>${question.description}</p>');
                    question.answers.forEach((answer) => {
                        let html = '<input type="radio" id="${answer.aId}" value="${answer.aId}" qid="${question.qId}" typeExam="${question.type}"> ' +
                            '<label for="${answer.aId}" id="lbl">${answer.description}</label>';
                        $('#form1').append(html);
                    });
                });
            }
        });

    });

    $('#cpp').click(() => {
        $.ajax({
            url: '/exam',
            type: "POST",
            data: $('#cpp').val(),
            dataType: 'json',
            success: (returnData) => {
                alert(JSON.stringify(returnData));
                $('#form1').text(returnData.exam.name);
                returnData.exam.questions.forEach((question) => {
                    $('#form1').append('<p>${question.description}</p>');
                    question.answers.forEach((answer) => {
                        let html = '<input type="radio" id="${answer.aId}" value="${answer.aId}" qid="${question.qId}" typeExam="${question.type}"> ' +
                            '<label for="${answer.aId}" id="lbl">${answer.description}</label>';
                        $('#form1').append(html);
                    });
                });
            }
        });

    });

    $('#db').click(() => {
        $.ajax({
            url: '/exam',
            type: "POST",
            data: $('#db').val(),
            dataType: 'json',
            success: (returnData) => {
                alert(JSON.stringify(returnData));
                $('#form1').text(returnData.exam.name);
                returnData.exam.questions.forEach((question) => {
                    $('#form1').append('<p>${question.description}</p>');
                    question.answers.forEach((answer) => {
                        let html = '<input type="radio" id="${answer.aId}" value="${answer.aId}" qid="${question.qId}" typeExam="${question.type}"> ' +
                            '<label for="${answer.aId}" id="lbl">${answer.description}</label>';
                        $('#form1').append(html);
                    });
                });
            }
        });

    });

    $('#iq').click(() => {
        $.ajax({
            url: '/exam',
            type: "POST",
            data: $('#iq').val(),
            dataType: 'json',
            success: (returnData) => {
                alert(JSON.stringify(returnData));
                $('#form1').text(returnData.exam.name);
                returnData.exam.questions.forEach((question) => {
                    $('#form1').append('<p>${question.description}</p>');
                    question.answers.forEach((answer) => {
                        let html = '<input type="radio" id="${answer.aId}" value="${answer.aId}" qid="${question.qId}" typeExam="${question.type}"> ' +
                            '<label for="${answer.aId}" id="lbl">${answer.description}</label>';
                        $('#form1').append(html);
                    });
                });
            }
        });

    });
});
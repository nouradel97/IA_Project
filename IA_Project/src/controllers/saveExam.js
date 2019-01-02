const typeorm = require('typeorm');
const ExamDetails = require('../entity/ExamDetails');
const Answer = require('../entity/Answer');
const GeneratedQuestion = require('../entity/GeneratedQuestion');
const session = require('express-session');

async function saveExam(req, res) {
    const qRepo = await typeorm.getRepository(GeneratedQuestion);
    let generatedQuestion = await qRepo.findOne({question: req.body.question});
    generatedQuestion.selectedAnswer = req.body.answerId;
    qRepo.save(generatedQuestion);

    const eRepo = await typeorm.getRepository(ExamDetails);
    let examDetails = await eRepo.findOne({type: req.body.type});
    examDetails.type = req.body.type;
    examDetails.exam = req.body.question.exam.id;
    examDetails.user = req.session.email;
    eRepo.save(examDetails);
}
module.exports = {saveExam};

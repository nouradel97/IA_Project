const typeorm = require("typeorm");
const Exam = require('../entity/Exam').Exam;
const User = require('../entity/User').User;
const ExamDetails = require('../entity/ExamDetails').ExamDetails;
const Question = require('../entity/Question').Question;
const GeneratedQuestion = require('../entity/GeneratedQuestion').GeneratedQuestion;
const Answer = require('../entity/Answer').Answer;

function getRandomElements(arr, numOfElements) {
    let returnArray = new Array(numOfElements);
    let chosenIndex;
    let chosenElements = new Array(numOfElements);
    for (let i = 0; i < numOfElements; i++) {
        do {
            chosenIndex = randomInt(0, arr.length);
        } while (chosenElements.includes(chosenIndex));
        chosenElements[i] = chosenIndex;
        returnArray[i] = arr[chosenIndex];
    }
    return returnArray;
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


async function createExam(req, res) {
    const eRepo = await typeorm.getRepository(Exam);
    let exam = await eRepo.findOne({name: req.body.name});
    let user = await typeorm.getRepository(User).findOne({email: req.session.email});
    let examDetails = new ExamDetails();
    examDetails.user = user;
    examDetails.exam = exam;
    await typeorm.getRepository(ExamDetails).save(examDetails);
    let questions = await typeorm.getRepository(Question).find({exam: exam});
    let chocenQuestions = getRandomElements(questions, 5);


    for (let i = 0; i < chocenQuestions.length; i++) {
        let generatedQuestion = new GeneratedQuestion();
        generatedQuestion.question = chocenQuestions[i];
        generatedQuestion.answers = new Array(4);
        let inCorresctAnswers = await typeorm.getRepository(Answer).find({
            question: chocenQuestions[i],
            isCorrect: false
        });
        generatedQuestion.answers = getRandomElements(inCorresctAnswers, 3);
        let corresctAnswers = await typeorm.getRepository(Answer).find({question: chocenQuestions[i], isCorrect: true});
        generatedQuestion.answers.push(getRandomElements(corresctAnswers, 1)[0]);

        generatedQuestion.examDetails = examDetails;
        await typeorm.getRepository(GeneratedQuestion).save(generatedQuestion);

    }
    res.send(examDetails);
}

module.exports = {createExam};

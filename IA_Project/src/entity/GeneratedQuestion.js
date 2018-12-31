"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Question_1 = require("./Question");
var ExamDetails_1 = require("./ExamDetails");
var Answer_1 = require("./Answer");
var GeneratedQuestion = /** @class */ (function () {
    function GeneratedQuestion() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], GeneratedQuestion.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ExamDetails_1.ExamDetails; }, function (examDetails) { return examDetails.generatedQuestions; }),
        __metadata("design:type", ExamDetails_1.ExamDetails)
    ], GeneratedQuestion.prototype, "examDetails", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Question_1.Question; }),
        __metadata("design:type", Question_1.Question)
    ], GeneratedQuestion.prototype, "question", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Answer_1.Answer; }, function (answer) { return answer.generatedQuestion; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], GeneratedQuestion.prototype, "answers", void 0);
    GeneratedQuestion = __decorate([
        typeorm_1.Entity()
    ], GeneratedQuestion);
    return GeneratedQuestion;
}());
exports.GeneratedQuestion = GeneratedQuestion;
//# sourceMappingURL=GeneratedQuestion.js.map
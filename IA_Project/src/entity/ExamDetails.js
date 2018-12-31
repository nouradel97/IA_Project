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
var Exam_1 = require("./Exam");

var User_1 = require("./User");
var GeneratedQuestion_1 = require("./GeneratedQuestion");

var ExamDetails = /** @class */ (function () {
    function ExamDetails() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ExamDetails.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Exam_1.Exam; }, function (exam) { return exam.examDetails; }),
      
        __metadata("design:type", Exam_1.Exam)
    ], ExamDetails.prototype, "exam", void 0);

    __decorate([
        typeorm_1.Column({ length: 1024 }),
        __metadata("design:type", String)
    ], ExamDetails.prototype, "type", void 0);
  
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.examDetails; }),
        __metadata("design:type", User_1.User)
    ], ExamDetails.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type1) { return GeneratedQuestion_1.GeneratedQuestion; }, function (generatedQuestion) { return generatedQuestion.examDetails; }),
        __metadata("design:type", Array)
    ], ExamDetails.prototype, "generatedQuestions", void 0);

    ExamDetails = __decorate([
        typeorm_1.Entity()
    ], ExamDetails);
    return ExamDetails;
}());
exports.ExamDetails = ExamDetails;
//# sourceMappingURL=ExamDetails.js.map
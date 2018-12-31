import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable
} from "typeorm";
import {Question} from"./Question";
import {ExamDetails} from "./ExamDetails";
import {Answer} from "./Answer";

@Entity()
export class GeneratedQuestion {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => ExamDetails,examDetails=>examDetails.generatedQuestions)
    examDetails:ExamDetails;

    @ManyToOne(type => Question)
    question:Question;

    @ManyToMany(type => Answer,answer=>answer.generatedQuestion)
    @JoinTable()
    answers:Answer[];


}
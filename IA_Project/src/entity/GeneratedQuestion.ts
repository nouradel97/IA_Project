import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable, Column
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

    @Column()
    selectedAnswer:number;
}
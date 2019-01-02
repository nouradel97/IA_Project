import {
    Entity,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
    JoinColumn
} from "typeorm";
import {Exam} from"./Exam";
import {User} from "./User";
import {GeneratedQuestion} from "./GeneratedQuestion";

@Entity()
export class ExamDetails {

    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(type => Exam ,exam=>exam.examDetails)
    @JoinColumn()
    exam:Exam;

    @Column({length:1024})
    type:string;

    @ManyToOne(type => User,user=>user.examDetails)
    user:User;

    @OneToMany(type1 => GeneratedQuestion,generatedQuestion=>generatedQuestion.examDetails)
    generatedQuestions:GeneratedQuestion[];

}
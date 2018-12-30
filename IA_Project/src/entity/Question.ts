import {Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany} from "typeorm";
import {Exam} from "./Exam";
import {Answer} from "./Answer";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    qId:number;

    @Column({length:1024})
    description:string;

    @Column({length:1024})
    type:string;

    @Column()
    answerId:number;

    @ManyToOne(type => Exam,exam=>exam.questions)
    exam:Exam;

    @OneToMany(type => Answer,answer=>answer.question)
    answers:Answer[];
}
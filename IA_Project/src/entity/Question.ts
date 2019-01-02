import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
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
    @JoinColumn()
    exam:Exam;

    @OneToMany(type => Answer,answer=>answer.question)
    answers:Answer[];
}
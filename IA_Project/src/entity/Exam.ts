import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {Question} from"./Question";
import {ExamDetails} from "./ExamDetails";

@Entity()
export class Exam{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:1024})
    name:string;

    @OneToMany(type =>Question ,question=>question.exam)
    @JoinColumn()
    questions:Question[];

    @OneToOne(type => ExamDetails,examDetails=>examDetails.exam)
    examDetails:ExamDetails;
}
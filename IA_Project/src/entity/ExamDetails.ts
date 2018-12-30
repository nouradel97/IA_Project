import {Entity, Column, ManyToMany, JoinTable, ManyToOne, PrimaryGeneratedColumn, OneToOne} from "typeorm";
import {Exam} from"./Exam";

@Entity()
export class ExamDetails {

    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(type => Exam ,exam=>exam.examDetails)
    exams:Exam[];

    @Column({length:1024})
    type:string;
    /*
    @ManyToOne(type1 => User,user=>user.examDetails)
    user:Applicant;
    */

}
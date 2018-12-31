import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Question} from"./Question";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    aId:number;

    @Column({length:1024})
    description:string;

    @Column()
    isCorrect:boolean;

    @ManyToOne(type => Question,question => question.answers)
    question:Question;
}
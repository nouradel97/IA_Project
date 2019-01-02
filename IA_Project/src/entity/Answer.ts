import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn} from "typeorm";
import {Question} from"./Question";
import {GeneratedQuestion} from "./GeneratedQuestion";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    aId:number;

    @Column({length:1024})
    description:string;

    @Column()
    isCorrect:boolean;

    @ManyToOne(type => Question,question => question.answers)
    @JoinColumn()
    question:Question;

}
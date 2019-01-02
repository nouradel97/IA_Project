import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Position} from "./Position";
import {User} from "./User";
import {Exam} from "./Exam";

@Entity()
export class PositionRequest {

    @ManyToOne(type => Position, {primary : true})
    positionId: Position;

    @ManyToOne(type => User,  {primary: true})
    user: User;

    @OneToOne(type => Exam)
    @JoinColumn()
    exam: Exam;

    @Column()
    isRejected: boolean = false;
}
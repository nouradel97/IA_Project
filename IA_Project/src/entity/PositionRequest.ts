import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {Position} from "./Position";
import {User} from "./User";

@Entity()
export class PositionRequest {

    @ManyToOne(type => Position, {primary : true})
    positionId: Position;

    @ManyToOne(type => User,  {primary: true})
    user: User;

    @Column()
    isRejected: boolean = false;
}
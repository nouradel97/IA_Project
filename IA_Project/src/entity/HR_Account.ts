import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Position} from "./Position";

@Entity()
export class HR_Account extends User{

    @OneToMany(type => Position, position => position.hr)
    positions: Position[];
}
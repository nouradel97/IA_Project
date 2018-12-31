import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {HR_Account} from "./HR_Account";

@Entity()
export class Position {

   @PrimaryColumn()
    description: String;

    @ManyToOne(type => HR_Account, hr => hr.positions)
    hr : HR_Account;

}
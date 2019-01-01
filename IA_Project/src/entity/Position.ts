import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {HR_Account} from "./HR_Account";

@Entity()
export class Position {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: String;

    @ManyToOne(type => HR_Account, hr => hr.positions)
    hr : HR_Account;

}
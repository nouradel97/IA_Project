import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class HR_Account {

    @PrimaryColumn()
    email: string;

    @Column()
    pass: string;
}
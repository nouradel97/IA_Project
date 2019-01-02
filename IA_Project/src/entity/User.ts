import {PrimaryColumn, Column, OneToMany, Entity, TableInheritance, Unique} from "typeorm";
import {ExamDetails} from "./ExamDetails";

@Entity()
@TableInheritance({column: {type: "varchar", name: "type"}})
export abstract class User {

    @PrimaryColumn()
    email: string = "";

    @Column()
    firstName: string = "";

    @Column()
    lastName: string = "";

    @Column()
    username: string = "";

    @Column()
    age: number = 12;

    @Column()
    phoneNumber: number = 123456;

    @Column()
    password: string = "";

    @Column()
    cv: string = "";

    @OneToMany(type =>ExamDetails,examDetails=> examDetails.user)
    examDetails:ExamDetails[];

}

import {Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Position {

    @PrimaryColumn()
    description: String;
}
import {User} from "./User";
import {ChildEntity} from "typeorm";

@ChildEntity()
export class Candidate extends User{

}
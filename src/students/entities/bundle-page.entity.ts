import { Field, ObjectType } from "@nestjs/graphql";
import { Student } from "src/@generated/student/student.model";
import { Page } from "src/utils/pagination";

@ObjectType()
export class StudentPage extends Page {
  @Field(() => [Student])
  items: Student[];
}

import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { StudentsService } from "./students.service";
import { Student } from "src/@generated/student/student.model";
import { StudentCreateInput } from "src/@generated/student/student-create.input";
import { StudentWhereInput } from "src/@generated/student/student-where.input";
import { PageInput } from "src/utils/pagination";
import { StudentWhereUniqueInput } from "src/@generated/student/student-where-unique.input";
import { StudentPage } from "./entities/bundle-page.entity";

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => StudentPage, { name: "searchStudents" })
  search(@Args("query") query: string) {
    return this.studentsService.search({
      query,
    });
  }

  @Query(() => StudentPage, { name: "students" })
  findAll(
    @Args("studentWhereInput", { nullable: true })
    studentWhereInput?: StudentWhereInput,
    @Args("studentPageInput", { nullable: true })
    studentPageInput?: PageInput,
  ) {
    return this.studentsService.findAll({
      studentPageInput,
      studentWhereInput,
    });
  }

  @Query(() => Student, { name: "student" })
  findOne(
    @Args("studentWhereUniqueInput")
    studentWhereUniqueInput: StudentWhereUniqueInput,
  ) {
    return this.studentsService.findOne({ studentWhereUniqueInput });
  }

  @ResolveField()
  async mark(@Parent() student: Student) {
    const { id } = student;
    return this.studentsService.getMark({ studentId: id });
  }
}

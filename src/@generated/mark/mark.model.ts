import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Subjects } from '../subjects/subjects.model';
import { OtherSubjects } from '../other-subjects/other-subjects.model';
import { Student } from '../student/student.model';

@ObjectType()
export class Mark {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Subjects, {nullable:false})
    subjects?: Subjects;

    @Field(() => OtherSubjects, {nullable:false})
    otherSubjects?: OtherSubjects;

    @Field(() => String, {nullable:false})
    studentId!: string;

    @Field(() => Student, {nullable:false})
    student?: Student;
}

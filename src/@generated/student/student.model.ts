import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentStatus } from '../prisma/student-status.enum';
import { Float } from '@nestjs/graphql';
import { Subjects } from '../subjects/subjects.model';
import { OtherSubjects } from '../other-subjects/other-subjects.model';

@ObjectType()
export class Student {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    seatNo!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    school!: string | null;

    @Field(() => String, {nullable:true})
    educationalAdministration!: string | null;

    @Field(() => StudentStatus, {nullable:false})
    status!: keyof typeof StudentStatus;

    @Field(() => String, {nullable:false})
    section!: string;

    @Field(() => Float, {nullable:false})
    totalScore!: number;

    @Field(() => Subjects, {nullable:false})
    subjects?: Subjects;

    @Field(() => OtherSubjects, {nullable:false})
    otherSubjects?: OtherSubjects;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}

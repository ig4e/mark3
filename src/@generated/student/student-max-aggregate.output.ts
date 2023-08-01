import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentStatus } from '../prisma/student-status.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StudentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    seatNo?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    school?: string;

    @Field(() => String, {nullable:true})
    educationalAdministration?: string;

    @Field(() => StudentStatus, {nullable:true})
    status?: keyof typeof StudentStatus;

    @Field(() => String, {nullable:true})
    section?: string;

    @Field(() => Float, {nullable:true})
    totalScore?: number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

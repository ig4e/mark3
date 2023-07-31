import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentStatus } from '../prisma/student-status.enum';
import { Mark } from '../mark/mark.model';

@ObjectType()
export class Student {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    seatNo!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shool!: string | null;

    @Field(() => String, {nullable:true})
    educationalAdministration!: string | null;

    @Field(() => StudentStatus, {nullable:false})
    status!: keyof typeof StudentStatus;

    @Field(() => String, {nullable:false})
    section!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Mark, {nullable:true})
    mark?: Mark | null;
}

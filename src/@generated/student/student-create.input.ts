import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentStatus } from '../prisma/student-status.enum';
import { MarkCreateNestedOneWithoutStudentInput } from '../mark/mark-create-nested-one-without-student.input';

@InputType()
export class StudentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    seatNo!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shool?: string;

    @Field(() => String, {nullable:true})
    educationalAdministration?: string;

    @Field(() => StudentStatus, {nullable:false})
    status!: keyof typeof StudentStatus;

    @Field(() => String, {nullable:false})
    section!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MarkCreateNestedOneWithoutStudentInput, {nullable:true})
    mark?: MarkCreateNestedOneWithoutStudentInput;
}

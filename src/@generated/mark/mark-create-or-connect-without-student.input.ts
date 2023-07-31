import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { Type } from 'class-transformer';
import { MarkCreateWithoutStudentInput } from './mark-create-without-student.input';

@InputType()
export class MarkCreateOrConnectWithoutStudentInput {

    @Field(() => MarkWhereUniqueInput, {nullable:false})
    @Type(() => MarkWhereUniqueInput)
    where!: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;

    @Field(() => MarkCreateWithoutStudentInput, {nullable:false})
    @Type(() => MarkCreateWithoutStudentInput)
    create!: MarkCreateWithoutStudentInput;
}

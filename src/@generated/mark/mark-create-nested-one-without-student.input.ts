import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MarkCreateWithoutStudentInput } from './mark-create-without-student.input';
import { Type } from 'class-transformer';
import { MarkCreateOrConnectWithoutStudentInput } from './mark-create-or-connect-without-student.input';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';

@InputType()
export class MarkCreateNestedOneWithoutStudentInput {

    @Field(() => MarkCreateWithoutStudentInput, {nullable:true})
    @Type(() => MarkCreateWithoutStudentInput)
    create?: MarkCreateWithoutStudentInput;

    @Field(() => MarkCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => MarkCreateOrConnectWithoutStudentInput)
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput;

    @Field(() => MarkWhereUniqueInput, {nullable:true})
    @Type(() => MarkWhereUniqueInput)
    connect?: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;
}

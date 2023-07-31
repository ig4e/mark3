import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MarkCreateWithoutStudentInput } from './mark-create-without-student.input';
import { Type } from 'class-transformer';
import { MarkCreateOrConnectWithoutStudentInput } from './mark-create-or-connect-without-student.input';
import { MarkUpsertWithoutStudentInput } from './mark-upsert-without-student.input';
import { MarkWhereInput } from './mark-where.input';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { MarkUpdateToOneWithWhereWithoutStudentInput } from './mark-update-to-one-with-where-without-student.input';

@InputType()
export class MarkUncheckedUpdateOneWithoutStudentNestedInput {

    @Field(() => MarkCreateWithoutStudentInput, {nullable:true})
    @Type(() => MarkCreateWithoutStudentInput)
    create?: MarkCreateWithoutStudentInput;

    @Field(() => MarkCreateOrConnectWithoutStudentInput, {nullable:true})
    @Type(() => MarkCreateOrConnectWithoutStudentInput)
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput;

    @Field(() => MarkUpsertWithoutStudentInput, {nullable:true})
    @Type(() => MarkUpsertWithoutStudentInput)
    upsert?: MarkUpsertWithoutStudentInput;

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    disconnect?: MarkWhereInput;

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    delete?: MarkWhereInput;

    @Field(() => MarkWhereUniqueInput, {nullable:true})
    @Type(() => MarkWhereUniqueInput)
    connect?: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;

    @Field(() => MarkUpdateToOneWithWhereWithoutStudentInput, {nullable:true})
    @Type(() => MarkUpdateToOneWithWhereWithoutStudentInput)
    update?: MarkUpdateToOneWithWhereWithoutStudentInput;
}

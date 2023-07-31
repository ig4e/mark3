import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentUpdateInput } from './student-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@ArgsType()
export class UpdateOneStudentArgs {

    @Field(() => StudentUpdateInput, {nullable:false})
    @Type(() => StudentUpdateInput)
    data!: StudentUpdateInput;

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    @Type(() => StudentWhereUniqueInput)
    where!: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;
}

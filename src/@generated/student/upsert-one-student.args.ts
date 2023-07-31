import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Type } from 'class-transformer';
import { StudentCreateInput } from './student-create.input';
import { StudentUpdateInput } from './student-update.input';

@ArgsType()
export class UpsertOneStudentArgs {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    @Type(() => StudentWhereUniqueInput)
    where!: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;

    @Field(() => StudentCreateInput, {nullable:false})
    @Type(() => StudentCreateInput)
    create!: StudentCreateInput;

    @Field(() => StudentUpdateInput, {nullable:false})
    @Type(() => StudentUpdateInput)
    update!: StudentUpdateInput;
}

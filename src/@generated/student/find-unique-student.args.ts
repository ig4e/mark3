import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueStudentArgs {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    @Type(() => StudentWhereUniqueInput)
    where!: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;
}

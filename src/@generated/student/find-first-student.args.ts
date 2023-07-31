import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { Type } from 'class-transformer';
import { StudentOrderByWithRelationInput } from './student-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudentScalarFieldEnum } from './student-scalar-field.enum';

@ArgsType()
export class FindFirstStudentArgs {

    @Field(() => StudentWhereInput, {nullable:true})
    @Type(() => StudentWhereInput)
    where?: StudentWhereInput;

    @Field(() => [StudentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentOrderByWithRelationInput>;

    @Field(() => StudentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StudentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentScalarFieldEnum>;
}

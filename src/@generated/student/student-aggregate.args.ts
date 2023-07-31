import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { Type } from 'class-transformer';
import { StudentOrderByWithRelationInput } from './student-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudentCountAggregateInput } from './student-count-aggregate.input';
import { StudentAvgAggregateInput } from './student-avg-aggregate.input';
import { StudentSumAggregateInput } from './student-sum-aggregate.input';
import { StudentMinAggregateInput } from './student-min-aggregate.input';
import { StudentMaxAggregateInput } from './student-max-aggregate.input';

@ArgsType()
export class StudentAggregateArgs {

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

    @Field(() => StudentCountAggregateInput, {nullable:true})
    _count?: StudentCountAggregateInput;

    @Field(() => StudentAvgAggregateInput, {nullable:true})
    _avg?: StudentAvgAggregateInput;

    @Field(() => StudentSumAggregateInput, {nullable:true})
    _sum?: StudentSumAggregateInput;

    @Field(() => StudentMinAggregateInput, {nullable:true})
    _min?: StudentMinAggregateInput;

    @Field(() => StudentMaxAggregateInput, {nullable:true})
    _max?: StudentMaxAggregateInput;
}

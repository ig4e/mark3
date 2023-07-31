import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';
import { Type } from 'class-transformer';
import { MarkOrderByWithRelationInput } from './mark-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MarkCountAggregateInput } from './mark-count-aggregate.input';
import { MarkMinAggregateInput } from './mark-min-aggregate.input';
import { MarkMaxAggregateInput } from './mark-max-aggregate.input';

@ArgsType()
export class MarkAggregateArgs {

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;

    @Field(() => [MarkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MarkOrderByWithRelationInput>;

    @Field(() => MarkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MarkCountAggregateInput, {nullable:true})
    _count?: MarkCountAggregateInput;

    @Field(() => MarkMinAggregateInput, {nullable:true})
    _min?: MarkMinAggregateInput;

    @Field(() => MarkMaxAggregateInput, {nullable:true})
    _max?: MarkMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';
import { Type } from 'class-transformer';
import { MarkOrderByWithAggregationInput } from './mark-order-by-with-aggregation.input';
import { MarkScalarFieldEnum } from './mark-scalar-field.enum';
import { MarkScalarWhereWithAggregatesInput } from './mark-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MarkCountAggregateInput } from './mark-count-aggregate.input';
import { MarkMinAggregateInput } from './mark-min-aggregate.input';
import { MarkMaxAggregateInput } from './mark-max-aggregate.input';

@ArgsType()
export class MarkGroupByArgs {

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;

    @Field(() => [MarkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MarkOrderByWithAggregationInput>;

    @Field(() => [MarkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MarkScalarFieldEnum>;

    @Field(() => MarkScalarWhereWithAggregatesInput, {nullable:true})
    having?: MarkScalarWhereWithAggregatesInput;

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

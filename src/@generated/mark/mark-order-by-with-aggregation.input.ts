import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MarkCountOrderByAggregateInput } from './mark-count-order-by-aggregate.input';
import { MarkMaxOrderByAggregateInput } from './mark-max-order-by-aggregate.input';
import { MarkMinOrderByAggregateInput } from './mark-min-order-by-aggregate.input';

@InputType()
export class MarkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MarkCountOrderByAggregateInput, {nullable:true})
    _count?: MarkCountOrderByAggregateInput;

    @Field(() => MarkMaxOrderByAggregateInput, {nullable:true})
    _max?: MarkMaxOrderByAggregateInput;

    @Field(() => MarkMinOrderByAggregateInput, {nullable:true})
    _min?: MarkMinOrderByAggregateInput;
}

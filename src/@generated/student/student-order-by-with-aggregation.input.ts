import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudentCountOrderByAggregateInput } from './student-count-order-by-aggregate.input';
import { StudentAvgOrderByAggregateInput } from './student-avg-order-by-aggregate.input';
import { StudentMaxOrderByAggregateInput } from './student-max-order-by-aggregate.input';
import { StudentMinOrderByAggregateInput } from './student-min-order-by-aggregate.input';
import { StudentSumOrderByAggregateInput } from './student-sum-order-by-aggregate.input';

@InputType()
export class StudentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seatNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shool?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    educationalAdministration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    section?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => StudentCountOrderByAggregateInput, {nullable:true})
    _count?: StudentCountOrderByAggregateInput;

    @Field(() => StudentAvgOrderByAggregateInput, {nullable:true})
    _avg?: StudentAvgOrderByAggregateInput;

    @Field(() => StudentMaxOrderByAggregateInput, {nullable:true})
    _max?: StudentMaxOrderByAggregateInput;

    @Field(() => StudentMinOrderByAggregateInput, {nullable:true})
    _min?: StudentMinOrderByAggregateInput;

    @Field(() => StudentSumOrderByAggregateInput, {nullable:true})
    _sum?: StudentSumOrderByAggregateInput;
}

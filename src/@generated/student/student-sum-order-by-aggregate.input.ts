import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StudentSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    seatNo?: keyof typeof SortOrder;
}
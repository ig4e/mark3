import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MarkOrderByWithRelationInput } from '../mark/mark-order-by-with-relation.input';

@InputType()
export class StudentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seatNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    school?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    educationalAdministration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    section?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalScore?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MarkOrderByWithRelationInput, {nullable:true})
    mark?: MarkOrderByWithRelationInput;
}

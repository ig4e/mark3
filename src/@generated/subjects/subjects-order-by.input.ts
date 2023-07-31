import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubjectsOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    arabic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstForeignLanguage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondForeignLanguage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pureMathematics?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appliedMathematics?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    history?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    geography?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    philosophy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    psychology?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chemistry?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    biology?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    geology?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    physics?: keyof typeof SortOrder;
}

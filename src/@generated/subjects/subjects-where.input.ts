import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';

@InputType()
export class SubjectsWhereInput {

    @Field(() => [SubjectsWhereInput], {nullable:true})
    AND?: Array<SubjectsWhereInput>;

    @Field(() => [SubjectsWhereInput], {nullable:true})
    OR?: Array<SubjectsWhereInput>;

    @Field(() => [SubjectsWhereInput], {nullable:true})
    NOT?: Array<SubjectsWhereInput>;

    @Field(() => FloatNullableFilter, {nullable:true})
    arabic?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    firstForeignLanguage?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    secondForeignLanguage?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    pureMathematics?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    appliedMathematics?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    history?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    geography?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    philosophy?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    psychology?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    chemistry?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    biology?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    geology?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    physics?: FloatNullableFilter;
}

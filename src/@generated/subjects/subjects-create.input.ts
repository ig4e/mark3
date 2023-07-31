import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class SubjectsCreateInput {

    @Field(() => Float, {nullable:true})
    arabic?: number;

    @Field(() => Float, {nullable:true})
    firstForeignLanguage?: number;

    @Field(() => Float, {nullable:true})
    secondForeignLanguage?: number;

    @Field(() => Float, {nullable:true})
    pureMathematics?: number;

    @Field(() => Float, {nullable:true})
    appliedMathematics?: number;

    @Field(() => Float, {nullable:true})
    history?: number;

    @Field(() => Float, {nullable:true})
    geography?: number;

    @Field(() => Float, {nullable:true})
    philosophy?: number;

    @Field(() => Float, {nullable:true})
    psychology?: number;

    @Field(() => Float, {nullable:true})
    chemistry?: number;

    @Field(() => Float, {nullable:true})
    biology?: number;

    @Field(() => Float, {nullable:true})
    geology?: number;

    @Field(() => Float, {nullable:true})
    physics?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Subjects {

    @Field(() => Float, {nullable:true})
    arabic!: number | null;

    @Field(() => Float, {nullable:true})
    firstForeignLanguage!: number | null;

    @Field(() => Float, {nullable:true})
    secondForeignLanguage!: number | null;

    @Field(() => Float, {nullable:true})
    pureMathematics!: number | null;

    @Field(() => Float, {nullable:true})
    appliedMathematics!: number | null;

    @Field(() => Float, {nullable:true})
    history!: number | null;

    @Field(() => Float, {nullable:true})
    geography!: number | null;

    @Field(() => Float, {nullable:true})
    philosophy!: number | null;

    @Field(() => Float, {nullable:true})
    psychology!: number | null;

    @Field(() => Float, {nullable:true})
    chemistry!: number | null;

    @Field(() => Float, {nullable:true})
    biology!: number | null;

    @Field(() => Float, {nullable:true})
    geology!: number | null;

    @Field(() => Float, {nullable:true})
    physics!: number | null;
}

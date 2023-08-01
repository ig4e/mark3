import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StudentMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    seatNo?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    school?: true;

    @Field(() => Boolean, {nullable:true})
    educationalAdministration?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    section?: true;

    @Field(() => Boolean, {nullable:true})
    totalScore?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

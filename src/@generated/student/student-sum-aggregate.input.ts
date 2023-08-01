import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StudentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    seatNo?: true;

    @Field(() => Boolean, {nullable:true})
    totalScore?: true;
}

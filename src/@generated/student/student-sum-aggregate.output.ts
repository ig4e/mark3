import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StudentSumAggregate {

    @Field(() => Int, {nullable:true})
    seatNo?: number;

    @Field(() => Float, {nullable:true})
    totalScore?: number;
}

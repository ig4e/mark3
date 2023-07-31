import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StudentAvgAggregate {

    @Field(() => Float, {nullable:true})
    seatNo?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentCountAggregate } from './student-count-aggregate.output';
import { StudentAvgAggregate } from './student-avg-aggregate.output';
import { StudentSumAggregate } from './student-sum-aggregate.output';
import { StudentMinAggregate } from './student-min-aggregate.output';
import { StudentMaxAggregate } from './student-max-aggregate.output';

@ObjectType()
export class AggregateStudent {

    @Field(() => StudentCountAggregate, {nullable:true})
    _count?: StudentCountAggregate;

    @Field(() => StudentAvgAggregate, {nullable:true})
    _avg?: StudentAvgAggregate;

    @Field(() => StudentSumAggregate, {nullable:true})
    _sum?: StudentSumAggregate;

    @Field(() => StudentMinAggregate, {nullable:true})
    _min?: StudentMinAggregate;

    @Field(() => StudentMaxAggregate, {nullable:true})
    _max?: StudentMaxAggregate;
}

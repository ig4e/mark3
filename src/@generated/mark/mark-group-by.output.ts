import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MarkCountAggregate } from './mark-count-aggregate.output';
import { MarkMinAggregate } from './mark-min-aggregate.output';
import { MarkMaxAggregate } from './mark-max-aggregate.output';

@ObjectType()
export class MarkGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    studentId!: string;

    @Field(() => MarkCountAggregate, {nullable:true})
    _count?: MarkCountAggregate;

    @Field(() => MarkMinAggregate, {nullable:true})
    _min?: MarkMinAggregate;

    @Field(() => MarkMaxAggregate, {nullable:true})
    _max?: MarkMaxAggregate;
}

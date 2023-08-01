import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StudentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    seatNo!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    school!: number;

    @Field(() => Int, {nullable:false})
    educationalAdministration!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    section!: number;

    @Field(() => Int, {nullable:false})
    totalScore!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

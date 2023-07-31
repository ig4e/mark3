import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentStatus } from '../prisma/student-status.enum';
import { StudentCountAggregate } from './student-count-aggregate.output';
import { StudentAvgAggregate } from './student-avg-aggregate.output';
import { StudentSumAggregate } from './student-sum-aggregate.output';
import { StudentMinAggregate } from './student-min-aggregate.output';
import { StudentMaxAggregate } from './student-max-aggregate.output';

@ObjectType()
export class StudentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    seatNo!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shool?: string;

    @Field(() => String, {nullable:true})
    educationalAdministration?: string;

    @Field(() => StudentStatus, {nullable:false})
    status!: keyof typeof StudentStatus;

    @Field(() => String, {nullable:false})
    section!: string;

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

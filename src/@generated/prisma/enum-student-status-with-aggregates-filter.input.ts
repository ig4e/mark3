import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentStatus } from './student-status.enum';
import { NestedEnumStudentStatusWithAggregatesFilter } from './nested-enum-student-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumStudentStatusFilter } from './nested-enum-student-status-filter.input';

@InputType()
export class EnumStudentStatusWithAggregatesFilter {

    @Field(() => StudentStatus, {nullable:true})
    equals?: keyof typeof StudentStatus;

    @Field(() => [StudentStatus], {nullable:true})
    in?: Array<keyof typeof StudentStatus>;

    @Field(() => [StudentStatus], {nullable:true})
    notIn?: Array<keyof typeof StudentStatus>;

    @Field(() => NestedEnumStudentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStudentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumStudentStatusFilter, {nullable:true})
    _min?: NestedEnumStudentStatusFilter;

    @Field(() => NestedEnumStudentStatusFilter, {nullable:true})
    _max?: NestedEnumStudentStatusFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentStatus } from './student-status.enum';
import { NestedEnumStudentStatusFilter } from './nested-enum-student-status-filter.input';

@InputType()
export class EnumStudentStatusFilter {

    @Field(() => StudentStatus, {nullable:true})
    equals?: keyof typeof StudentStatus;

    @Field(() => [StudentStatus], {nullable:true})
    in?: Array<keyof typeof StudentStatus>;

    @Field(() => [StudentStatus], {nullable:true})
    notIn?: Array<keyof typeof StudentStatus>;

    @Field(() => NestedEnumStudentStatusFilter, {nullable:true})
    not?: NestedEnumStudentStatusFilter;
}

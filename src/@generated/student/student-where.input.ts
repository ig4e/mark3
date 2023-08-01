import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumStudentStatusFilter } from '../prisma/enum-student-status-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MarkNullableRelationFilter } from '../mark/mark-nullable-relation-filter.input';

@InputType()
export class StudentWhereInput {

    @Field(() => [StudentWhereInput], {nullable:true})
    AND?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    OR?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    NOT?: Array<StudentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    seatNo?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    school?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    educationalAdministration?: StringNullableFilter;

    @Field(() => EnumStudentStatusFilter, {nullable:true})
    status?: EnumStudentStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    section?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalScore?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => MarkNullableRelationFilter, {nullable:true})
    mark?: MarkNullableRelationFilter;
}

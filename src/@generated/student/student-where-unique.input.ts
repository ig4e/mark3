import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumStudentStatusFilter } from '../prisma/enum-student-status-filter.input';
import { MarkNullableRelationFilter } from '../mark/mark-nullable-relation-filter.input';

@InputType()
export class StudentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    seatNo?: number;

    @Field(() => [StudentWhereInput], {nullable:true})
    AND?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    OR?: Array<StudentWhereInput>;

    @Field(() => [StudentWhereInput], {nullable:true})
    NOT?: Array<StudentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shool?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    educationalAdministration?: StringNullableFilter;

    @Field(() => EnumStudentStatusFilter, {nullable:true})
    status?: EnumStudentStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    section?: StringFilter;

    @Field(() => MarkNullableRelationFilter, {nullable:true})
    mark?: MarkNullableRelationFilter;
}
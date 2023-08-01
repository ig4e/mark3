import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumStudentStatusWithAggregatesFilter } from '../prisma/enum-student-status-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StudentScalarWhereWithAggregatesInput {

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => [StudentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    seatNo?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    school?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    educationalAdministration?: StringNullableWithAggregatesFilter;

    @Field(() => EnumStudentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumStudentStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    section?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    totalScore?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}

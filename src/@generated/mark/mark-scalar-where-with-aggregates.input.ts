import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MarkScalarWhereWithAggregatesInput {

    @Field(() => [MarkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MarkScalarWhereWithAggregatesInput>;

    @Field(() => [MarkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MarkScalarWhereWithAggregatesInput>;

    @Field(() => [MarkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MarkScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    studentId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}

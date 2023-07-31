import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { SubjectsCompositeFilter } from '../prisma/subjects-composite-filter.input';
import { OtherSubjectsCompositeFilter } from '../prisma/other-subjects-composite-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StudentRelationFilter } from '../student/student-relation-filter.input';

@InputType()
export class MarkWhereInput {

    @Field(() => [MarkWhereInput], {nullable:true})
    AND?: Array<MarkWhereInput>;

    @Field(() => [MarkWhereInput], {nullable:true})
    OR?: Array<MarkWhereInput>;

    @Field(() => [MarkWhereInput], {nullable:true})
    NOT?: Array<MarkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => SubjectsCompositeFilter, {nullable:true})
    subjects?: SubjectsCompositeFilter;

    @Field(() => OtherSubjectsCompositeFilter, {nullable:true})
    otherSubjects?: OtherSubjectsCompositeFilter;

    @Field(() => StringFilter, {nullable:true})
    studentId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StudentRelationFilter, {nullable:true})
    student?: StudentRelationFilter;
}

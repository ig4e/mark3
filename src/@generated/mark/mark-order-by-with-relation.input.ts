import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubjectsOrderByInput } from '../subjects/subjects-order-by.input';
import { OtherSubjectsOrderByInput } from '../other-subjects/other-subjects-order-by.input';
import { StudentOrderByWithRelationInput } from '../student/student-order-by-with-relation.input';

@InputType()
export class MarkOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SubjectsOrderByInput, {nullable:true})
    subjects?: SubjectsOrderByInput;

    @Field(() => OtherSubjectsOrderByInput, {nullable:true})
    otherSubjects?: OtherSubjectsOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    studentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => StudentOrderByWithRelationInput, {nullable:true})
    student?: StudentOrderByWithRelationInput;
}

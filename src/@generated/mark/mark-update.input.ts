import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsUpdateEnvelopeInput } from '../subjects/subjects-update-envelope.input';
import { OtherSubjectsUpdateEnvelopeInput } from '../other-subjects/other-subjects-update-envelope.input';
import { StudentUpdateOneRequiredWithoutMarkNestedInput } from '../student/student-update-one-required-without-mark-nested.input';

@InputType()
export class MarkUpdateInput {

    @Field(() => SubjectsUpdateEnvelopeInput, {nullable:true})
    subjects?: SubjectsUpdateEnvelopeInput;

    @Field(() => OtherSubjectsUpdateEnvelopeInput, {nullable:true})
    otherSubjects?: OtherSubjectsUpdateEnvelopeInput;

    @Field(() => StudentUpdateOneRequiredWithoutMarkNestedInput, {nullable:true})
    student?: StudentUpdateOneRequiredWithoutMarkNestedInput;
}

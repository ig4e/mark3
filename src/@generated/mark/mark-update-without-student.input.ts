import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsUpdateEnvelopeInput } from '../subjects/subjects-update-envelope.input';
import { OtherSubjectsUpdateEnvelopeInput } from '../other-subjects/other-subjects-update-envelope.input';

@InputType()
export class MarkUpdateWithoutStudentInput {

    @Field(() => SubjectsUpdateEnvelopeInput, {nullable:true})
    subjects?: SubjectsUpdateEnvelopeInput;

    @Field(() => OtherSubjectsUpdateEnvelopeInput, {nullable:true})
    otherSubjects?: OtherSubjectsUpdateEnvelopeInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsUpdateEnvelopeInput } from '../subjects/subjects-update-envelope.input';
import { OtherSubjectsUpdateEnvelopeInput } from '../other-subjects/other-subjects-update-envelope.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MarkUpdateManyMutationInput {

    @Field(() => SubjectsUpdateEnvelopeInput, {nullable:true})
    subjects?: SubjectsUpdateEnvelopeInput;

    @Field(() => OtherSubjectsUpdateEnvelopeInput, {nullable:true})
    otherSubjects?: OtherSubjectsUpdateEnvelopeInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}

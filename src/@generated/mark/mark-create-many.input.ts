import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsCreateEnvelopeInput } from '../subjects/subjects-create-envelope.input';
import { OtherSubjectsCreateEnvelopeInput } from '../other-subjects/other-subjects-create-envelope.input';

@InputType()
export class MarkCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SubjectsCreateEnvelopeInput, {nullable:false})
    subjects!: SubjectsCreateEnvelopeInput;

    @Field(() => OtherSubjectsCreateEnvelopeInput, {nullable:false})
    otherSubjects!: OtherSubjectsCreateEnvelopeInput;

    @Field(() => String, {nullable:false})
    studentId!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

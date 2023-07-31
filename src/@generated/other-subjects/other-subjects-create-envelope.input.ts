import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherSubjectsCreateInput } from './other-subjects-create.input';
import { Type } from 'class-transformer';

@InputType()
export class OtherSubjectsCreateEnvelopeInput {

    @Field(() => OtherSubjectsCreateInput, {nullable:true})
    @Type(() => OtherSubjectsCreateInput)
    set?: OtherSubjectsCreateInput;
}

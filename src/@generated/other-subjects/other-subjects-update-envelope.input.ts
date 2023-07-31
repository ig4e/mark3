import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherSubjectsCreateInput } from './other-subjects-create.input';
import { Type } from 'class-transformer';
import { OtherSubjectsUpdateInput } from './other-subjects-update.input';

@InputType()
export class OtherSubjectsUpdateEnvelopeInput {

    @Field(() => OtherSubjectsCreateInput, {nullable:true})
    @Type(() => OtherSubjectsCreateInput)
    set?: OtherSubjectsCreateInput;

    @Field(() => OtherSubjectsUpdateInput, {nullable:true})
    @Type(() => OtherSubjectsUpdateInput)
    update?: OtherSubjectsUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsCreateInput } from './subjects-create.input';
import { Type } from 'class-transformer';

@InputType()
export class SubjectsCreateEnvelopeInput {

    @Field(() => SubjectsCreateInput, {nullable:true})
    @Type(() => SubjectsCreateInput)
    set?: SubjectsCreateInput;
}

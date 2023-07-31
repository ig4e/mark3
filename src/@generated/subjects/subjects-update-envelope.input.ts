import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsCreateInput } from './subjects-create.input';
import { Type } from 'class-transformer';
import { SubjectsUpdateInput } from './subjects-update.input';

@InputType()
export class SubjectsUpdateEnvelopeInput {

    @Field(() => SubjectsCreateInput, {nullable:true})
    @Type(() => SubjectsCreateInput)
    set?: SubjectsCreateInput;

    @Field(() => SubjectsUpdateInput, {nullable:true})
    @Type(() => SubjectsUpdateInput)
    update?: SubjectsUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkCreateInput } from './mark-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMarkArgs {

    @Field(() => MarkCreateInput, {nullable:false})
    @Type(() => MarkCreateInput)
    data!: MarkCreateInput;
}

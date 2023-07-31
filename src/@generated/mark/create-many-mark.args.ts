import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkCreateManyInput } from './mark-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMarkArgs {

    @Field(() => [MarkCreateManyInput], {nullable:false})
    @Type(() => MarkCreateManyInput)
    data!: Array<MarkCreateManyInput>;
}

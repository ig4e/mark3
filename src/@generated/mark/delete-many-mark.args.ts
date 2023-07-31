import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMarkArgs {

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;
}

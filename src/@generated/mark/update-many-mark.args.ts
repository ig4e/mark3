import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkUpdateManyMutationInput } from './mark-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MarkWhereInput } from './mark-where.input';

@ArgsType()
export class UpdateManyMarkArgs {

    @Field(() => MarkUpdateManyMutationInput, {nullable:false})
    @Type(() => MarkUpdateManyMutationInput)
    data!: MarkUpdateManyMutationInput;

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;
}

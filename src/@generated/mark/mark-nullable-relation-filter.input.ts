import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';

@InputType()
export class MarkNullableRelationFilter {

    @Field(() => MarkWhereInput, {nullable:true})
    is?: MarkWhereInput;

    @Field(() => MarkWhereInput, {nullable:true})
    isNot?: MarkWhereInput;
}

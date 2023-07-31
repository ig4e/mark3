import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherSubjectsObjectEqualityInput } from './other-subjects-object-equality.input';
import { OtherSubjectsWhereInput } from '../other-subjects/other-subjects-where.input';

@InputType()
export class OtherSubjectsCompositeFilter {

    @Field(() => OtherSubjectsObjectEqualityInput, {nullable:true})
    equals?: OtherSubjectsObjectEqualityInput;

    @Field(() => OtherSubjectsWhereInput, {nullable:true})
    is?: OtherSubjectsWhereInput;

    @Field(() => OtherSubjectsWhereInput, {nullable:true})
    isNot?: OtherSubjectsWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsObjectEqualityInput } from './subjects-object-equality.input';
import { SubjectsWhereInput } from '../subjects/subjects-where.input';

@InputType()
export class SubjectsCompositeFilter {

    @Field(() => SubjectsObjectEqualityInput, {nullable:true})
    equals?: SubjectsObjectEqualityInput;

    @Field(() => SubjectsWhereInput, {nullable:true})
    is?: SubjectsWhereInput;

    @Field(() => SubjectsWhereInput, {nullable:true})
    isNot?: SubjectsWhereInput;
}

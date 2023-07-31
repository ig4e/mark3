import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';

@InputType()
export class StudentRelationFilter {

    @Field(() => StudentWhereInput, {nullable:true})
    is?: StudentWhereInput;

    @Field(() => StudentWhereInput, {nullable:true})
    isNot?: StudentWhereInput;
}

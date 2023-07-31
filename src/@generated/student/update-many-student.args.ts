import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentUpdateManyMutationInput } from './student-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StudentWhereInput } from './student-where.input';

@ArgsType()
export class UpdateManyStudentArgs {

    @Field(() => StudentUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentUpdateManyMutationInput)
    data!: StudentUpdateManyMutationInput;

    @Field(() => StudentWhereInput, {nullable:true})
    @Type(() => StudentWhereInput)
    where?: StudentWhereInput;
}

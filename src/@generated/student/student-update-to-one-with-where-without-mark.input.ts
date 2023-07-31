import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentWhereInput } from './student-where.input';
import { Type } from 'class-transformer';
import { StudentUpdateWithoutMarkInput } from './student-update-without-mark.input';

@InputType()
export class StudentUpdateToOneWithWhereWithoutMarkInput {

    @Field(() => StudentWhereInput, {nullable:true})
    @Type(() => StudentWhereInput)
    where?: StudentWhereInput;

    @Field(() => StudentUpdateWithoutMarkInput, {nullable:false})
    @Type(() => StudentUpdateWithoutMarkInput)
    data!: StudentUpdateWithoutMarkInput;
}

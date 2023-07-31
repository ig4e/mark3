import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentUpdateWithoutMarkInput } from './student-update-without-mark.input';
import { Type } from 'class-transformer';
import { StudentCreateWithoutMarkInput } from './student-create-without-mark.input';
import { StudentWhereInput } from './student-where.input';

@InputType()
export class StudentUpsertWithoutMarkInput {

    @Field(() => StudentUpdateWithoutMarkInput, {nullable:false})
    @Type(() => StudentUpdateWithoutMarkInput)
    update!: StudentUpdateWithoutMarkInput;

    @Field(() => StudentCreateWithoutMarkInput, {nullable:false})
    @Type(() => StudentCreateWithoutMarkInput)
    create!: StudentCreateWithoutMarkInput;

    @Field(() => StudentWhereInput, {nullable:true})
    @Type(() => StudentWhereInput)
    where?: StudentWhereInput;
}

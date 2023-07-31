import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MarkUpdateWithoutStudentInput } from './mark-update-without-student.input';
import { Type } from 'class-transformer';
import { MarkCreateWithoutStudentInput } from './mark-create-without-student.input';
import { MarkWhereInput } from './mark-where.input';

@InputType()
export class MarkUpsertWithoutStudentInput {

    @Field(() => MarkUpdateWithoutStudentInput, {nullable:false})
    @Type(() => MarkUpdateWithoutStudentInput)
    update!: MarkUpdateWithoutStudentInput;

    @Field(() => MarkCreateWithoutStudentInput, {nullable:false})
    @Type(() => MarkCreateWithoutStudentInput)
    create!: MarkCreateWithoutStudentInput;

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;
}

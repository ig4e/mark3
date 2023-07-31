import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';
import { Type } from 'class-transformer';
import { MarkUpdateWithoutStudentInput } from './mark-update-without-student.input';

@InputType()
export class MarkUpdateToOneWithWhereWithoutStudentInput {

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;

    @Field(() => MarkUpdateWithoutStudentInput, {nullable:false})
    @Type(() => MarkUpdateWithoutStudentInput)
    data!: MarkUpdateWithoutStudentInput;
}

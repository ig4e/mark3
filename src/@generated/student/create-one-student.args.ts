import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentCreateInput } from './student-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStudentArgs {

    @Field(() => StudentCreateInput, {nullable:false})
    @Type(() => StudentCreateInput)
    data!: StudentCreateInput;
}

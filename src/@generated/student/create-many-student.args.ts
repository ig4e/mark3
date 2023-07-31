import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentCreateManyInput } from './student-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStudentArgs {

    @Field(() => [StudentCreateManyInput], {nullable:false})
    @Type(() => StudentCreateManyInput)
    data!: Array<StudentCreateManyInput>;
}

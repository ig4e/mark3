import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentStatus } from './student-status.enum';

@InputType()
export class EnumStudentStatusFieldUpdateOperationsInput {

    @Field(() => StudentStatus, {nullable:true})
    set?: keyof typeof StudentStatus;
}

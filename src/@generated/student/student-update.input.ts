import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumStudentStatusFieldUpdateOperationsInput } from '../prisma/enum-student-status-field-update-operations.input';
import { MarkUpdateOneWithoutStudentNestedInput } from '../mark/mark-update-one-without-student-nested.input';

@InputType()
export class StudentUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    seatNo?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shool?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    educationalAdministration?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumStudentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStudentStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    section?: StringFieldUpdateOperationsInput;

    @Field(() => MarkUpdateOneWithoutStudentNestedInput, {nullable:true})
    mark?: MarkUpdateOneWithoutStudentNestedInput;
}

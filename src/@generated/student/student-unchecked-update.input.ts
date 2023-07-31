import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumStudentStatusFieldUpdateOperationsInput } from '../prisma/enum-student-status-field-update-operations.input';
import { MarkUncheckedUpdateOneWithoutStudentNestedInput } from '../mark/mark-unchecked-update-one-without-student-nested.input';

@InputType()
export class StudentUncheckedUpdateInput {

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

    @Field(() => MarkUncheckedUpdateOneWithoutStudentNestedInput, {nullable:true})
    mark?: MarkUncheckedUpdateOneWithoutStudentNestedInput;
}

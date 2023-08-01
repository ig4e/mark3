import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumStudentStatusFieldUpdateOperationsInput } from '../prisma/enum-student-status-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MarkUncheckedUpdateOneWithoutStudentNestedInput } from '../mark/mark-unchecked-update-one-without-student-nested.input';

@InputType()
export class StudentUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    seatNo?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    school?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    educationalAdministration?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumStudentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumStudentStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    section?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalScore?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MarkUncheckedUpdateOneWithoutStudentNestedInput, {nullable:true})
    mark?: MarkUncheckedUpdateOneWithoutStudentNestedInput;
}

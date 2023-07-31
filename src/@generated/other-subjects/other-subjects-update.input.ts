import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';

@InputType()
export class OtherSubjectsUpdateInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    religiousEducation?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    nationalEducation?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    economicsAndStatistics?: NullableFloatFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';

@InputType()
export class OtherSubjectsWhereInput {

    @Field(() => [OtherSubjectsWhereInput], {nullable:true})
    AND?: Array<OtherSubjectsWhereInput>;

    @Field(() => [OtherSubjectsWhereInput], {nullable:true})
    OR?: Array<OtherSubjectsWhereInput>;

    @Field(() => [OtherSubjectsWhereInput], {nullable:true})
    NOT?: Array<OtherSubjectsWhereInput>;

    @Field(() => FloatNullableFilter, {nullable:true})
    religiousEducation?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    nationalEducation?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    economicsAndStatistics?: FloatNullableFilter;
}

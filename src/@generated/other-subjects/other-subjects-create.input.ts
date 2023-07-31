import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class OtherSubjectsCreateInput {

    @Field(() => Float, {nullable:true})
    religiousEducation?: number;

    @Field(() => Float, {nullable:true})
    nationalEducation?: number;

    @Field(() => Float, {nullable:true})
    economicsAndStatistics?: number;
}

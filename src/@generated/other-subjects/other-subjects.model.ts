import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OtherSubjects {

    @Field(() => Float, {nullable:true})
    religiousEducation!: number | null;

    @Field(() => Float, {nullable:true})
    nationalEducation!: number | null;

    @Field(() => Float, {nullable:true})
    economicsAndStatistics!: number | null;
}

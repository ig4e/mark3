import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMarkOrThrowArgs {

    @Field(() => MarkWhereUniqueInput, {nullable:false})
    @Type(() => MarkWhereUniqueInput)
    where!: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;
}

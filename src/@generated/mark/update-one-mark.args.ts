import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkUpdateInput } from './mark-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';

@ArgsType()
export class UpdateOneMarkArgs {

    @Field(() => MarkUpdateInput, {nullable:false})
    @Type(() => MarkUpdateInput)
    data!: MarkUpdateInput;

    @Field(() => MarkWhereUniqueInput, {nullable:false})
    @Type(() => MarkWhereUniqueInput)
    where!: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;
}

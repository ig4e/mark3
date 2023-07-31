import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { Type } from 'class-transformer';
import { MarkCreateInput } from './mark-create.input';
import { MarkUpdateInput } from './mark-update.input';

@ArgsType()
export class UpsertOneMarkArgs {

    @Field(() => MarkWhereUniqueInput, {nullable:false})
    @Type(() => MarkWhereUniqueInput)
    where!: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;

    @Field(() => MarkCreateInput, {nullable:false})
    @Type(() => MarkCreateInput)
    create!: MarkCreateInput;

    @Field(() => MarkUpdateInput, {nullable:false})
    @Type(() => MarkUpdateInput)
    update!: MarkUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkWhereInput } from './mark-where.input';
import { Type } from 'class-transformer';
import { MarkOrderByWithRelationInput } from './mark-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MarkWhereUniqueInput } from './mark-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MarkScalarFieldEnum } from './mark-scalar-field.enum';

@ArgsType()
export class FindFirstMarkOrThrowArgs {

    @Field(() => MarkWhereInput, {nullable:true})
    @Type(() => MarkWhereInput)
    where?: MarkWhereInput;

    @Field(() => [MarkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MarkOrderByWithRelationInput>;

    @Field(() => MarkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MarkWhereUniqueInput, 'id' | 'studentId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MarkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MarkScalarFieldEnum>;
}

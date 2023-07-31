import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentCreateWithoutMarkInput } from './student-create-without-mark.input';
import { Type } from 'class-transformer';
import { StudentCreateOrConnectWithoutMarkInput } from './student-create-or-connect-without-mark.input';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@InputType()
export class StudentCreateNestedOneWithoutMarkInput {

    @Field(() => StudentCreateWithoutMarkInput, {nullable:true})
    @Type(() => StudentCreateWithoutMarkInput)
    create?: StudentCreateWithoutMarkInput;

    @Field(() => StudentCreateOrConnectWithoutMarkInput, {nullable:true})
    @Type(() => StudentCreateOrConnectWithoutMarkInput)
    connectOrCreate?: StudentCreateOrConnectWithoutMarkInput;

    @Field(() => StudentWhereUniqueInput, {nullable:true})
    @Type(() => StudentWhereUniqueInput)
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StudentWhereUniqueInput } from './student-where-unique.input';
import { Type } from 'class-transformer';
import { StudentCreateWithoutMarkInput } from './student-create-without-mark.input';

@InputType()
export class StudentCreateOrConnectWithoutMarkInput {

    @Field(() => StudentWhereUniqueInput, {nullable:false})
    @Type(() => StudentWhereUniqueInput)
    where!: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'seatNo'>;

    @Field(() => StudentCreateWithoutMarkInput, {nullable:false})
    @Type(() => StudentCreateWithoutMarkInput)
    create!: StudentCreateWithoutMarkInput;
}

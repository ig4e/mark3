import { registerEnumType } from '@nestjs/graphql';

export enum MarkScalarFieldEnum {
    id = "id",
    studentId = "studentId"
}


registerEnumType(MarkScalarFieldEnum, { name: 'MarkScalarFieldEnum', description: undefined })

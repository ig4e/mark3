import { registerEnumType } from '@nestjs/graphql';

export enum MarkScalarFieldEnum {
    id = "id",
    studentId = "studentId",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(MarkScalarFieldEnum, { name: 'MarkScalarFieldEnum', description: undefined })

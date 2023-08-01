import { registerEnumType } from '@nestjs/graphql';

export enum StudentScalarFieldEnum {
    id = "id",
    seatNo = "seatNo",
    name = "name",
    school = "school",
    educationalAdministration = "educationalAdministration",
    status = "status",
    section = "section",
    totalScore = "totalScore",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(StudentScalarFieldEnum, { name: 'StudentScalarFieldEnum', description: undefined })

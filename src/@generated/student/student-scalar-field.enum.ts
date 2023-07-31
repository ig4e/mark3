import { registerEnumType } from '@nestjs/graphql';

export enum StudentScalarFieldEnum {
    id = "id",
    seatNo = "seatNo",
    name = "name",
    shool = "shool",
    educationalAdministration = "educationalAdministration",
    status = "status",
    section = "section"
}


registerEnumType(StudentScalarFieldEnum, { name: 'StudentScalarFieldEnum', description: undefined })

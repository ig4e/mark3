import { registerEnumType } from '@nestjs/graphql';

export enum StudentStatus {
    PASSED = "PASSED",
    FAILED = "FAILED",
    SECOND_ROLE = "SECOND_ROLE"
}


registerEnumType(StudentStatus, { name: 'StudentStatus', description: undefined })

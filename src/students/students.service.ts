import { Injectable } from "@nestjs/common";
import { StudentWhereUniqueInput } from "src/@generated/student/student-where-unique.input";
import { StudentWhereInput } from "src/@generated/student/student-where.input";
import { PrismaService } from "src/prisma.service";
import { PageInput, getPageInfo } from "src/utils/pagination";
import { StudentPage } from "./entities/bundle-page.entity";
import { Prisma } from "@prisma/client";
import { Student } from "src/@generated/student/student.model";

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async search({ query }: { query: string }): Promise<StudentPage> {
    const items = (await this.prisma.student.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "default",
            text: {
              query: query,
              path: {
                wildcard: "*",
              },
            },
          },
        },
        { $limit: 25 },
        {
          $project: {
            id: "$_id",
            _id: 0,
            seatNo: 1,
            name: 1,
            shool: 1,
            educationalAdministration: 1,
            status: 1,
            section: 1,
          },
        },
      ],
    })) as unknown as Student[];

    const pageInfo = getPageInfo({ total: 25, currentPage: 1, perPage: 25 });

    return { items, pageInfo };
  }

  async findAll({
    studentPageInput,
    studentWhereInput,
  }: {
    studentPageInput: PageInput | undefined;
    studentWhereInput: StudentWhereInput | undefined;
  }): Promise<StudentPage> {
    const totalStudents = await this.prisma.student.count({
      where: studentWhereInput,
    });

    const pageInfo = getPageInfo({
      total: totalStudents,
      currentPage: studentPageInput?.currentPage,
      perPage: studentPageInput?.perPage,
    });

    console.log(pageInfo);

    const items = await this.prisma.student.findMany({
      where: studentWhereInput,
      skip: pageInfo.offset,
      take: pageInfo.perPage,
    });

    return { items, pageInfo };
  }

  async findOne({
    studentWhereUniqueInput,
  }: {
    studentWhereUniqueInput: StudentWhereUniqueInput;
  }) {
    const student = await this.prisma.student.findUnique({
      where: studentWhereUniqueInput as Prisma.StudentWhereUniqueInput,
    });

    return student;
  }

  getMark({ studentId }: { studentId: string }) {
    return this.prisma.mark.findUnique({
      where: { studentId },
    });
  }
}

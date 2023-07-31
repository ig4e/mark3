import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { StudentsService } from "./students/students.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly studentsService: StudentsService,
  ) {}

  @Get("/")
  async root() {
    return {
      author: "IG4E (Ahmed mohamed) made with ❤",
      version: "1.0.0",
    };
  }

  @Get("/scrape")
  async scrape() {
    return await this.appService.startScrape();
  }

  @Get("/search")
  async search(@Query("query") query: string) {
    return await this.studentsService.search({ query });
  }


  @Get("/get-student")
  async getStudent(@Query("seatNo") seatNo: number) {
    return await this.appService.scrape(Number(seatNo))
  }

}

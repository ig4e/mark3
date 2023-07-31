import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { StudentsService } from "./students/students.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly studentsService: StudentsService,
  ) {}

  @Get("/scrape")
  async scrape() {
    return await this.appService.startScrape();
  }

  @Get("/search")
  async search(@Query("query") query: string) {
    return await this.studentsService.search({ query });
  }
}

import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import axios from "axios";
import * as qs from "qs";
import { load } from "cheerio/lib/slim";
import { Mark, Student } from "@prisma/client";
import { randomUUID } from "crypto";
import * as http from "http";
import { cleanTrim, convertToNumber } from "./utils/scrape";
import axiosRetry from "axios-retry";

const concurrentRequests = 50;

const sources = [
  {
    name: "DOSTOR",
    url: "https://natega.dostor.org/Home/Natega",
    referer: "https://natega.dostor.org",
  },
  {
    name: "ELBALAD",
    url: "https://natega.elbalad.news/Home/Natega",
    referer: "https://natega.elbalad.news/",
  },
  {
    name: "ELWATAN",
    url: "https://natega.elwatannews.com/Home/Natega",
    referer: "https://natega.elwatannews.com",
  },
] as const;

let count = 0;

function getSource() {
  if (count >= sources.length) count = 0;
  const currentSource = sources[count];
  count++;
  return currentSource;
}

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(PrismaService.name);
  private readonly axios = axios.create({
    httpAgent: new http.Agent({ keepAlive: true }),
  });

  async startScrape() {
    for (let i = 1008759; i <= 9000000; i += concurrentRequests) {
      await Promise.all(
        Array.from({ length: concurrentRequests }).map(async (item, index) => {
          const ii = i + index;
          try {
            this.logger.log(`[TRY] Trying to scrape ${ii}....`);
            const result = await this.scrape(ii);
            this.logger.log(`[SUCCESS] Scraped ${ii} | Name: ${result.name}`);
          } catch (err) {
            this.logger.error(`[FAILED] To scrape ${ii}`, err);
          }
        }),
      );
    }
  }

  async scrape(seatNo: number) {
    axiosRetry(this.axios, {
      retries: 10,
      retryDelay: (retryCount) => {
        console.log(`[RETRY] retry attempt: ${retryCount}`);
        return retryCount * 1000;
      },
      retryCondition(error) {
        return true;
      },
    });

    const source = getSource();

    this.logger.log(`[INFO] Using source: ${source.name}`);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: source.url,
      headers: {
        referer: source.referer,
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en,en-US;q=0.9,ar;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        cookie:
          "_ga=GA1.1.1819380733.1690770986; ASP.NET_SessionId=1ifrun1jlsjypfmxvxrzi5gb; __gads=ID=a360eb6aa3361247:T=1690794331:RT=1690794331:S=ALNI_MasAW2DelpGl6Ut7ClUHXR108x4dw; __gpi=UID=00000c74fb963d6b:T=1690794331:RT=1690794331:S=ALNI_MZ6nzar8CP2iUN_654L0W9TECK-HA; _ga_5Y1MZ8E8E5=GS1.1.1690792239.2.1.1690795570.59.0.0; _ga_VXVVNZQ2XJ=GS1.1.1690792239.2.1.1690795571.58.0.0; amp_a0683b=i_gCRC9RFIs4PRfhGv0jSg.aG9wd3AwcmsydG55cA==..1h6lh47m2.1h6lk9utq.0.0.0; mp_10bab2a6cec3a2ef62083257f3f09083_mixpanel=%7B%22distinct_id%22%3A%20%22189a9cdd9f51a7-098340337eb5a3-26031c51-1c03e0-189a9cdd9f6bb9%22%2C%22%24device_id%22%3A%20%22189a9cdd9f51a7-098340337eb5a3-26031c51-1c03e0-189a9cdd9f6bb9%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D",

        "sec-ch-ua":
          '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
      data: qs.stringify({
        seatNo: seatNo,
      }),
    };

    const { data } = await this.axios(config);
    const $ = load(data);

    const status = cleanTrim(
      $(
        `div.all > div.RightSide > div.full-result > ul > li:nth-child(5) > span:nth-child(2)`,
      ).text(),
    );

    const result: Student & { mark: Mark } = {
      id: randomUUID(),
      seatNo: seatNo,
      name: cleanTrim(
        $(
          `div.all > div.RightSide > div.full-result > ul > li:nth-child(1) > span:nth-child(2)`,
        ).text(),
      ),

      shool: cleanTrim(
        $(
          `div.all > div.RightSide > div.full-result > ul > li:nth-child(2) > span:nth-child(2)`,
        ).text(),
      ),
      educationalAdministration: cleanTrim(
        $(
          `div.all > div.RightSide > div.full-result > ul > li:nth-child(3) > span:nth-child(2)`,
        ).text(),
      ),
      section: cleanTrim(
        $(
          "div.all > div.RightSide > div.full-result > ul > li:nth-child(8) > span:nth-child(2)",
        ).text(),
      ),
      status:
        status === "ناجح"
          ? "PASSED"
          : status === "راسب"
          ? "FAILED"
          : "SECOND_ROLE",
      updatedAt: new Date(),
      createdAt: new Date(),
      mark: {
        id: randomUUID(),
        subjects: {
          arabic:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(1) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
          firstForeignLanguage:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(2) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
          secondForeignLanguage:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(3) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
          pureMathematics:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(4) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          history:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(5) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          geography:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(6) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          philosophy:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(7) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          psychology:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(8) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          chemistry:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(9) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          biology:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(10) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          geology:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(11) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          appliedMathematics:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(12) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          physics:
            convertToNumber(
              $(
                `div.Sitecontainer.WebSiteContent > div.result-info > div.RightSide2 > div.result-details > div > ul > li:nth-child(13) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
        },
        otherSubjects: {
          religiousEducation:
            convertToNumber(
              $(
                `div.result-info > div.result-details > div > ul > li:nth-child(1) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
          economicsAndStatistics:
            convertToNumber(
              $(
                `div.result-info > div.result-details > div > ul > li:nth-child(2) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,

          nationalEducation:
            convertToNumber(
              $(
                `div.result-info > div.result-details > div > ul > li:nth-child(3) > span.formatt4`,
              )
                .text()
                ?.trim(),
            ) ?? undefined,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        studentId: "",
      },
    };

    if (!result.name) throw new Error("not found");

    const input = {
      name: result.name,
      seatNo: seatNo,
      status: result.status,
      section: result.section,
      educationalAdministration: result.educationalAdministration,
      shool: result.shool,
    };

    const student = await this.prisma.student.upsert({
      create: {
        ...input,
        mark: {
          create: {
            subjects: result.mark.subjects,
            otherSubjects: result.mark.otherSubjects,
          },
        },
      },
      update: {
        ...input,
        mark: {
          update: {
            subjects: result.mark.subjects,
            otherSubjects: result.mark.otherSubjects,
          },
        },
      },
      where: { seatNo: seatNo },
      include: { mark: true },
    });

    return student;
  }
}

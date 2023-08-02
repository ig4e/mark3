import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import axios from "axios";
import * as qs from "qs";
import { load } from "cheerio/lib/slim";
import { Student } from "@prisma/client";
import { randomUUID } from "crypto";
import * as http from "http";
import { cleanTrim, convertToNumber } from "./utils/scrape";
import axiosRetry from "axios-retry";

const concurrentRequests = 100;

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
  private readonly logger = new Logger(PrismaService.name);
  private readonly axios = axios.create({
    httpAgent: new http.Agent({ keepAlive: true }),
  });
  constructor(private prisma: PrismaService) {
    axiosRetry(this.axios, {
      retries: 10,
      retryDelay: (retryCount) => {
        this.logger.warn(`[RETRY] retry attempt: ${retryCount}`);
        return retryCount * 1000;
      },
      retryCondition(error) {
        return true;
      },
    });
  }

  async startScrape() {
    for (let i = 1005669; i <= 2000000; i += concurrentRequests) {
      const batch = (
        await Promise.all(
          Array.from({ length: concurrentRequests }).map(
            async (item, index) => {
              const ii = i + index;
              try {
                this.logger.log(`[TRY] Trying to scrape ${ii}....`);
                const result = await this.scrape(ii);
                this.logger.log(
                  `[SUCCESS] Scraped ${ii} | Name: ${result.name}`,
                );
                return result;
              } catch (err) {
                this.logger.error(`[FAILED] To scrape ${ii}`, err);
              }
            },
          ),
        )
      ).filter((item) => item);

      void (await this.prisma.student
        .createMany({
          data: batch.map((item) => ({
            name: item.name,
            seatNo: item.seatNo,
            section: item.section,
            status: item.status,
            educationalAdministration: item.educationalAdministration,
            school: item.school,
            totalScore: item.totalScore,
            subjects: item.subjects,
            otherSubjects: item.otherSubjects,
          })),
        })
        .then(() => this.logger.log(`[INFO] Batch ${i} done`))
        .catch(() => this.logger.error(`[FAILED] Batch ${i} failed`)));
    }
  }

  async scrapeGov(seatNo: number) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://g12.emis.gov.eg/",
      headers: {
        authority: "g12.emis.gov.eg",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en,en-US;q=0.9,ar;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        cookie:
          "_ga=GA1.3.870954071.1690770412; __utma=141880870.870954071.1690770412.1690804943.1690804943.1; __utmz=141880870.1690804943.1.1.utmcsr=almasryalyoum.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _ga_PTZH5DXSTC=GS1.3.1690804943.1.0.1690804943.0.0.0; amp_a0683b=D5c_2Sq_aZOBvjR_rjbS-A.aG9wd3AwcmsydG55cA==..1h6m7rh1g.1h6m7rh1g.0.0.0; _ga_1NPC4FN6NR=GS1.3.1690816071.2.0.1690816071.0.0.0; ApplicationGatewayAffinityCORS=5d42c5decf270783bd5d7d814d131fb1; ApplicationGatewayAffinity=5d42c5decf270783bd5d7d814d131fb1; .AspNetCore.Antiforgery.gB4fquMVw0A=CfDJ8Km6_9dqMghDnMWzFxWCQAQIejfWVYV06vWwQ4dKKAcp3hHBGNh_O_gwMxTJDe77Jd8kC7x_cQv-qSwhS5KbfCdcJJKfY4il4yiqDdv16hrgzuJaLwiDXHM5y7esZACNNcLxwm0CBTaKTWI1Fv5Monc; ASLBSA=0003e2a589b0599ba1001a02098e2367b98c65e71a5e9e0236a3d255488d8bea479c; ASLBSACORS=0003e2a589b0599ba1001a02098e2367b98c65e71a5e9e0236a3d255488d8bea479c; ai_user=co17xb/MxYpBjeQJU0VQIs|2023-08-02T00:09:07.339Z; .AspNetCore.Mvc.CookieTempDataProvider=CfDJ8Km6_9dqMghDnMWzFxWCQAQcSnlETDp6NPxNzztTsnMWer7KJx-Hd6vvA7JLlpZcozJqa0K1My-TPQ1cbcn6cYeIfo1uQtkDVcWUamO94ui1PKFBFY6OKnWU2FD7lx9CiQNJ4U5JdFSOYCAPJHMIOiQ; ai_session=NFHmjuTqNGxYw0TGXTrspk|1690934947480|1690934987912; mp_10bab2a6cec3a2ef62083257f3f09083_mixpanel=%7B%22distinct_id%22%3A%20%22189262f1dc8391-0ee06ccac888c-26031d51-1c03e0-189262f1dc9a50%22%2C%22%24device_id%22%3A%20%22189262f1dc8391-0ee06ccac888c-26031d51-1c03e0-189262f1dc9a50%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24search_engine%22%3A%20%22google%22%7D",
        origin: "https://g12.emis.gov.eg",
        referer: "https://g12.emis.gov.eg/",
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
        SeatingNo: seatNo,
        __RequestVerificationToken:
          "CfDJ8Km6_9dqMghDnMWzFxWCQATqwusq-XBpwvA1fM7fXDh_neCZ-xQn564Wvj5Wr7L8-j9E-a16HjHaItwQ2Riuq8Zeo01svAY1lzOmCvhNaw_ElNV43mEXDHKXBpLq5JOQEpHF1W8Ojk9cn0OvnKl1K-A",
      }),
    };

    const { data } = await this.axios(config);
    const $ = load(data);

    const status = cleanTrim(
      $(`#Result > div > div:nth-child(1) > div > h2`).text(),
    );

    const result: Student = {
      id: randomUUID(),
      seatNo: seatNo,
      totalScore: convertToNumber(
        $(
          `div.all > div.RightSide > div.data-result > div > div > ul > li:nth-child(2) > h1`,
        ).text(),
      ),
      name: cleanTrim(
        $(
          `#Result > div > div.row.no-gutter.mb-5 > div.col-lg-4 > div > table > tbody > tr:nth-child(2) > td`,
        ).text(),
      ),

      school: cleanTrim(
        $(
          `#Result > div > div.row.no-gutter.mb-5 > div.col-lg-4 > div > table > tbody > tr:nth-child(3) > td`,
        ).text(),
      ),
      educationalAdministration: cleanTrim(
        $(
          `#Result > div > div.row.no-gutter.mb-5 > div.col-lg-4 > div > table > tbody > tr:nth-child(5) > td`,
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

        nationalEducation:
          convertToNumber(
            $(
              `div.result-info > div.result-details > div > ul > li:nth-child(2) > span.formatt4`,
            )
              .text()
              ?.trim(),
          ) ?? undefined,

        economicsAndStatistics:
          convertToNumber(
            $(
              `div.result-info > div.result-details > div > ul > li:nth-child(3) > span.formatt4`,
            )
              .text()
              ?.trim(),
          ) ?? undefined,
      },
    };

    return result;
  }

  async scrape(seatNo: number) {
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

    const result: Student = {
      id: randomUUID(),
      seatNo: seatNo,
      totalScore: convertToNumber(
        $(
          `div.all > div.RightSide > div.data-result > div > div > ul > li:nth-child(2) > h1`,
        ).text(),
      ),
      name: cleanTrim(
        $(
          `div.all > div.RightSide > div.full-result > ul > li:nth-child(1) > span:nth-child(2)`,
        ).text(),
      ),

      school: cleanTrim(
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

        nationalEducation:
          convertToNumber(
            $(
              `div.result-info > div.result-details > div > ul > li:nth-child(2) > span.formatt4`,
            )
              .text()
              ?.trim(),
          ) ?? undefined,

        economicsAndStatistics:
          convertToNumber(
            $(
              `div.result-info > div.result-details > div > ul > li:nth-child(3) > span.formatt4`,
            )
              .text()
              ?.trim(),
          ) ?? undefined,
      },
    };

    if (!result.name) throw new Error("not found");

    return result;
  }
}

import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class PageInput {
  @Field(() => Int, { nullable: true })
  perPage: number;
  @Field(() => Int, { nullable: true })
  currentPage: number;
}

@ObjectType()
export class PageInfo {
  @Field(() => Int)
  total: number;
  @Field(() => Int)
  perPage: number;
  @Field(() => Int)
  currentPage: number;
  @Field(() => Int)
  lastPage: number;
  @Field(() => Boolean)
  hasNextPage: boolean;
}

@ObjectType()
export class Page {
  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

export type PaginateOptions = {
  total: number;
  currentPage: number;
  perPage: number;
};

export function getPageInfo({
  total,
  currentPage = 0,
  perPage = 25,
}: PaginateOptions) {
  if (perPage > 100) perPage = 100;
  const totalPages = Math.floor(total / perPage);
  const lastPage = totalPages;
  const hasNextPage = currentPage >= lastPage ? false : true;
  const offset = currentPage * perPage;

  return {
    totalPages,
    lastPage,
    hasNextPage,
    offset,
    total,
    currentPage,
    perPage,
  };
}

import url from "url";
import { SortBy } from "../../client/src/shared/types";

export type GetBobaFilters = {
  limit: number;
  location: string;
  offset: number;
  sortBy: SortBy;
};

export function getBobaShops(filters: GetBobaFilters) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const req = url.format({
    protocol: "https",
    hostname: "api.yelp.com",
    pathname: "/v3/businesses/search",
    query: {
      // location: 93401,
      // sort_by: "best_match",
      categories: "bubbletea",
      radius: 10000,
      ...filters,
      sort_by: filters.sortBy,
    },
  });

  return fetch(req, options);
}

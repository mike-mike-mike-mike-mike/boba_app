export enum Office {
  los_gatos = "los_gatos",
  new_york = "new_york",
  los_angeles = "los_angeles",
}

export type ShopsQueryParams = {
  office: Office;
  sortBy: SortBy;
  page: number;
};

export enum SortBy {
  rating = "rating",
  distance = "distance",
}

export type ShopType = {
  alias: string;
  distance: string;
  id: string;
  image_url: string;
  name: string;
  rating: string;
  url: string;
};

export type ShopsResponseType = {
  businesses: ShopType[];
};

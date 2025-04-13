import { FiltersType } from "../components/filters";

export async function getShops(filters: FiltersType, page: number = 0) {
  const query = new URLSearchParams({
    ...filters,
    page: String(page),
  }).toString();
  const response = await fetch(`/api/shops?${query}`);

  return response.json();
}

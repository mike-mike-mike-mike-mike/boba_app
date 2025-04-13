import { FiltersType } from "../components/filters";
import { ShopsResponseType } from "../shared/types";

export async function getShops(
  filters: FiltersType,
  page: number = 0
): Promise<ShopsResponseType> {
  const query = new URLSearchParams({
    ...filters,
    page: String(page),
  }).toString();
  const response = await fetch(`/api/shops?${query}`);

  return response.json();
}

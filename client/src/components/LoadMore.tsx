import { Button } from "reactstrap";
import { ShopType } from "../shared/types";
import { FiltersType } from "./filters";
import { getShops } from "../api/shops";

export type LoadMoreType = {
  filters: FiltersType;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setShops: React.Dispatch<React.SetStateAction<ShopType[]>>;
};

export function LoadMore({ filters, page, setPage, setShops }: LoadMoreType) {
  const handleOnClick = async () => {
    const nextPage = page + 1;
    const newData = await getShops(filters, nextPage);

    setShops((prev) => {
      return [...prev, ...newData.businesses];
    });
    setPage(nextPage);
  };
  return (
    <Button color="primary" onClick={handleOnClick}>
      Load More
    </Button>
  );
}

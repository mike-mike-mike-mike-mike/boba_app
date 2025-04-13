import { Card } from "reactstrap";
import { ShopType } from "../shared/types";

export function ShopCard({ shop }: { shop: ShopType }) {
  return <Card className="mt-4">{shop.name}</Card>;
}

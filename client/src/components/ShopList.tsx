import { Card } from "reactstrap";
import { ShopType } from "../shared/types";
import { ShopCard } from "./ShopCard";

export function ShopList({ shops }: { shops: ShopType[] }) {
  const NoShops = () => <div>No Shops!</div>;
  return (
    <>
      {shops.length > 0 &&
        shops.map((shop) => {
          return <ShopCard key={shop.name} shop={shop} />;
        })}
      {shops.length === 0 && <NoShops />}
    </>
  );
}

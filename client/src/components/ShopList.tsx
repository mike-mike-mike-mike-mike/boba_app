import { Container, Spinner } from "reactstrap";
import { ShopType } from "../shared/types";
import { ShopCard } from "./ShopCard";

const Loading = () => (
  <div>
    <Spinner className="align-middle me-2" />{" "}
    <span className="align-middle">Loading...</span>
  </div>
);

export function ShopList({
  loading,
  shops,
}: {
  loading: boolean;
  shops: ShopType[];
}) {
  const NoShops = () => <div>Select an office location to see shops</div>;
  return (
    <Container style={{ height: "500px" }}>
      {loading && <Loading />}
      {shops.length > 0 &&
        shops.map((shop) => {
          return <ShopCard key={shop.alias} shop={shop} />;
        })}
      {shops.length === 0 && !loading && <NoShops />}
    </Container>
  );
}

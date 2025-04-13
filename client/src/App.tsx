import "./App.css";
import { useEffect, useState } from "react";
import { Container, Spinner } from "reactstrap";
import { Filters, FiltersType } from "./components/filters";
import { ShopType, SortBy } from "./shared/types";
import { ShopList } from "./components/ShopList";

const exampleShop: ShopType = {
  alias: "tasty-boba",
  distance: "3 miles",
  id: "123",
  image_url:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bc0pBu6IEyF4vYo4j-ftggHaE8%26pid%3DApi&f=1&ipt=133ba7a514125ff15c4fd4a3fc3ff7ecc11b8abec4c0f1abd8574cd4be928ffb&ipo=images",
  name: "Tasty Boba",
  rating: "5",
  url: "#",
};

function App() {
  const [filters, setFilters] = useState<FiltersType>({
    office: "",
    sortBy: SortBy.rating,
  });
  const [shops, setShops] = useState<ShopType[]>([exampleShop]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchShops = async () => {
      if (!filters.office) {
        setShops([]);
        return;
      }

      try {
        setLoading(true);
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`/api/shops?${query}`);
        const data = await response.json();

        setLoading(false);
        setShops(data.businesses);
      } catch {}
    };

    fetchShops();
  }, [filters]);

  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <h1 className="mb-4">Let's find some boba!</h1>
          <Filters filters={filters} setFilters={setFilters} />
          <ShopList loading={loading} shops={shops} />
        </Container>
      </div>
    </div>
  );
}

export default App;

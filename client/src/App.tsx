import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Filters, FiltersType } from "./components/filters";
import { ShopType, SortBy } from "./shared/types";
import { ShopList } from "./components/ShopList";

function App() {
  const [filters, setFilters] = useState<FiltersType>({
    office: "",
    sortBy: SortBy.rating,
  });
  const [shops, setShops] = useState<ShopType[]>([{ name: "ASDF" }]);

  useEffect(() => {
    const fetchShops = async () => {
      if (!filters.office) {
        console.log("not querying");
        return;
      }

      try {
        // const query = new URLSearchParams(filters).toString();
        // const response = await fetch(`/api/shops?${query}`);
        // const data = await response.json();
      } catch {}
    };

    fetchShops();
  }, [filters]);

  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <Filters filters={filters} setFilters={setFilters} />
          <ShopList shops={shops} />
        </Container>
      </div>
    </div>
  );
}

export default App;

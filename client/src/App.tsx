import "./App.css";
import { useState } from "react";
import { Container } from "reactstrap";
import { Filters, FiltersType } from "./components/filters";
import { SortBy } from "./shared/types";

function App() {
  const [filters, setFilters] = useState<FiltersType>({
    office: "",
    sortBy: SortBy.rating,
  });

  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <Filters filters={filters} setFilters={setFilters} />
        </Container>
      </div>
    </div>
  );
}

export default App;

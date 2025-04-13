import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Office, ShopsQueryParams, SortBy } from "../shared/types";

export type FiltersType = {
  office: ShopsQueryParams["office"] | "";
  sortBy: ShopsQueryParams["sortBy"];
};

export type FiltersProps = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

export function Filters({ filters, setFilters }: FiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Form>
      <Row>
        <Col>
          <FormGroup>
            <Label for="office">Office</Label>
            <Input
              type="select"
              id="office"
              value={filters.office}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value={Office.los_gatos}>Los Gatos</option>
              <option value={Office.new_york}>New York</option>
              <option value={Office.los_angeles}>Los Angeles</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="sortBy">Sort By</Label>
            <Input
              type="select"
              id="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
            >
              <option value={SortBy.rating}>Rating</option>
              <option value={SortBy.distance}>Distance</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

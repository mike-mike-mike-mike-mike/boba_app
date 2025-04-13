import { Card, Col, Row } from "reactstrap";
import { ShopType } from "../shared/types";

function formatDistance(distance: number) {
  return (Number(distance) * 0.0006213712).toFixed(1);
}

// TODO: fix the columns so that rating and distance are aligned
//  probably need to use the list group or table component instead

export function ShopCard({ shop }: { shop: ShopType }) {
  return (
    <Card className="mt-4 d-flex align-items-start p-3">
      <Row className="w-100">
        <Col xs="auto">
          <a href={shop.url} target="_blank" rel="noopener noreferrer">
            <img
              src={shop.image_url}
              alt={shop.name}
              height="100"
              width="100"
              style={{ objectFit: "cover" }}
              className="me-3"
            />
          </a>
          <a
            href={shop.url}
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            {shop.name}
          </a>
        </Col>
        <Col className="ms-auto d-flex align-items-center justify-content-end">
          <span>rating: {shop.rating}</span>
        </Col>
        <Col
          xs="2"
          className="ms-auto d-flex align-items-center text-right justify-content-end"
        >
          {formatDistance(Number(shop.distance))} mi
        </Col>
      </Row>
    </Card>
  );
}

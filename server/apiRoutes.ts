import { Router } from "express";
import { getBobaShops, SortBy } from "./api/yelp";
import { OFFICE_LOCATION_MAP } from "./constants";

const router = Router();

const BATCH_SIZE = 10;

router.get("/shops", (req, res, next) => {
  getBobaShops({
    limit: BATCH_SIZE,
    location: "93401",
    sortBy: SortBy.rating,
    offset: 0,
  })
    .then((r) => r.json())
    .then((json) => res.send(json))
    .catch((err) => next(err));
});

export default router;

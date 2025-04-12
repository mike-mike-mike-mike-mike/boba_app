import { Router } from "express";
import { getBobaShops, SortBy } from "./api/yelp";
import { OFFICE_LOCATION_MAP } from "./constants";

enum Office {
  los_gatos = "los_gatos",
  new_york = "new_york",
  los_angeles = "los_angeles",
}

type ShopsQueryParams = {
  office: Office;
  sortBy: SortBy;
  page: number;
};

const router = Router();

const BATCH_SIZE = 10;

router.get("/shops", (req, res, next) => {
  const { office, sortBy, page } = req.query;
  console.log(req.query);
  if (
    typeof office !== "string" ||
    !Object.values(Office).includes(office as Office)
  ) {
    return res.status(400).send({
      error: {
        message:
          "Invalid 'office' parameter. Must be one of: " +
          Object.values(Office).join(", "),
      },
    });
  }
  const location = OFFICE_LOCATION_MAP[office];
  const resolvedSort = sortBy ?? SortBy.rating;
  const offset = (page ?? 0) * BATCH_SIZE;

  getBobaShops({ limit: BATCH_SIZE, location, sortBy: resolvedSort, offset })
    .then((r) => r.json())
    .then((json) => res.send(json))
    .catch((err) => next(err));
});

export default router;

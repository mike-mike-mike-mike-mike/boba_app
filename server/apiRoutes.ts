import { Router } from "express";
import { getBobaShops } from "./api/yelp";
import { OFFICE_LOCATION_MAP } from "./constants";
import { Office, ShopsQueryParams, SortBy } from "../client/src/shared/types";

const router = Router();

const BATCH_SIZE = 5;

router.get("/shops", (req, res, next) => {
  const { office, sortBy, page } = req.query as ShopsQueryParams;
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

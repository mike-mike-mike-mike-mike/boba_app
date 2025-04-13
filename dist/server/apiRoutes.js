"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const yelp_1 = require("./api/yelp");
const constants_1 = require("./constants");
const types_1 = require("../client/src/shared/types");
const router = (0, express_1.Router)();
const BATCH_SIZE = 10;
router.get("/shops", (req, res, next) => {
    const { office, sortBy, page } = req.query;
    console.log(req.query);
    if (typeof office !== "string" ||
        !Object.values(types_1.Office).includes(office)) {
        return res.status(400).send({
            error: {
                message: "Invalid 'office' parameter. Must be one of: " +
                    Object.values(types_1.Office).join(", "),
            },
        });
    }
    const location = constants_1.OFFICE_LOCATION_MAP[office];
    const resolvedSort = sortBy !== null && sortBy !== void 0 ? sortBy : types_1.SortBy.rating;
    const offset = (page !== null && page !== void 0 ? page : 0) * BATCH_SIZE;
    (0, yelp_1.getBobaShops)({ limit: BATCH_SIZE, location, sortBy: resolvedSort, offset })
        .then((r) => r.json())
        .then((json) => res.send(json))
        .catch((err) => next(err));
});
exports.default = router;

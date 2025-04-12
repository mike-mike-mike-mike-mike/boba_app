"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const yelp_1 = require("./api/yelp");
const router = (0, express_1.Router)();
const BATCH_SIZE = 10;
router.get("/shops", (req, res, next) => {
    (0, yelp_1.getBobaShops)({
        limit: BATCH_SIZE,
        location: "93401",
        sortBy: yelp_1.SortBy.rating,
        offset: 0,
    })
        .then((r) => r.json())
        .then((json) => res.send(json))
        .catch((err) => next(err));
});
exports.default = router;

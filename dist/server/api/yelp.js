"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBy = void 0;
exports.getBobaShops = getBobaShops;
const url_1 = __importDefault(require("url"));
var SortBy;
(function (SortBy) {
    SortBy["rating"] = "rating";
    SortBy["distance"] = "distance";
})(SortBy || (exports.SortBy = SortBy = {}));
function getBobaShops(filters) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
    };
    const req = url_1.default.format({
        protocol: "https",
        hostname: "api.yelp.com",
        pathname: "/v3/businesses/search",
        query: Object.assign({ 
            // location: 93401,
            // sort_by: "best_match",
            categories: "bubbletea", radius: 10000 }, filters),
    });
    return fetch(req, options);
}

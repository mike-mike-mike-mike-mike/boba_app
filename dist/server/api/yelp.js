"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBobaShops = getBobaShops;
const url_1 = __importDefault(require("url"));
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
        query: Object.assign(Object.assign({ 
            // location: 93401,
            // sort_by: "best_match",
            categories: "bubbletea", radius: 10000 }, filters), { sort_by: filters.sortBy }),
    });
    return fetch(req, options);
}

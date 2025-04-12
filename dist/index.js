"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
if (process.env.NODE_ENV === "development") {
    app.get("*path", (req, res) => {
        res.redirect("http://localhost:3000" + req.originalUrl);
    });
}
else {
    // Serve static files from the React app's build directory
    app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
    app.get("/", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../client/build", "index.html"));
    });
    // Handle all unmatched routes by serving the React app's index.html
    app.get("*path", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../client/build", "index.html"));
    });
}
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

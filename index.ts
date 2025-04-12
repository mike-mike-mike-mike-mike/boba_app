import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "./server/apiRoutes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "development") {
  app.get("*path", (req: Request, res: Response) => {
    res.redirect("http://localhost:3000" + req.originalUrl);
  });
} else {
  // Serve static files from the React app's build directory
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  // Handle all unmatched routes by serving the React app's index.html
  app.get("*path", function (req: Request, res: Response) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

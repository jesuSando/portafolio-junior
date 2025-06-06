import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mailRoutes from "./mail.routes.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

router.get("/redirect", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/redirect.html"));
});

router.use("/api", mailRoutes);

export default router;

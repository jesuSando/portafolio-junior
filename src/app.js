import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import routes from "./routes/index.routes.js";

dotenv.config();

//fix para dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//iniciar express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

//public folder 
app.use(express.static(path.join(__dirname, '../public')));

app.use("/", routes);

//server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
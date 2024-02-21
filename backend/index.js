import express from "express";
import { registerRouter } from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

registerRouter(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

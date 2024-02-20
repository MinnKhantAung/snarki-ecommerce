import express from "express";
import { registerRouter } from "./routes/index.js";

const app = express();

app.use(express.json())

registerRouter(app)
const port = process.env.PORT | 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

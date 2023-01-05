import { config } from "dotenv";
import cors from "cors";
import express from "express";

config();
const app = express();
const PORT = process.env.PORT ?? 9000;

app.use(cors(), express.json());

app.listen(PORT, () => {
  console.log(`server is live (Port: ${PORT})`);
});

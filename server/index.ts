import { config } from "dotenv";
import cors from "cors";
import express from "express";
import clusterConnect from "./config/mongodb";
config();

const app = express();

app.use(cors(), express.json());

const PORT = process.env.PORT ?? 9000;
app.listen(PORT, () => {
  clusterConnect();
  console.log(`server is live (Port: ${PORT})`);
});

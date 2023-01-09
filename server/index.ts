import { config } from "dotenv";
import cors from "cors";
import express from "express";
import clusterConnect from "./config/mongodb";
import apiRouter from "./apiRouter";
config();

const app = express();

app.use(cors(), express.json());

app.use("/api", apiRouter);

const PORT = process.env.PORT ?? 2048;
app.listen(PORT, () => {
  clusterConnect();
  console.log(`server is live (Port: ${PORT})`);
});

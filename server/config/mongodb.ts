import mongoose from "mongoose";
import { config } from "dotenv";

config();
mongoose.set("strictQuery", true);

export default function clusterConnect() {
  try {
    const cluster_uri = process.env.MONGO_URI;
    if (!cluster_uri) {
      throw new Error("Failed to Connect: no uri provided");
    }
    mongoose.connect(cluster_uri).then(() => {
      console.log(`connected to cluster`);
    });
  } catch (error) {
    console.error(error);
  }
}

import express from "express";
import serverRouters from "./controllers";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config()

const server = express();

server.use(bodyParser.json())
server.use("/api", serverRouters);
server.listen(3000, () => {
  mongoose.connect(process.env.MONGO_URL as string, {
      dbName: "gd_db",
    }).then(() => console.log("SERVER listening to PORT 3000")).catch(err=> console.log(err));
});

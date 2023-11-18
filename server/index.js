import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/db/database.js";
import router from "./src/routes/singUp.routes.js";
import cors from "cors";
const app = express();
const port = 3000;
connectDB();

/*
 * ~ middleware
 */

app.use(cors());
app.use(express.json());
/*
 * ~ routes
 */
app.use("/api", router);

/*
 * ~ starting server from here
 */
const start = async () => {
  try {
    await app.listen(port, () => {
      console.log("port is listening in ", port);
    });
  } catch (error) {
    console.log("error occurred at server starting ~~", error);
    process.exit(1);
  }
};
start();

// $$ import all modules here
import express from "express";
const app = express();
import { APP_PORT } from "./config";
import Routes from "./Routes";
import errorHandler from "./middleware/errorHandler";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import path from "path";
import "./database/connection";

// $$ create route here
app.use("/api", Routes);
app.use("/uploads", express.static("uploads"));

global.appRoot = path.resolve(__dirname);

// $$ tell express to use json in our file
app.use(errorHandler);
// $$ tell express dont use urlencoded

app.listen(APP_PORT, () => {
  console.log(`http://localhost:${APP_PORT}`);
});

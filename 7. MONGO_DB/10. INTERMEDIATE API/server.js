// let express = require("express");
import express from "express";
let app = express();
import { EXPRESS_PORT, MONGODB_CONNNECTION } from "./config";
import RoutesPath from "./routes";
app.use("/api", RoutesPath);

app.listen(EXPRESS_PORT, () => {
  console.log(`http://localhost:${EXPRESS_PORT}`);
});

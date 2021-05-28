import express from "express";
const routes = express.Router();
import { registerController } from "../controller";
// here we are using next for error handling
routes.post("/register", registerController.register);

export default routes;

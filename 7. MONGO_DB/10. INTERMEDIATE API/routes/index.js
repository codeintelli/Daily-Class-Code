import express from "express";
const routes = express.Router();
import registerController from "../controller/registerController";
routes.post("/register", registerController.register);
export default routes;

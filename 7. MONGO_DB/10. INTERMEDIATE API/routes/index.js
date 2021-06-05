import express from "express";
const routes = express.Router();
import {
  registerController,
  loginController,
  userController,
} from "../controller";
import auth from "../middleware/auth";
routes.post("/register", registerController.register);
routes.post("/login", loginController.login);
routes.get("/me", auth, userController.me);
export default routes;

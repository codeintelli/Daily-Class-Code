import express from "express";
const routes = express.Router();
import {
  registerController,
  loginController,
  userController,
  refreshToken,
} from "../controller";
import auth from "../middleware/auth";
routes.post("/register", registerController.register);
routes.post("/login", loginController.login);
routes.get("/me", auth, userController.me);
routes.post("/refresh", refreshToken.refresh);
routes.post("/logout", auth, loginController.logout);
export default routes;

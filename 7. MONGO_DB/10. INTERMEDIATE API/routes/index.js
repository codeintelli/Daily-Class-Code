import express from "express";
const routes = express.Router();
import {
  registerController,
  loginController,
  userController,
  refreshToken,
  productController,
} from "../controller";
import auth from "../middleware/auth";
import admin from "../middleware/admin";

// user
routes.post("/register", registerController.register);
routes.post("/login", loginController.login);
routes.get("/me", auth, userController.me);
routes.post("/refresh", refreshToken.refresh);
routes.post("/logout", auth, loginController.logout);
// products
routes.post("/products", [auth, admin], productController.store);
routes.put("/products/:id", [auth, admin], productController.update);
routes.delete("/products/:id", [auth, admin], productController.distroy);
routes.get("/products", productController.index);
routes.get("/products/:id", productController.show);

export default routes;

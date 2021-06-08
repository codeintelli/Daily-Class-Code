import dotenv from "dotenv";
dotenv.config({ path: "./variable.env" });

export const {
  APP_PORT,
  MONGO_CONNECTION_URL,
  DEBUG_MODE,
  JWT_SECURE,
  REFRESH_SECURE,
  APP_URL,
} = process.env;

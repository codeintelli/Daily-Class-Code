import dotenv from "dotenv";
dotenv.config({ path: "./variable.env" });

export const { APP_PORT, MONGO_CONNECTION_URL, DEBUG_MODE } = process.env;

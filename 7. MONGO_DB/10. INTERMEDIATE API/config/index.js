import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
// object destructuring
export const { EXPRESS_PORT, MONGODB_CONNNECTION } = process.env;

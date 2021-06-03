import { ValidationError } from "joi";
import { DEBUG_MODE } from "../config";
const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    error: "INTERNAL SERVER ERROR",
    //$$ this is good for development not for production
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };
  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  return res.status(statusCode).json(data);
};
export default errorHandler;

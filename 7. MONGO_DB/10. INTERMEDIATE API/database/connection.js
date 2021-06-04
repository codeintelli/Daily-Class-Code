import mongoose from "mongoose";
import { MONGO_CONNECTION_URL } from "../config";
mongoose
  .connect(MONGO_CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    res.status(500).json({ message: err });
  });

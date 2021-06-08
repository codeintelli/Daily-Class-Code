import mongoose from "mongoose";
import { APP_URL } from "../config";
// database validations
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      get: (image) => {
        //https:localhost:5000/uploads\\1623153927262-738094204.png
        return `${APP_URL}/${image}`;
      },
    },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Products", productSchema);

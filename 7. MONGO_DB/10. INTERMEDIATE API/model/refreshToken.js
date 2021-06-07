import mongoose from "mongoose";

// database validations
const refreshTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      unique: true,
    },
  },
  { timestamps: false }
);

export default mongoose.model("Refresh-Token", refreshTokenSchema);

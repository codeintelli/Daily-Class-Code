const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// NAME,PHONE,EMAIL,ADDRESS,COLLAGE/SCHOOL,ER.NO,SEMESTER
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  collage: {
    type: String,
    required: true,
  },
  erNo: {
    type: String,
    required: true,
  },
  sem: {
    type: String,
    required: true,
  },
  tokens: [
    {
      generatedtoken: {
        type: String,
        required: true,
      },
    },
  ],
});

dataSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

dataSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      "mynameisdushayantkhodaharharmahadev"
    );
    this.tokens = this.tokens.concat({ generatedtoken: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = new mongoose.model("user-data", dataSchema);

module.exports = User;

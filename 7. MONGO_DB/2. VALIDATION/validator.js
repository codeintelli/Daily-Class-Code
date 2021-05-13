const express = require("express");
const app = express();
const validator = require("validator");
const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost:27017/expressWithMongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Your Database Is Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const dataSchema = new mongo.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minlength: [
      3,
      "Error Message:- please enter valid string and min length is 3",
    ],
    maxlength: [
      10,
      "Error Message:- please enter valid string and max length is 10",
    ],
    lowercase: true,
    trim: true,
  },
  ctype: {
    type: String,
    require: true,
    lowercase: true,
    enum: ["frontend", "backend", "database"],
  },
  videos: {
    //   useCreateIndex used in connection string
    type: Number,
    validate(value) {
      if (value <= 0) {
        throw new Error("videos count should be in positive or zero");
      }
    },
  },
  author: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("enter valid email address");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const collection_name = new mongo.model("mongoData", dataSchema);
const insertOne = async () => {
  try {
    const demoPlaylist = new collection_name({
      name: "Demo",
      ctype: "backend",
      videos: 5,
      author: "demo",
      email: "dushyant.khoda@gmail.co",
      active: false,
    });
    const result = await demoPlaylist.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
insertOne();

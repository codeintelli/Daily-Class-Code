const mongoose = require("mongoose");
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
});

const User = new mongoose.model("user-data", dataSchema);

module.exports = User;

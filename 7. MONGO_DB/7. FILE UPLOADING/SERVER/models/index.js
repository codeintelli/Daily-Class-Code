const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
  filename: {
    type: String,
    unique: true,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  imageBase64: {
    type: String,
    require: true,
  },
});

const uploadSchema = new mongoose.model('sharing-data',uploadSchema);
module.exports = uploadSchema;

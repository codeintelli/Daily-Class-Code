const mongoose = require("mongoose");
const config = require("../../config");

mongoose
  .connect(config.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`mongo db connect`);
  })
  .catch((err) => console.log(err));

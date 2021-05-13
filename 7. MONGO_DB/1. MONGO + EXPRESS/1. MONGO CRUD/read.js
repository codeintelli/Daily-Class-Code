const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost:27017/Express_Mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection establish successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//   ~schema

const dataSchema = new mongo.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
// ~creating collection or model
const Data = new mongo.model("playlist_data", dataSchema);

const readData = async () => {
  const result = await Data.find({ ctype: "Frontend" })
    .select({
      _id: 0,
      name: 1,
      ctype: 1,
    })
    .limit(2)
    .skip(1);
  console.log(result);
};

const advanceReadData = async () => {
  // all record which ctype is Native Mobile Development will be displayed
  const result = await Data.find({
    ctype: "Native Mobile Development",
  });
  // here first record will be skipped and remaining record will be displayed
  const skip = await Data.find({ ctype: "Native Mobile Development" }).skip(1);
  // here only first record will be displayed if we extend limit then we see more records
  const limit = await Data.find({ ctype: "Native Mobile Development" }).limit(
    1
  );
  //   here we will display only name of the record which comes under ctype: "Native Mobile Development",
  const select = await Data.find({
    ctype: "Native Mobile Development",
  }).select({ name: 1 });

  const multipleSelect = await Data.find({
    ctype: "Native Mobile Development",
  }).select({ name: 1, _id: 0, ctype: 1, active: 1 });


  
  console.log("\n\n\n\n using normal \n \n", result);
  console.log("\n\n\n\n using skip command\n \n", skip);
  console.log("\n\n\n\n using limit command \n \n", limit);
  console.log("\n\n\n\n using Select command\n \n", select);
  console.log("\n\n\n\n using Multiple Select command\n \n", multipleSelect);
};

advanceReadData();
readData();

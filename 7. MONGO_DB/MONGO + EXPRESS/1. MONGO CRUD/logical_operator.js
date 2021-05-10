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
const collection_name = new mongo.model("playlist_data", dataSchema);

const logicalOperations = async () => {
  const logicalAnd = await collection_name
    .find({
      $and: [{ ctype: "Database" }, { name: "Mysql" }],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalAndTwo = await collection_name
    .find({
      $and: [{ ctype: "Database" }, { author: "ITVMH DEVELOPERS" }],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalOr = await collection_name
    .find({
      // similarly working like $in operator means in array operator
      $or: [{ ctype: "Database" }, { ctype: "Frontend" }, { ctype: "Backend" }],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalNot = await collection_name
    .find({
      videos: { $not: { $gt: 50 } },
    })
    .select({ name: 1, _id: 0, ctype: 1, videos: 1 });

  const logicalNor = await collection_name
    .find({
      $nor: [
        { ctype: "Database" },
        { ctype: "Frontend" },
        { ctype: "Backend" },
      ],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  console.log("\n\n\n\n\n\n Logical And:-", logicalAnd);
  console.log("\n\n\n\n\n\n Logical And:-", logicalAndTwo);
  console.log("\n\n\n\n\n\n Logical OR:-", logicalOr);
  console.log("\n\n\n\n\n\n logical Not:-", logicalNot);
  console.log("\n\n\n\n\n\n logical  NOR:-", logicalNor);
};

logicalOperations();

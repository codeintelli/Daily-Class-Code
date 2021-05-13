const mongo = require("mongoose");

mongo
  .connect("mongodb://localhost:27017/Express_Mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your Database Is Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// *schema

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

// todo:create collection
const collection_name = new mongo.model("playlist_data", dataSchema);

const logicalOperator = async () => {
  const AcendingSorting = await collection_name
    .find({
      $or: [{ ctype: "Database" }, { ctype: "FrontEnd" }, { ctype: "Backend" }],
    })
    .sort({ videos: 1 }) //~ 1 and -1 will be used in sorting
    .select({ name: 1, _id: 0, ctype: 1, videos: 1 });
  const Decendingsorting = await collection_name
    .find({
      $or: [{ ctype: "Database" }, { ctype: "FrontEnd" }, { ctype: "Backend" }],
    })
    .sort({ videos: -1 }) //~ 1 and -1 will be used in sorting
    .select({ name: 1, _id: 0, ctype: 1, videos: 1 });

  const countDocuments = await collection_name
    .find({ ctype: "Database" })
    .select({ name: 1, _id: 0, ctype: 1 })
    .countDocuments();
  const estimatedDocumentCount = await collection_name
    .find({
      $nor: [
        { ctype: "Database" },
        { ctype: "FrontEnd" },
        { ctype: "Backend" },
      ],
    })
    .select({ name: 1, _id: 0, ctype: 1 })
    .estimatedDocumentCount();
  // !.count(); this will be deprecated and removed in future version so better to use countDocuments()
  // ~.estimatedDocumentCount(); !this will tell total number of documents
  console.log("\n\n\n\n\n\n AcendingSorting :-", AcendingSorting);
  console.log("\n\n\n\n\n\n Decendingsorting :-", Decendingsorting);
  console.log("\n\n countDocuments:-", countDocuments);
  console.log("\n\n estimatedDocumentCount:-", estimatedDocumentCount);
};
logicalOperator();

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

const insertOne = async () => {
  try {
    const demoPlaylist = new collection_name({
      name: "Demo",
      ctype: "Demo",
      videos: 0,
      author: "demo",
      active: false,
    });
    const result = await demoPlaylist.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
// insertOne();

const deleteDocument = async (_id) => {
  try {
    //   you can also use deleteOne() instead of findByIdAndDelete()
    const result = await collection_name.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument("606364fd32800a3aeceec218");

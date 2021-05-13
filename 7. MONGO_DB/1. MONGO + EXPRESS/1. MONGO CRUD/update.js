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
const Data = new mongo.model("playlist_data", dataSchema);

const updateDocument = async (id) => {
  try {
    const result = await Data.update(
      { _id: id },
      {
        $set: {
          name: "UIUX",
        },
      }
    );

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const usingObjectDestructing = async (_id) => {
    const findByIdAndUpdates = await Data.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Mongoose JS",
          ctype: "Middleware",
        },
      },
      { useFindAndModify: false, new: true }
    );

  const findOneAndUpdates = await Data.findOneAndUpdate(
    { _id },
    {
      $set: {
        name: "THREE JS",
        ctype: "Middleware",
      },
    },
    { useFindAndModify: false }
  );
  //   console.log("\n\n findByIdAndUpdates \n", findByIdAndUpdates);
  console.log("\n\n findOneAndUpdates \n", findOneAndUpdates);
};
usingObjectDestructing("605e14fe10f67b3508a78ff4");
// updateDocument("605e14fe10f67b3508a78ff6");

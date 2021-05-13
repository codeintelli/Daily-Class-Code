const mongo = require("mongoose");

// mongo.connect return a promise it will tell you in future , in promise we are facing some error
mongo
  .connect("mongodb://localhost:27017/Express_Mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

// ~schema
// ? in mongoose the schema define the structure of the document,default value, validation.etc
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

// !model
/* 
? a mongoose model is a wrapper on the mongoose schema
? a monogo schema define the structure of the document,default value and validation,etc whereas a mongoose model provides a interface to the database for creating querying updating deleting records ,etc
*/

// here we are creating class
// const data = new mongo.model("collection_name{must be in singular}",define schema)

// create collction
const collection_name = new mongo.model("Playlist_Data", dataSchema);
const createDocument = async () => {
  try {
    const nodePlaylist = new collection_name({
      name: "Node JS",
      ctype: "Backend",
      videos: 10,
      author: "ITVMH DEVELOPER",
      active: true,
    });
    const result = await nodePlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

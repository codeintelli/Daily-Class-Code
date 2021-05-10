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

// insert single data
const singleData = async () => {
  try {
    const nodePlaylist = new Data({
      name: "Node JS",
      ctype: "Backend",
      videos: 30,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const result = await nodePlaylist.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const insertMultipleData = async () => {
  try {
    const reactPlaylist = new Data({
      name: "React JS",
      ctype: "Frontend",
      videos: 45,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const phpPlaylist = new Data({
      name: "PHP",
      ctype: "Backend",
      videos: 80,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const djangoPlaylist = new Data({
      name: "Django",
      ctype: "Backend",
      videos: 90,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const expressPlaylist = new Data({
      name: "Express JS",
      ctype: "Backend",
      videos: 30,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const angularPlaylist = new Data({
      name: "Angular ",
      ctype: "Frontend",
      videos: 130,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const mongooesPlaylist = new Data({
      name: "mongooes JS",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const javascript = new Data({
      name: "Javascript",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const uiux = new Data({
      name: "uiux",
      ctype: "Design",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const flutterPlaylist = new Data({
      name: "Flutter",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const react_nativePlaylist = new Data({
      name: "React Native",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const ionicPlaylist = new Data({
      name: "Ionic",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const swiftPlaylist = new Data({
      name: "Swift",
      ctype: "IOS Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const androidPlaylist = new Data({
      name: "Android",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const kotlinPlaylist = new Data({
      name: "Kotlin",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const mysqlPlaylist = new Data({
      name: "Mysql",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });
    const result = await Data.insertMany([
      reactPlaylist,
      phpPlaylist,
      djangoPlaylist,
      expressPlaylist,
      angularPlaylist,
      javascript,
      uiux,
      mongooesPlaylist,
      flutterPlaylist,
      androidPlaylist,
      ionicPlaylist,
      mysqlPlaylist,
      kotlinPlaylist,
      swiftPlaylist,
      react_nativePlaylist,
    ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

// singleData();
insertMultipleData();

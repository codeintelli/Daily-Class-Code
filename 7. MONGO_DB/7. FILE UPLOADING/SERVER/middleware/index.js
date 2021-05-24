const multer = require("multer");

// provide storage location
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //   callback will direct return we dont need to use return keyword
    // 1 argument = error if it occur any error then it shows otherwise it become null
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    //   profile-pic.jpg
    var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    // images-code-intelli-1529644667834.jpg
    const filename =
      file.fieldname + "-" + "code-intelli" + "-" + Date.now().ext;
    cb(null, filename);
  },
});

store = multer({ storage });

module.exports = store;

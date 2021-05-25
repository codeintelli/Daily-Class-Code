const uploadModel = require("../models");
const fs = require("fs");
exports.home = async (req, res) => {
  const img = await uploadModel.find();
  res.render("main", { images: img });
};

exports.upload = (req, res, next) => {
  // if you have grab only single file then we must use
  //   const file = req.file;
  const files = req.files;

  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path);
    console.log(img);
    return (encode_image = img.toString("base64"));
  });

  let result = imgArray.map((src, index) => {
    // to store image in database
    let finalImg = {
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase64: src,
    };

    let newUpload = new uploadModel(finalImg);
    return newUpload
      .save()
      .then(() => {
        return {
          message: `${files[index].originalname} File upload successfully`,
        };
      })
      .catch((err) => {
        if (err) {
          if (err.name === "MongoError" && err.code === 11000) {
            return Promise.reject({
              error: `Duplicate ${files[index].originalname} File Already Exist`,
            });
          }
        }
        return Promise.reject({
          error: `error Message ||Can't Upload ${files[index].originalname} something missing`,
        });
      });
  });

  Promise.all(result).then((msg) => {
    res.redirect("/");
    // res.json(msg);
  });
};

import { Product } from "../model";
import ProductValidator from "../validator";
import multer from "multer";
import path from "path";
import CustomErrorHandler from "../services/CustomErrorHandler";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});

const handleMulter = multer({
  storage,
  limits: {
    fileSize: 1000000 * 5,
    // 5 Mb
  },
}).single("image");

const productController = {
  async store(req, res, next) {
    handleMulter(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.ServerError());
      }

      const filePath = req.file.path;

      // uploads/195690493033_21421423423432.png

      const { error } = ProductValidator.validate(req.body);
      if (error) {
        //delete image
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.ServerError(err.message));
          }
        });
        return next(error);
      }

      // data insert into database
      const { name, size, price } = req.body;
      let document;
      try {
        document = await Product.create({
          name,
          price,
          size,
          image: filePath,
        });
      } catch (err) {
        return next(err);
      }
      res.json(document);
    });
  },
  update(req, res, next) {
    handleMulter(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // validation
      const { error } = ProductValidator.validate(req.body);
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }

        return next(error);
        // rootfolder/uploads/filename.png
      }

      const { name, price, size } = req.body;
      let document;
      try {
        document = await Product.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            price,
            size,
            ...(req.file && { image: filePath }),
          },
          { new: true }
        );
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  async distroy(req, res, next) {
    try {
      let document = await Product.findOneAndRemove({ _id: req.params.id });
      if (!document) {
        next(CustomErrorHandler.UserNotFound());
      }
      const imagePath = document._doc.image;
      console.log(imagePath);
      fs.unlink(`${appRoot}/${imagePath}`, (err) => {
        if (err) {
          return next(CustomErrorHandler.serverError(err.message));
        }
        return res.json(document);
      });
    } catch (err) {
      return next(err);
    }
    return res.json({ msg: "account delete successfully" });
  },
  //   get all data
  async index(req, res, next) {
    let document;
    try {
      document = await Product.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(CustomErrorHandler.ServerError());
    }
    res.status(202).json(document);
  },
  // get specific data
  async show(req, res, next) {
    let document;
    try {
      document = await Product.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.ServerError());
    }
    res.status(202).json(document);
  },
};

export default productController;

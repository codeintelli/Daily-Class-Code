const User = require("../models");
const bcrypt = require("bcrypt");
const getUser = async (req, res) => {
  try {
    const readData = await User.find({});
    res.json(readData);
  } catch (err) {
    console.log(err);
  }
};

const registration = async (req, res) => {
  try {
    const { email, password, phone, collage, erNo, sem } = req.body;
    const userRegiser = new User({
      name: req.body.fullname,
      email,
      phone,
      password,
      collage,
      erNo,
      sem,
    });
    const data = await userRegiser.save();
    if (!data) {
      console.log("data not inserted due to server Error");
    }
    res.status(200).render("login");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validating the request
    if (!email || !password) {
      res.status(422).json({ error: "validation error" });
    }
    const success = await User.findOne({ email: req.body.email });
    if (!success) {
      res.status(422).json({ error: "username and password is not valid" });
    } else {
      // here we are providing authorization or validation
      const isMatch = bcrypt.compare(password, success.password);
      // user authenticate
      const token = await success.generateAuthToken();
      res.cookie("userCredentials", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log(token);
      if (isMatch) {
        res.status(200).render("success");
      } else {
        res.status(422).json({ error: "username and password is not valid" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUser, registration, login };

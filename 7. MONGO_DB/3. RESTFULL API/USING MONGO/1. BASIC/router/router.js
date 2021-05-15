const express = require("express");
const router = express.Router();
const Student = require("../model/model");

// const router = require('express').Router();

router.get("/", (req, res) => {
  res.send("<h1>hello from the express</h1>");
});

// router.post("/student", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(200).json({ message: user });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: err });
//     });
// });

/* 
DESC:- INSERT RECORD IN STUDENT RECORD/TABLE 
METHOD:- POST
*/
router.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Student(req.body);
    const result = await user.save();
    if (result) {
      res.status(200).json({ message: user });
    } else {
      res.status(500).json({ message: err });
    }
  } catch (err) {
    console.log(err);
  }
});

/* 
DESC:- GET ALL STUDENT RECORD FROM THE RECORD/TABLE
METHOD:- GET
*/

router.get("/student", async (req, res) => {
  try {
    const user = await Student.find();
    res.status(200).json({ message: user });
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

/* 
DESC:- GET specific STUDENT RECORD FROM THE RECORD/TABLE
METHOD:- GET
*/

router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.params.id);
    const getUserDataById = await Student.findById({ _id });
    if (!getUserDataById) {
      res.status(404).json({ error: `no record found` });
    } else {
      res.status(200).json({ message: getUserDataById });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

/* 
DESC:- GET specific STUDENT RECORD FROM THE RECORD/TABLE
METHOD:- GET
*/

router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.params.id);
    const getUserDataById = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!getUserDataById) {
      res.status(404).json({ error: `no record found` });
    } else {
      res.status(200).json({ message: getUserDataById });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

/* 
DESC:- GET specific STUDENT RECORD FROM THE RECORD/TABLE
METHOD:- GET
*/

router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.params.id);
    const getUserDataById = await Student.findByIdAndDelete(_id);
    if (!getUserDataById) {
      res.status(404).json({ error: `no record found` });
    } else {
      res.status(200).json({ message: getUserDataById });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;

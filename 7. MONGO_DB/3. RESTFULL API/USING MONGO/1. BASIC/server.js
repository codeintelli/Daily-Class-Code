const express = require("express");
const app = express();
const port = process.env.PORT || 6464;
const con = require("./database/connection");
const Student = require("./model/model");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>hello from the express</h1>");
});

// app.post("/student", (req, res) => {
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

app.post("/student", async (req, res) => {
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

app.get("/student", async (req, res) => {
  try {
    const user = await Student.find();
    res.status(200).json({ message: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(port, () => {
  console.log(
    `express server is connected successfully http://localhost:${port}`
  );
});

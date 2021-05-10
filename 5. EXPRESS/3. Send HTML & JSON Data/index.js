const express = require("express");
const app = express();
const port = 6464;
app.get("/home", (req, res) => {
  res.send("<h1>welcome to home page</h1>");
});
app.get("/two", (req, res) => {
  res.write("<h1>this line is one</h1>");
  res.write("<h1>this line is two</h1>");
  //   res.send() or res.end()
  res.send();
});
app.get("/json", (req, res) => {
  res.send([
    {
      name: "aakash",
      skills: "android development",
    },
    {
      name: "anjali",
      skills: "MERN",
    },
    {
      name: "rinkal",
      skills: undefined,
    },
    {
      name: "RAHUL",
      skills: null,
    },
  ]);
});
app.get("/api", (req, res) => {
  res.json([
    {
      name: "aakash",
      skills: "android development",
    },
    {
      name: "anjali",
      skills: "MERN",
    },
    {
      name: "rinkal",
      skills: undefined,
    },
    {
      name: "RAHUL",
      skills: null,
    },
  ]);
});
app.listen(port);

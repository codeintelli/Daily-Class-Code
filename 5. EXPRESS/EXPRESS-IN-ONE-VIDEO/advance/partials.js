const express = require("express");
const app = express();
const path = require("path");
const port = 6;
/* 
~1. relative path(../../../../)
~2. absolute path(__dirname)
*/
// static
const absolute_path = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.use(express.static(absolute_path));

app.get("/", (req, res) => {
  res.render("index", {
    images: "shop.svg",
    heading_data: "Welcome to ",
    sub_data: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("index", {
    images: "watch.svg",
    heading_data: "welcome to ",
    sub_data: "about us page",
  });
});

app.get("/feedback", (req, res) => {
  res.render("index", {
    images: "women.svg",
    heading_data: "welcome to ",
    sub_data: "Feedback Page",
  });
});

app.get("*", (req, res) => {
  res.render("index", {
    images: "404.svg",
    heading_data: "page not",
    sub_data: "found",
  });
});

app.listen(port);

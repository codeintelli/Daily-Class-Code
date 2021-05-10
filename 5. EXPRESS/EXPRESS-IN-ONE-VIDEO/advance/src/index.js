const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// when we are hosting website on live server all server have its own port so due to conflict we create dynamic port
const port = process.env.PORT || 6464;

const absolutePath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");
// setting the template engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(absolutePath));

app.get("", (req, res) => {
  res.render("home", {
    header_image: "shop.svg",
    primaryText: "Welcome ",
    PrimaryColorText: "Home",
  });
});
app.get("/home", (req, res) => {
  res.render("home", {
    header_image: "shop.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Home",
  });
});
app.get("/man", (req, res) => {
  res.render("man", {
    header_image: "man.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Men's",
  });
});
app.get("/women", (req, res) => {
  res.render("women", {
    header_image: "women_two.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Women's",
    b1: "b1.png",
    content: "leather ",
  });
});
app.get("/watch", (req, res) => {
  res.render("watch", {
    header_image: "watch.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Watch",
  });
});
app.get("/bags", (req, res) => {
  res.render("bags", {
    header_image: "bags.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Bag's",
  });
});
app.get("/kids", (req, res) => {
  res.render("kids", {
    header_image: "kids.svg",
    primaryText: "Welcome To",
    PrimaryColorText: "Kid's",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    header_image: "404.svg",
    primaryText: "404",
    PrimaryColorText: "No Available",
  });
});
app.listen(port, () => {
  console.log("server is connnect successfully");
});

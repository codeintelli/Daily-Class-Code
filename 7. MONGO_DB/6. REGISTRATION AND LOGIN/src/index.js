require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const PORT = process.env.PORT || 8080;
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../template/partials");
const ViewPath = path.join(__dirname, "../template/views");

app.set("view engine", "hbs");
app.set("views", ViewPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/registration", (req, res) => {
  res.render("registration");
});
app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(PORT, () => {
  console.log(`your server is connected on port http://localhost:${PORT}`);
});

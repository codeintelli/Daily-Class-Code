// !for using express
const express = require("express");
const app = express();
// !for using path module we need to require path
const path = require("path");
// !for creating partial we need to require hbs(handlebars)
const hbs = require("hbs");
// !all server have its own process.env.PORT which is a simple port where our website will be displayed like mysql have its own port
const port = process.env.PORT || 6464;

// !second step:- using template engine
// !for using template engine you must have to create static data
// !for create data static express provide us some feature like app.use("express.static")
// ///

const staticPath = path.join(__dirname, "../public");

const DynamicPath = path.join(__dirname, "../templates/views");

const PartialsPath = path.join(__dirname, "../templates/partials");

// for creating dynamic
app.set("view engine", "hbs");
app.set("views", DynamicPath);

hbs.registerPartials(PartialsPath);

app.use(express.static(staticPath));
// !first step:- creating routing
app.get("", (req, res) => {
  res.render("index", {});
});
app.get("/home", (req, res) => {
  res.render("index", {});
});
app.get("/weather", (req, res) => {
  res.render("weather", {});
});
app.get("/about", (req, res) => {
  res.render("about", {});
});
app.get("*", (req, res) => {
  res.render("404", {});
});

app.listen(port, () => {
  console.log(`server is connected at ${port}`);
});

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 64;
require("./SERVER/Database");
const Routerpath = require("./SERVER/Routers");
app.use(express.json());
const hbs = require("express-handlebars");
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "./views"),
    partialsDir: path.join(__dirname, "./views/partials"),
  })
);
app.use(Routerpath);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

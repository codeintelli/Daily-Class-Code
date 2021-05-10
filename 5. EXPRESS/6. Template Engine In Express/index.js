// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

// we are using here handlebars because it is similar to html css and js user can use it very easily
const express = require("express");
const app = express();
const path = require("path");
const port = 6464;

const absolute_path = path.join(__dirname, "./public");

// ! setting template engine hbs
app.set("view engine", "hbs");
// app.set("view engine", "pug");
// app.set("view engine", "ejs");
// app.set("view engine", "mustache");
app.use(express.static(absolute_path));

app.get("/", (req, res) => {
  res.render("index", {
    FIRST_LOGO_NAME: "IT",
    ILLUSTRATOR_IMAGE: "shop.svg",
    SECOND_LOGO_NAME: "VMH",
    SEASON_SALE: "WI",
    SEASON_SALE_DARK: "NT",
    SEASON_SALE_REMAINING: "ER",
  });
});

app.get("/", (client, server) => {
  server.send("welcome to the templeate engine tutorial");
});

app.get("/about", (req, res) => {
  res.render("about", {
    FIRST_LOGO_NAME: "IT",
    ILLUSTRATOR_IMAGE: "undraw_online_shopping_ga73.svg",
    SECOND_LOGO_NAME: "VMH",
    SEASON_SALE: "welcome to",
    SEASON_SALE_DARK: "About Us",
    SEASON_SALE_REMAINING: "Page",
  });
});

app.get("/feedback", (req, res) => {
  res.render("about", {
    FIRST_LOGO_NAME: "IT",
    ILLUSTRATOR_IMAGE: "feedback.svg",
    SECOND_LOGO_NAME: "VMH",
    SEASON_SALE: "welcome to ",
    SEASON_SALE_DARK: " Feedback ",
    SEASON_SALE_REMAINING: "Page",
  });
});

app.get("/*", (req, res) => {
  res.render("about", {
    FIRST_LOGO_NAME: "IT",
    ILLUSTRATOR_IMAGE: "404 Error.svg",
    SECOND_LOGO_NAME: "VMH",
    SEASON_SALE: " sorry users ",
    SEASON_SALE_DARK: " 404 ERROR ",
    SEASON_SALE_REMAINING: "Page",
  });
});

app.listen(6464);

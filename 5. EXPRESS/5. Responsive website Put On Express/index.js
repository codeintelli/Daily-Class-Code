const express = require("express");
const app = express();
const port = 6464;
const path = require("path");
const absolute_path = path.join(__dirname, "./public");
app.use(express.static(absolute_path));
app.get("/", (req, res) => {
  res.send("wait we are loading the page");
});
app.listen(port);

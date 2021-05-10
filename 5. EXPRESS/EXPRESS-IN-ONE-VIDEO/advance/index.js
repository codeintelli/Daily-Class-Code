const express = require("express");
const app = express();
const path = require("path");
const port = 6;
/* 
~1. relative path(../../../../)
~2. absolute path(__dirname)
*/
const absolute_path = path.join(__dirname, "./public");
console.log(absolute_path);
app.use(express.static(absolute_path));

app.get("/", (req, res) => {});
app.listen(port);

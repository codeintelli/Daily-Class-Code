const express = require("express");
const app = express();
const port = 6464;
const path = require("path");
/* 
! in express we have two types of path 
? 1. Relative Path(../../../){back back back back}
? 2. Absolute Path(__dirname,"../"){direct put url}
*/
const absolute_path = path.join(__dirname, "./public");
// console.log(path.join(__dirname, "./public"));
app.use(express.static(absolute_path));
app.get("/", (req, res) => {
  res.send("wait we are loading the page");
});
app.listen(port);

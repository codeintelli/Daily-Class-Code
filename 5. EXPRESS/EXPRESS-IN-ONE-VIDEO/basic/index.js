const express = require("express");
const app = express();
/* 
~app.get(route,callback); ~ select
~app.post(route,callback{data}): ~insert
~app.put(route,callback{data}): ~update
~app.delete(route,callback{id}): ~delete
?req methods =
req.url
!res.
!send()
~res.status
!res.json()
~res.redirect
!res.end()
!res.write()
*/
app.get("", (req, res) => {
  res.send("Hello World From Admin");
});
app.get("/home", (req, res) => {
  res.send("Hello World From Admin");
});
app.get("/about", (req, res) => {
  res.send("Hello world from About Us page");
});
app.get("*", (req, res) => {
  res.status(404).send("Please enter valid page");
});

app.listen(6, function () {
  console.log("server is connected successfully");
});

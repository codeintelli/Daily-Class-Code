/* 
! challange 1
* here we have a port number localhost:6464/ 
TODO: and we are performing some operation and add page in it like
? about- welcome to about pagge
? feedback- welcome to feedback page
? contact - welcome to feedback pagge
? team - welcome to team page
? home- welcome to home page
? index- welcome to index page 
*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome the home page");
});

app.get("/home", (req, res) => {
  res.status(200).send("<h1>welcome the home page</h1>");
});

app.get("/index", (req, res) => {
  res.send("welcome the index page");
});
app.get("/about", (req, res) => {
  res.send("welcome the about page");
});
app.get("/feedback", (req, res) => {
  res.send("welcome the feedback page");
});
app.get("/team", (req, res) => {
  res.send("welcome the team page");
});
app.get("/contact", (req, res) => {
  res.send("welcome the contact page");
});
app.get("*", (req, res) => {
  res.status(404).send("404 error page");
});
app.listen(6464, () => {
  console.log("server is running perfectly");
});

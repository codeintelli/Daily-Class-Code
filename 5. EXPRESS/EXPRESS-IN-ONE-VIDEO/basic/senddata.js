const express = require("express");
const app = express();
const port = 6;
app.get("", (req, res) => {
  res.write(
    `<h1 style="color:red">Hello world from h1 tag using res.send</h1>`
  );
  res.write(
    `<h1 style="color:red">Hello world from h2 tag using res.send</h1>`
  );
  res.send();
}); //!html data

app.get("/api", (req, res) => {
  res.json([
    { name: "shiva", company: "itvmh" },
    { name: "Mahadev", company: "itvmh" },
  ]);
}); //!json data (api)

app.listen(port, () => {
  console.log("server is created");
});

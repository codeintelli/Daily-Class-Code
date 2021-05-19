const express = require("express");
const app = express();
const port = process.env.PORT || 6464;
const con = require("./database/connection");
const router = require("./router/router");
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(
    `express server is connected successfully http://localhost:${port}`
  );
});

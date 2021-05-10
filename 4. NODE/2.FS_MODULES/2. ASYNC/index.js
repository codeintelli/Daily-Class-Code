const fs = require("fs");

fs.writeFile(
  "async.txt",
  "we are creating data in file using async way",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file is created successfully");
    }
  }
);

fs.readFile("./async.txt", "utf8", (data, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

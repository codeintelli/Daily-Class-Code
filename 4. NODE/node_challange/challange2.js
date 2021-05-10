const fs = require("fs");

// // crud operation in fs module

// // 1. create folder
fs.mkdir("c2_fs", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("folder have been created");
  }
});
console.log("folder have been created successfully");

// // // 2. create file
fs.writeFile(
  "./c2_fs/demo.txt",
  "demo file will be created asynchronously",
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

console.log("file and folder have been created successfully");
// // 3. update the file
fs.appendFile(
  "./c2_fs/demo.txt",
  "demo file will be appended here so you can see the data that have been append",
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

// // 4. read the data
const read = fs.readFile("./c2_fs/demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
// console.log(read);

// 5. rename the file
fs.rename("./c2_fs/demo.txt", "./c2_fs/demo_rename.txt", (err) => {
  if (err) {
    console.error(err);
  }
});
// deleting the file
fs.unlink("./c2_fs/demo_rename.txt", (err) => {
  if (err) {
    console.error(err);
  }
});

// // //deleting the folder
fs.rmdir("./c2_fs", (err) => {
  if (err) {
    console.error(err);
  }
});

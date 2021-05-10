const fs = require("fs");

// // crud operation in fs module

// // 1. create folder
// fs.mkdirSync("c1_fs");
console.log("folder have been created successfully");

// // 2. create file
fs.writeFileSync("./c1_fs/demo.txt", "demo file will be created");

console.log("file and folder have been created successfully");
// // 3. update the file
// fs.appendFileSync(
//   "./c1_fs/demo.txt",
//   "demo file will be appended here so you can see the data that have been append"
// );

// // 4. read the data
// const read = fs.readFileSync("./c1_fs/demo.txt", "utf-8");
// console.log(read);

// 5. rename the file
// fs.renameSync("./c1_fs/demo.txt", "./c1_fs/demo_rename.txt");
// deleting the file
// fs.unlinkSync("./c1_fs/demo_rename.txt");

// //deleting the folder
// fs.rmdirSync("./c1_fs");

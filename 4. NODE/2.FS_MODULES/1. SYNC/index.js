// FS MODULES AND USING SYNCHRONOUS
const fs = require("fs");

// write file if file is exist then they will insert data into the file and if file is not exist then it can create the file and insert data into it.
// fs.writeFileSync("Sync.txt", "node day 2  tutorial");
// fs.writeFileSync(
//   "Sync.txt",
//   "node day 2  tutorial sync async async os module path module import export module or create own modules npm global module module wrapper function"
// );
// 2. read file sync if file is not exist then show error
const buf_Data1 = fs.readFileSync("Sync.txt");
const buf_Data2 = fs.readFileSync("Sync.txt", "utf8");
console.log(buf_Data1.toString());
console.log(buf_Data2);

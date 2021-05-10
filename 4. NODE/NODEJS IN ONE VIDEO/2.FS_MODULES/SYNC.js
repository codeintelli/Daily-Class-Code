// CHALLANGE 1
// 1. FOLDER CREATE USING FS MODULE -> done
// 2. FILE CREATE USING FS MODULE(CREATE) -> done
// 3. WRITE CONTENT IN THE CREATED FILE(INSERT) -> done
// 4. UPDATE CONTENT IN THE FILE THAT WE HAVE CREATE BEFORE(UPDATE)
// 5. read file that you have writter
// 5. RENAME THE FILE WHICH WE HAVE CREATED
// 6. DELETE THE FILE THAT WE HAVE CREATED
// 7.DELETE THE FOLDER
const fs = require("fs");
let data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// //   creating folder
// fs.mkdirSync("challange_1");
// // creating file and insert data into it
// fs.writeFileSync("./challange_1/demo.txt", data);
// // data update in file
// fs.appendFileSync(
//   "./challange_1/demo.txt",
//   "\n\n\n\n\n\n data is updated successfully"
// );
// let readFile = fs.readFileSync("./challange_1/demo.txt", "UTF-8");
// console.log(readFile);
// let bindata = fs.readFileSync("./challange_1/demo.txt", "UTF-8");
// console.log(bindata.toString());
// rename file
// fs.renameSync("./challange_1/demo.txt", "./challange_1/demo_challange.txt");

// fs.unlinkSync("./challange_1/demo_challange.txt");
fs.rmdirSync("./challange_1");

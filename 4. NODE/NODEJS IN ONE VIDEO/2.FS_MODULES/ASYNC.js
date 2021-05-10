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
fs.mkdir("challange_2", () => {
  console.log("folder created successfully");
});
// // creating file and insert data into it
fs.writeFile("./challange_2/demo.txt", data, function (err) {
  console.log("file created successfully");
});
// // data update in file
fs.appendFile(
  "./challange_2/demo.txt",
  "\n\n\n\n\n\n data is updated successfully",
  () => {
    console.log("fule updated successfully");
  }
);
let readFile = fs.readFile("./challange_2/demo.txt", "UTF-8", (Readdata) => {
  console.log(Readdata);
  console.log("file read successfully");
});

// let bindata = fs.readFile("./challange_2/demo.txt", "UTF-8");
// console.log(bindata.toString());
// rename file
fs.rename(
  "./challange_2/demo.txt",
  "./challange_2/demo_challange.txt",
  () => {}
);

// fs.unlink("./challange_2/demo_challange.txt",()=>{});
// fs.rmdir("./challange_2",()=>{});

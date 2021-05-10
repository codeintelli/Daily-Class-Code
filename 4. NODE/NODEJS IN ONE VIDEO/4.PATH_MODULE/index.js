const path = require("path");
const fileurl = "F://CLASSESNODE//4.PATH_MODULES//index.js";
const dummyPath = "c:/desktop/";

console.log("Directory Name:- ", path.dirname(fileurl));
console.log(`Base Name:- ${path.basename(fileurl)}`);
console.log(`Extension Name:- ${path.extname(fileurl)}`);
console.log(`Normalize:- ${path.normalize(fileurl)}`);
console.log(`Delimeter:- ${path.delimiter}`);
console.log(`is absolute:- ${path.isAbsolute(dummyPath)}`);

console.log("path parse:-" + path.parse(fileurl));
console.log("path parse:-", path.parse(fileurl));
// const obj = {
//   dir: "F:/CLASSESNODE/4.PATH_MODULES/",
//   base: "index.js",
// };
let pathobj = path.parse(fileurl);
console.log("formate the path", path.format(pathobj));

const fs = require("fs");
const a = fs.readFileSync(
  "../2.FS_MODULES/challange_2/demo_challange.txt",
  "UTF-8"
);
console.log(a);

let name = "Shiva";
module.exports.name = name;
console.log(name, __filename);
console.log(name, __dirname);

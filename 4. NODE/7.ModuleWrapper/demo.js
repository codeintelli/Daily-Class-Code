const fs = require("fs");
const name = require("./index");
const a = fs.readFileSync("../2.FS_MODULES/1. SYNC/Sync.txt", "UTF-8");
console.log(a);
console.log(name.name);

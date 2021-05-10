// this is called wrapper function and this can be private
// behind the scenes how node works
// (() => {})(); this will also called as IIFE(imediately invoke function expression)
// all the scope under () will become private scope
(function () {
  // we can require this type
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
  //   we can export in this type
})();

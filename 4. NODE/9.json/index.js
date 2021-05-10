const fs = require("fs");
const mydata = {
  name: "krupa",
  age: 22,
  collage: "gmca",
};

// const jsondata = JSON.stringify(mydata);
// console.log(mydata);
// fs.appendFile("data.json", jsondata, (err, data) => {
//   if (err) {
//     console.log("your data is not inserted");
//   }
// });

const jsondatafile = fs.readFile("data.json", (err, data) => {
  const orgdata = JSON.parse(data);
  console.log(orgdata);
  console.log(err);
});

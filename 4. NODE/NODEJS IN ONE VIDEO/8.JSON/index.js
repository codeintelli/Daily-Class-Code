// 1. create one object and store it into another file informate of json
// 2. obj ne json na formate ma again call karavsu and simply j pn obj hse ne again normal obj ma pn convert krisu
const fs = require("fs");
const obj = {
  name: "shiva",
  age: 22,
  collage: "gmca",
  skills: {
    json: true,
    node: true,
    django: false,
  },
};
const jsonData = JSON.stringify(obj);
// fs.writeFile("data.json", jsonData, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.readFile("data.json", "UTF-8", (err, data) => {
  console.log(data);
  const orgdata = JSON.parse(data);
  console.log(orgdata);
});

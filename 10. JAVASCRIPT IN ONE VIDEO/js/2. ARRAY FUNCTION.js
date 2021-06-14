// *ARRAY IN JAVASCRIPT
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, ["hello", 5]];
const arr = new Array(23, 123, 21, "Orange");

// IN END
marks.push(49);
// IN START
marks.unshift(4923);
marks.pop();
marks.shift();
marks.reverse();
console.log(marks);
// 2 SE CHALU KRYE OR 3 KO HATA DIJYE
const a = marks.splice(2, 3);
console.log(a);
// marks = marks.concat(a);
// console.log(marks);

let myobj = {
  "first name": "harry",
  channel: "CodeWithHarry",
  isActive: true,
  marks: [1, 5, 3, 6],
};

// console.log(myobj);
// console.log(myobj["channel"]);
// console.log(myobj.channel);

//   console.log(marks);
//   console.log(marks.length);
//   console.log(Array.isArray(marks));
console.log(mixed[2][0]);
//   console.log(fruits[1]);

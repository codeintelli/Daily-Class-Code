 // *ARRAY IN JAVASCRIPT
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, ["hello", 5]];
//   const arr = new Array(23, 123, 21, "Orange");

IN END
marks.push(49);
IN START
marks.unshift(4923);
marks.pop();
marks.shift();
marks.reverse(mark2);
2 SE CHALU KRYE OR 3 KO HATA DIJYE
const a = marks.splice(2, 3);
console.log(marks);
marks = marks.concat(a);
console.log(marks);

let myobj = {
  "first name": "harry",
  channel: "CodeWithHarry",
  isActive: true,
  marks: [1, 5, 3, 6],
};

console.log(myobj);
console.log(myobj["channel"]);
console.log(myobj.channel);

//   console.log(marks);
//   console.log(marks.length);
//   console.log(Array.isArray(marks));
//   console.log(mixed[2][0]);
//   console.log(fruits[1]);

*date function in javascript
let today = new Date();
console.log(typeof today);
let otherDate = new Date("8-4-2003 04:54:08");
otherDate = new Date('June 13 1976');
otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

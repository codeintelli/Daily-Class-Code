// the map function create a new array with the result of calling function of every array element.

// the map function calls the provided function once for each element in an array in order.

// $$ map function dosent execute the function for an array element with value
// !map function dosent change the original array value.

// [ ] Syntax:- Array.map(function(arrayData/currentValue,index,arr),thisValue)

// let arr = [3, 4, 5, 56, 6, 7, 78, 8, 8, 9, 2];

// let x = arr.map(function (elem) {
//   console.log("arr data will be shown here", elem);
// });
// console.log(x);

// let person = [
//   { fname: "shiva", lname: "mahadev" },
//   { fname: "shiva", lname: "bholenath" },
//   { fname: "sankar", lname: "mahadev" },
// ];

// function getFullName(item) {
//   let fullName = [item.fname, item.lname].join(" ");
//   return fullName;
// }

// function myfunc() {
//   let data = person.map(getFullName);
//   console.log(data);
// }
// myfunc();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [x, y, z, a, b, ...c] = arr;
console.log(x);
console.log(y);
console.log(c);
console.log(b);

// *date function in javascript
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

// * math function in javascript

console.log("Math object in javascript");
//   normal math function or using operator
let x = 3;
let y = 6;
let z;
z = x + y;
z = x * y;
z = x - y;
//   z = x / y;

z = Math;
z = Math.PI;
z = Math.round(4.5);
z = Math.ceil(4.1);
z = Math.floor(4.9);
z = Math.abs(-232);
//   z = Math.sqrt(-531231);
z = Math.sqrt(25);
z = Math.pow(2, 3);
z = Math.min(2, 3, 4, 5, 6, 7, 8, 9, 9, 34, 3, 25, 365);
z = Math.max(2, 3, 4, 5, 6, 7, 8, 9, 9, 34, 3, 25, 365);
z = Math.random(3, 16);
  z = 100 * Math.random();
  z = Math.ceil(50 + (100 - 50) * Math.random());
  z = Math.floor(100 * Math.random());

console.log(z);

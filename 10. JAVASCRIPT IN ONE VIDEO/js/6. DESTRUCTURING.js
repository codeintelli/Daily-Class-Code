// *thapa
// ? the destructing asssignment sysntax is a javascript expression that makes it possible to unpack the value from arrays or properties from object into distinct variables.

// const mylang = ["js", "express", "node", "react", "angular", "django"];
// // in es5
// let top1 = mylang[0];
// let top2 = mylang[1];
// let top3 = mylang[2];
// let top4 = mylang[3];
// console.log(`${top1} ${top2} ${top3} ${top4}`);

// // !now using array destructing
// let [top1, top2, top3, top4, top5, top6] = mylang;

// console.log(`${top1} ${top2} ${top3} ${top4}  ${top5} ${top6}`);
// console.log(mylang.length);

// // FOR DISPLAY 1ST AND LAST IN ARRAY

// let [top1, , , , , top6] = mylang;

// console.log(`${top1} ${top6}`);

// HARRY
console.log("DESTRTURING IN JAVASCRIPT");
let a, b;
[a, b] = [21, 32];
console.log(a, b);
// here DISTRTURING plays important role
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(a, b, c, d);

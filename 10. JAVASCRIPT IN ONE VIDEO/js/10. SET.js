console.log(" SETS IN JAVASCRIPT");
const mySet = new Set();
console.log("this set look like:", mySet);
//   adding value in sets
mySet.add("this");
mySet.add("my name");
//   this will not be inserted because it will become repetad and in sets only unique value will be stored
mySet.add("this");
mySet.add("that");
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add("that2");
console.log("this set look like:", mySet);
// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, "this", false, { a: 4, b: 8 }, "this"]);
console.log("New set:", mySet2);

console.log(mySet.size); // Get the size of the set

console.log("checking the value", mySet.has(344)); // Check whether set has 346 or not

console.log("Before removal", mySet.has("that2"));
mySet.delete("that2"); // Remove an element from the set
console.log("After removal", mySet.has("that2"));

// Iterating a set
for (let item of mySet) {
  console.log("Item is using normal for  :", item);
}

mySet.forEach((item) => {
  console.log("Item is  :", item);
});

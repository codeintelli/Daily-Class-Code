// * promise function in javascript
//!promise are used to handle asynchronous operations in javascript they are easy to manage when dealing with multiple asynchronous operations where callback can create callback hell leading to unmanagable code.
// a promise is an object that keep track about weather a certain event has happened already or not.

// apde j krye e complete thyu k nhi means fullfill or reject and ek var e kam thai gyu ne pa6i ana pa6i tamaru su output avse e pn tamne batavse
// promise 3 stages

// task
// 1. task aap muje 10 baje call kro
/* 
1. pending
2. fullfill/resolve
3. reject */

// own task
// api student
// 1. 2s roll no
// 2. 2s name and age

// 1. promise constructor

// if we are using this then we can compulsory use executor and executor means normal function under promise with two argument resolve and reject
// promise produce
let pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    // console.log(roll_no);
    resolve(roll_no);
    reject("error while communicating");
  }, 2000);
});

const biodata = (indxdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indxdata) => {
        let biodata = {
          name: "shiva",
          age: 26,
        };
        resolve(`${indxdata},${biodata.name},${biodata.age}`);
      },
      2000,
      indxdata
    );
  });
};

// // promise object always have two method then and catch
// // promise reduce
pro1
  .then((rno) => {
    console.log(rno);
    biodata(rno[1]).then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

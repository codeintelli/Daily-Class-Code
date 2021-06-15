console.log("localstorage and session storage");
let impArray = ["adrak", "pyaz", "bhindi"];
// add a key value pair in local storage
// it stores the value permenently until you will remove or clear it
localStorage.setItem("Name", "Shiva");
localStorage.setItem("Name2", "mahadev");
localStorage.setItem("sabzi", JSON.stringify(impArray));

//   // //   clears the entire local storage

localStorage.clear();

//   // clear a perticular key and value pair

localStorage.removeItem("sabzi");

//   //   Retrive an item from the local storage
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem("sabzi"));
console.log("local storage using:   " + name);

// *session storage
session storage cleares when the user clean the storage or cookies and if the system have crash or facing some issue then the storage in session will be cleared
sessionStorage.setItem("Name", "Shiva");
sessionStorage.setItem("Name2", "mahadev");
sessionStorage.setItem("sabzi", JSON.stringify(impArray));

//   clears the entire local storage

  sessionStorage.clear();

clear a perticular key and value pair

  sessionStorage.removeItem("sabzi");

  Retrive an item from the local storage
let name = sessionStorage.getItem("Name");
name = JSON.parse(sessionStorage.getItem("sabzi"));
console.log(name);

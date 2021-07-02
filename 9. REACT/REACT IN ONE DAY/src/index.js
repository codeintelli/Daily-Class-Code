import React from "react";
import ReactDOM from "react-dom";

// import ReactComponent from "./COMPONENTS/1. REACT COMPONENT";
// import MiniProject from "./COMPONENTS/2. MINI PROJECT";
// import ImportExport from "./COMPONENTS/3. IMPORT EXPORT";
// import SimpleCalc from "./COMPONENTS/4. SIMPLE CALC";
// import Props from "./COMPONENTS/5. PROPS/";
// import ReactArray from "./COMPONENTS/6. ARRAY";
// import ArrayMap from "./COMPONENTS/7. NETFLIX USING ARRAY & MAP";
// import IfElse from "./COMPONENTS/8. IF ELSE";
// import Ternary from "./COMPONENTS/9. CONDITIONAL STATEMENT";
// import SlotMachine from "./COMPONENTS/10. SLOT MACHINE";
// import Emojie from "./COMPONENTS/11. EMOJIE";
// import ArrayDest from "./COMPONENTS/12. ARRAY DESTRUCTURING";
// import Hooks from "./COMPONENTS/13. HOOKS";
import Hooks from "./COMPONENTS/14. HOOKS EXAMPLE";

/*
*********************** 
[ ] 🤩🤩🤩🤩  FOLDER STRUCTURE
*************************
*/

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback");

/*
*********************** 
[ ] 🤩🤩🤩🤩  JSX IN REACT
*************************
*/

// ReactDOM.render(
//   <h1>Jay Shree Ganesha, Har Har Mahadev</h1>,
//   document.getElementById("root")
// );
// var h1 = document.createElement("h1");
// h1.innerHTML = "Jay Shree Ganesha";
// document.getElementById("root").appendChild(h1);

/*
*********************** 
[ ] 🤩🤩🤩🤩  MULTIPLE JSX ELEMENT
*************************
*/

// ReactDOM.render(
//   <div>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </div>,
//   document.getElementById("root")
// );
// ?in react v16 its possible for render to return an array of the element but the main difference is that you have to add comma like we declare in array

// * const arr = ['shiva','mahadev','bholenath','sankar']
// ReactDOM.render(
//   [<h1>Har Har Mahadev</h1>, <p>Jay Shree Ganesha</p>],
//   document.getElementById("root")
// );

/*
*********************** 
[ ] 🤩🤩🤩🤩 REACT FRAGMENT
*************************
*/

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// $$in any condition you forgot to use fragment then you can also put blank the babel will by default take React.Fragment
// ReactDOM.render(
//   <>
//     <h1>Har Har Mahadev</h1>
//     <p>Jay Shree Ganesha</p>
//   </>,
//   document.getElementById("root")
// );

// [ - ]challange 1:- add one h1 element in it 2:- add one p element in it 3:- add 5 fav name in it

// ReactDOM.render(
//   <>
//     <h1>Top 5</h1>
//     <p>Netflix Series</p>
//     <ol>
//       <li>TERMINATOR 1</li>
//       <li>TERMINATOR 2</li>
//       <li>TERMINATOR 3</li>
//       <li>TERMINATOR 4</li>
//       <li>TERMINATOR 5</li>

//     </ol>
//   </>,
//   document.getElementById("root")
// );

// [ ] 🤩🤩🤩🤩  JSX EXPRESSION

// const name = "Netflix Series";
// var i = 1;

// ReactDOM.render(
//   <>
//     <h1>Top 5</h1>
//     <p>{name}</p>
//     <ol>
//       <li>TERMINATOR {i}</li>
//       <li>TERMINATOR {++i}</li>
//       <li>TERMINATOR {i + 1} </li>
//       <li>TERMINATOR {i + 2} </li>
//       <li>TERMINATOR {i + 3} </li>
//       <li>TERMINATOR {Math.random()} </li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// some importtant variables
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://google.com";

/*
*********************** 
[ ] 🤩🤩🤩🤩  TEMPLATE LITERAL
*************************
*/
// const name = "shiva";
// const company = "itvmh";

// ReactDOM.render(
//   <>
//     <h1>{`my name is ${name} and i am working in ${company}`}</h1>
//   </>,
//   document.getElementById("root")
// );

// [ - ]challange 2:- display current time and current date

// const curdate = new Date().toLocaleDateString();
// const curtime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1>{`challange 2`}</h1>
//     <p>{`Today Data is:- ${curdate}`}</p>
//     <p>{`And Current Time is:- ${curtime} `}</p>
//   </>,
//   document.getElementById("root")
// );

/*
*********************** 
[ ] 🤩🤩🤩🤩  JSX ATTRIBUTE
*************************
*/
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://google.com";
// ReactDOM.render(
//   <>
//     <h1 className="heading" contentEditable="true">Hello This Is Shiva</h1>
//     <img src={img1} alt="DEMO " />
//     <img src={img2} alt="DEMO " />
//     <a href={links} target="_itvmh">
//       <img src={img3} alt="DEMO " />
//     </a>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

[ ] 🤩🤩🤩🤩  CSS STYLING 

******************
*/

// ReactDOM.render(
//   <>
//     <h1 className="heading">Hello This Is Shiva</h1>
//     <div className="img-design">
//       <img src={img1} alt="DEMO " />
//       <img src={img2} alt="DEMO " />
//       <a href={links} target="_itvmh">
//         <img src={img3} alt="DEMO " />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );
/* 
******************

[ ] 🤩🤩🤩🤩 USING GOOGLE FONT CLASS VS CLASSNAME

******************
*/

/* 
******************

[ ] 🤩🤩🤩🤩 INTERNAL CSS AND INLINE CSS

******************
*/

// const headingInline = {
//   textTransform: "uppercase",
//   fontWeight: "bold",
//   textAlign: "center",
//   fontSize: "2rem",
//   margin: "2rem",
//   color: "#e67e22",
//   fontFamily: `"Abhaya Libre", serif`,
// };
// ReactDOM.render(
//   <>
//     {/* ~internal css */}
//   <h1 style={headingInline}>Hello This Is Shiva</h1>
//     {/* inline css */}
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <img src={img1} alt="DEMO " />
//       <img src={img2} alt="DEMO " />
//       <a href={links} target="_itvmh">
//         <img src={img3} alt="DEMO " />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

[ ] 🤩🤩🤩🤩  MINI PROJECT GREETING WEBSITE

******************
*/

// let curtime = new Date().getHours();
// let greeting = "";
// console.log(curtime);
// const greetingColor = {};
// const Design = {
//   background: "#34495e",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   width: "100%",
// };
// const headingText = {
//   padding: "20px 20px",
//   background: "#2ecc71",
//   borderRadius: "20px",
//   color: "#bdc3c7",
// };
// if (curtime >= 1 && curtime < 12) {
//   greeting = "Good Morning";
//   greetingColor.color = "Green";
// } else if (curtime >= 12 && curtime < 20) {
//   greeting = "Good Afternoon";
//   greetingColor.color = "Orange";
// } else {
//   greeting = "Good Night";
//   greetingColor.color = "Yellow";
// }

// ReactDOM.render(
//   <>
//     <div style={Design}>
//       <h1 style={headingText}>
//         Hello Sir, <span style={greetingColor}> {greeting}</span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

/* 
******************

[ ] 🤩🤩🤩🤩 REACT COMPONENTS

******************
*/

// ReactDOM.render(
//   <>
//     <ReactComponent />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App />, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 CONVERT MINI PROJECT INTO COMPONENTS

******************
*/

// ReactDOM.render(<MiniProject />, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 ES6 IMPORT EXPORT MODULE IN REACT JS

******************
*/

// ReactDOM.render(<ImportExport />, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 CREATE SIMPLE CALCULATOR

******************
*/

// ReactDOM.render(<SimpleCalc />, document.getElementById("root"));
/* 
******************

[ ] 🤩🤩🤩🤩 PROPS IN NETFLIX APP

******************
*/

// ReactDOM.render(<Props />, document.getElementById("root"));

/* 
******************



[ ] 🤩🤩🤩🤩 ARRAY IN REACT JS

******************
*/

// ReactDOM.render(<ReactArray ></ReactArray>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 REACT JS NETFLIX USING ARRAY

******************
*/

// ReactDOM.render(<ArrayMap></ArrayMap>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 REACT JS DEVELOPERS TOOLS

******************
*/

// ReactDOM.render(<></>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 IF ELSE CONDITION

******************
*/

// ReactDOM.render(<IfElse></IfElse>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩  CONDITIONAL STATEMENT

******************
*/

// ReactDOM.render(<Ternary></Ternary>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 SLOT MACHINE

******************
*/

// ReactDOM.render(<SlotMachine></SlotMachine>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 EMOJIE IN REACT JS
******************
*/

// ReactDOM.render(<Emojie></Emojie>, document.getElementById("root"));

/* 
******************

[ ] 🤩🤩🤩🤩 ARRAY DESTRTURING

******************
*/

// ReactDOM.render(<ArrayDest></ArrayDest>, document.getElementById("root"));

/* 


[ ] Hooks in React JS in Hindi - useState in Hook in React JS  


*/
// ReactDOM.render(<Hooks></Hooks>, document.getElementById("root"));

/* 
[ ] React Hooks Challenge #6- Get Time on Refreshing and Clicking Button using useState Hook

*/
ReactDOM.render(<Hooks></Hooks>, document.getElementById("root"));

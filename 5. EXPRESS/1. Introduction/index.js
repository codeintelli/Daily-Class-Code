/* 
TODO: use better comment to see command in better view
! JAVASCRIPT = CLIENT SIDE SCRIPTING LANGUAGE
! NODE = RUNCTIME ENVO
! PHP = EXPRESS
! MONGODB = MYSQL
! REACT/ANGULAR/VUE.JS = HTML CSS JS BOOTSTRAP 
! what is express
express is node js framework its the most popular framework as of now (the most statted on npm) 

expressjs is a web application framework that provides you with a simple API to build websites web apps and back ends.

WHY DO WE ACTUALLY NEED EXPRESS js
try to write a small REST API server in plain node js that is using only core modules and then in express the latter will take you 5-10x less time and lines of code.

to use express you have to preform this command 


npm init -y
npm install express

*/
/*  
app.get(route,callback): select
app.post: insert
app.put: update
app.delete : delete
*/

/*
    res bydefault method that we are using in express 
    ? res.render(kya dikhana hai,kaha dikhana hai , callback); //react
    ? res.send();
    ? res.status();
    ? res.redirect();
    ? res.json();
    ? res.end();
    ? res.write();
    here 
    https://xyz.com/home_page?=express

    ! home_page?=express 
    * it is your route wher we want to perform operation
    */

const express = require("express");
const app = express();
const port = 6464;

app.get("/", (req, res) => {
  res.send("Hello from the user");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about us page");
});

app.listen(port);

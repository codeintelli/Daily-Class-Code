// the http.createServer() method includes request and response parameter which is supplied by node.js
/* the request object can be used to get information about  the current HTTP request.
eg.url,request handler,data 

the response object can be used to send a response for the current HTTP request 

if you  response from the HTTP server is supposed to be displayed as HTML, You should includes an HTTP header with the correct content type:
*/

const http = require("http");
const chalk = require("chalk");
const port = 6464;
const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/index" || req.url == "/home") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url == "/about") {
    res.end("About Page");
  } else if (req.url == "/contact") {
    res.end("Contact Page");
  } else if (req.url == "/login") {
    res.end("Login Page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 error page not found<h1> ");
    // if any user write page that will not be in our project and that page will show this code 404
    //  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    // for status code we are using writeHead() and infect of end() we can also use write() but the key difference is that the end() method send that with response end here and write will not tell request that please stop this request we got the result that we want.and if we dont end() then that will be taks too much load

    // and much extra features if we want to put html content in this we can simply put content-type = text/html
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(chalk.green("your server is created successfully"));
});

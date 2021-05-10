const http = require("http");
const chalk = require("chalk");
const port = 6464;
const server = http.createServer((req, res) => {
  if (req.url == "/home" || req.url == "/index" || req.url == "/") {
    res.end("<h1>hello from itvmh on our home page</h1>");
  } else if (req.url == "/about") {
    res.end("welcome to about us page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 error occureed");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log(chalk.green.bold.bgWhite("server is created successfully"));
});

const http = require("http");
const fs = require("fs");
const port = 6464;
const server = http.createServer((req, res) => {
  if (req.url == "/home" || req.url == "/index" || req.url == "/") {
    res.end("<h1>hello from itvmh on our home page</h1>");
  } else if (req.url == "/api") {
    let data = fs.readFileSync(`./jsondata.json`, "utf-8");
    let orgdata = JSON.parse(data);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
    // fs.readFile(`./jsondata.json`);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 error occureed");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log("server is created successfully");
});

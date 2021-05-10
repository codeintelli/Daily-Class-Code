const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  // const rstream = fs.createReadStream("input.txt");
  //   const rstream = fs.readFileSync("input.txt", "utf-8");
  //   res.end(rstream);
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});
server.listen(6464, "127.0.0.1", () => {
  console.log("server is running");
});

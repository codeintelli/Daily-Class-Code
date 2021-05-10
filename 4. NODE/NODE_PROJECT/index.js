const http = require("http");
const fs = require("fs");
let requests = require("requests");
const homeFile = fs.readFileSync("index.html", "UTF-8");
const replaceVal = (tempval, orgval) => {
  let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
  temperature = temperature.replace("{%temp_min%}", orgval.main.temp_min);
  temperature = temperature.replace("{%temp_max%}", orgval.main.temp_max);
  temperature = temperature.replace("{%location%}", orgval.name);
  temperature = temperature.replace("{%country%}", orgval.sys.country);
  return temperature;
};
// console.log(homeFile); {% location %} , {% country %} {% temp_max %} {% temp_min %} {% tempval %}
const server = http.createServer((req, res) => {
  if ((res.url = "/")) {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Gujarat&appid=3d31fd8058b3d7d702f8d25b0512877d"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        // console.log(arrdata[0].main.temp);
        const realTimeData = arrdata
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("file not found error 404");
  }
});
server.listen(6464, "localhost");

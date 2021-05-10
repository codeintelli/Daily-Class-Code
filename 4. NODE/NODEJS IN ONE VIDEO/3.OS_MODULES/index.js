const os = require("os");
const fs = require("fs");
let a = os.arch();
let b = os.freemem() / 1024 / 1024 / 1024;
let c = os.totalmem() / 1024 / 1024 / 1024;
let d = os.hostname();
let e = os.platform();
let f = os.type();
let g = os.homedir();
let h = os.tmpdir();
let i = os.endianness();
let j = os.loadavg();
let k = os.release();
let m = os.uptime();
// console.log(" CPUs:  " + os.cpus());
// console.log(" NetworkInterface:  " + os.networkInterfaces());
const cpus = os.cpus();
let n = JSON.stringify(cpus);
const ni = os.networkInterfaces();
let o = JSON.stringify(ni);
// console.log(n);
let allinfo = `architecture:\t${a}\n ${b}\n\n\n${c}\n\n\n${d}\n\n\n${e}\n\n\n${f}\n\n\n${g}\n\n\n${h}\n\n\n${i}\n\n\n${j}\n\n\n${k}\n\n\n${m}\n\n\n${n}\n\n\n${o}`;
fs.writeFile("osmodule.txt", allinfo, (err) => {
  if (err) {
    console.log(err);
  }
});

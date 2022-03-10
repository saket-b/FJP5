
const os = require("os");

let  archinfo = os.arch();
console.log(archinfo);

let cpusinfo = os.cpus();
//console.log(cpusinfo);

let hostname = os.hostname();
console.log(hostname);

let networkinfo = os.networkInterfaces();
console.log(networkinfo);


console.log(os.release()); // operatin syatem as a string

console.log(os.platform());

console.log(os.type());

console.log(os.totalmem());

let hour = os.uptime()/3600; // it returns system uptime in number of seconds
console.log(hour);

console.log(os.userInfo());
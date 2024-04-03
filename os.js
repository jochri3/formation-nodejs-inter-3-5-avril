const os = require("os");

console.log(os.cpus());

const totalMemoryInGB = os.totalmem() / 1024 / 1024 / 1024;
console.log("Memory : ", totalMemoryInGB, "GB");
console.log("Hostname : ", os.hostname());
console.log("Network interfaces : ", os.networkInterfaces());

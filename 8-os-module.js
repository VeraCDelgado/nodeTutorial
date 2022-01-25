const os = require('os');

//info about current users

const user = os.platform();
console.log(user);

// method returns the system uptime un seconds

console.log(`the system uptime is ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOS);
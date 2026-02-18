//The os module provides operating system-related utility methods and properties. 
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds (the total time an operating system has 
// been running continuously since its last boot, restart, or power-on)
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
};

console.log(currentOS);
console.log('Starting app.')

const fs = require('fs');
const os = require('os');
/*
 * userInfo gets username and other details from users computer
 */
const user = os.userInfo();
// Creates new file and appends 'Hello Jock!'
fs.appendFileSync('os-greeting.txt', `Hello ${user.username}!`)

// Remove file
setTimeout(() => {
  fs.unlinkSync('./os-greeting.txt')
}, 4000);
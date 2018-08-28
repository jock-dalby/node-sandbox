console.log('Starting app.')

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const addNoteResult = notes.addNote();
const addResult = notes.add(7, 10);

/*
 * userInfo gets username and other details from users computer
 */
const user = os.userInfo();
// Creates new file and appends 'Hello Jock!'
fs.appendFileSync('os-greeting.txt',
  `Hello ${user.username}!
  You are ${notes.age}.
  ${addNoteResult}.
  ${addResult}`
)

// Remove file
setTimeout(() => {
  fs.unlinkSync('./os-greeting.txt')
}, 4000);
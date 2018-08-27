console.log('Starting app.');

// Built in file-system module
const fs = require('fs');
const errorHandler = err => err && console.log(err)

/*
 * 2 ways to append a file.
 * If file does not exist it will create and append the text.
 * If the file already exists it will append the text to end of file.
 */
// Option 1: appendFile (async so requires error callback)
fs.appendFile('appendFile-greetings.txt', 'Hello world!', errorHandler);

// Option 2: appendFileSync (sync so does not require error callback)
fs.appendFileSync('appendFileSync-greetings.txt', 'Hello world!')

// Remove files
setTimeout(() => {
  // Asyncronously
  fs.unlink('./appendFile-greetings.txt', errorHandler)
  // Syncronously
  fs.unlinkSync('./appendFileSync-greetings.txt')
}, 4000);
